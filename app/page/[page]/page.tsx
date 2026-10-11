import BlogHome from '@/app/components/articles/blog-home'

export default async function PaginatedPage({
  params,
}: {
  params: { page: string }
}) {
  // Note: /page/1 redirect and out-of-range 404 are handled in middleware.ts
  // (next/navigation redirect()/notFound() do not fire in this setup).
  const page = parseInt(params.page, 10)
  return <BlogHome page={isNaN(page) ? 1 : page} />
}
