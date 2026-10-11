import { notFound } from 'next/navigation'
import { getMdxComponent } from '@/util/compiled/registry'

interface MdxProps {
  slug: string
}

// Post bodies are precompiled at build time (scripts/compile-mdx.mjs) into
// static components. next-contentlayer's useMDXComponent evaluates code with
// new Function(), which is forbidden on Cloudflare Workers.
export function Mdx({ slug }: MdxProps) {
  const Component = getMdxComponent(slug)
  if (!Component) {
    notFound()
  }
  return (
    <div className="mdx">
      <Component />
    </div>
  )
}
