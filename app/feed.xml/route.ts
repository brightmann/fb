import RSS from 'rss'
import { marked } from 'marked'
import { RSSHeader } from '../components/content/rss-header'
import { allPosts } from '@/util/generated-posts'

// allPosts is generated at build time (scripts/build-content.mjs), newest first.
const posts = allPosts.filter(post => post.published)

const renderer = new marked.Renderer()

renderer.link = (href: string, _: any, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer
})

const renderPost = (md: string) => marked.parse(md)

export async function GET () {
  const lastPostDate = posts[posts.length - 1].date
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://frainer-blog.vercel.app'
      : 'http://localhost:3000'

  const feed = new RSS({
    title: "Frainer's Blog 📝",
    description:
      "Recent articles from Frainer's Blog. I write about tech, programming and whatever else I'm thinking about!",
    site_url: `${site_url}/`,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${site_url}/og.png`,
    pubDate: lastPostDate,
    language: 'en-US',
    categories: ['tech', 'programming', 'software'],
    custom_elements: [{ 'dc:creator': 'Frainer Encarnación' }]
  })

  posts.map(post => {
    const readTime = post.readTime.toString()

    const props = {
      hero: post.hero,
      heroSource: post.heroSource || '',
      tags: post.tags,
      date: post.updated || post.date,
      readTime: readTime
    }

    const articleHeader = RSSHeader(props)
    const htmlArticle = `${articleHeader}<article style="text-wrap: balance;">${renderPost(
      post.body.raw
    )}</article>`

    feed.item({
      title: post.title,
      url: `${site_url}/${post.slug}`,
      date: post.updated || post.date,
      description: htmlArticle as string,
      categories: post.tags?.map((tag: string) => tag) || [],
      guid: `${site_url}/${post.slug}`,
      author: 'Frainer Encarnación',
      enclosure: {
        url: `${site_url}${post.hero
          .replace('cover/', 'cover/rss/')
          .replace('webp', 'png')}`,
        type: 'png'
      }
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
    status: 200,
    statusText: 'OK'
  })
}
