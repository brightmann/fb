// Precompiles content/posts/*.mdx to static React components at build time.
//
// Replaces next-contentlayer's useMDXComponent (which evaluates the compiled
// MDX with new Function(), forbidden on Cloudflare Workers) with plain
// importable modules. Mirrors the remark/rehype pipeline from
// contentlayer.config.js so rendered output stays identical.
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { compile } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const matter = require('gray-matter')

const root = new URL('../', import.meta.url).pathname
const contentDir = join(root, 'content', 'posts')
const outDir = join(root, 'util', 'compiled')

const files = (await readdir(contentDir)).filter((f) => f.endsWith('.mdx'))
await mkdir(outDir, { recursive: true })

const entries = []
for (const file of files) {
  const slug = file.replace(/\.mdx$/, '')
  const raw = await readFile(join(contentDir, file), 'utf8')
  // Strip frontmatter — build-content.mjs consumes it separately for metadata.
  const { content: body } = matter(raw)
  const { value } = await compile(body, {
    outputFormat: 'program',
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    providerImportSource: '@/util/mdx-components',
  })
  const outName = `${slug}.jsx`
  await writeFile(join(outDir, outName), String(value))
  const varName = `Mdx_${slug.replace(/[^a-zA-Z0-9_$]/g, '_')}`
  entries.push({ slug, varName, outName })
  console.log(`compiled ${file} -> util/compiled/${outName}`)
}

const registry =
  entries.map(({ varName, outName }) => `import ${varName} from './${outName}'`).join('\n') +
  `\n\nconst registry: Record<string, React.ComponentType> = {\n` +
  entries.map(({ slug, varName }) => `  ${JSON.stringify(slug)}: ${varName},`).join('\n') +
  `\n}\n\nexport function getMdxComponent(slug: string): React.ComponentType | null {\n  return registry[slug] ?? null\n}\n`

await writeFile(join(outDir, 'registry.ts'), registry)
console.log(`wrote registry with ${entries.length} components`)
