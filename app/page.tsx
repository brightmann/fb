import BlogHome from './components/articles/blog-home'

export const revalidate = 60

export default async function BlogPage() {
  return <BlogHome page={1} />
}
