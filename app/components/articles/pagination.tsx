import Link from 'next/link'

const pill =
  'inline-block py-1.5 px-4 rounded-full border border-zinc-600 hover:border-zinc-400/50 hover:scale-105 transition-all ease duration-200 m-1 text-sm text-zinc-300'

export default function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const pageLink = (pageNum: number) =>
    pageNum === 1 ? '/' : `/page/${pageNum}`

  const items: Array<number | string> = []
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) items.push(i)
  } else {
    items.push(1)
    if (currentPage > 3) items.push('ellipsis-start')
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      items.push(i)
    }
    if (currentPage < totalPages - 2) items.push('ellipsis-end')
    items.push(totalPages)
  }

  return (
    <nav className='flex items-center justify-center flex-wrap mt-10 px-5'>
      {currentPage > 1 && (
        <Link
          href={pageLink(currentPage - 1)}
          className={`${pill} bg-zinc-800/50`}
        >
          Previous
        </Link>
      )}
      {items.map(item =>
        typeof item === 'string' ? (
          <span key={item} className='mx-1 text-zinc-500'>
            …
          </span>
        ) : item === currentPage ? (
          <span
            key={item}
            className={`${pill} bg-zinc-100 text-zinc-900 border-zinc-100`}
          >
            {item}
          </span>
        ) : (
          <Link key={item} href={pageLink(item)} className={pill}>
            {item}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link
          href={pageLink(currentPage + 1)}
          className={`${pill} bg-zinc-800/50`}
        >
          Next
        </Link>
      )}
    </nav>
  )
}

export const POSTS_PER_PAGE = 6

export function getTotalPages(totalPosts: number): number {
  return Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE))
}
