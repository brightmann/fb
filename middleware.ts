import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { allPosts } from './util/generated-posts'

const POSTS_PER_PAGE = 5

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /page/1 to / (canonical URL)
  if (pathname === '/page/1') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // 404 for out-of-range pages: /page/N where N > totalPages
  const match = pathname.match(/^\/page\/(\d+)$/)
  if (match) {
    const page = parseInt(match[1], 10)
    const publishedCount = allPosts.filter(p => p.published).length
    const totalPages = Math.max(1, Math.ceil(publishedCount / POSTS_PER_PAGE))
    if (isNaN(page) || page < 1 || page > totalPages) {
      // Rewrite to a 404 by returning a not-found response
      return new NextResponse('Page not found', { status: 404 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/page/:path*',
}
