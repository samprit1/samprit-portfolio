import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD
  const isSignedIn = Boolean(password && request.cookies.get('samprit-admin')?.value === password)
  if (request.nextUrl.pathname.startsWith('/studio') && !isSignedIn) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/studio/:path*','/admin/editor/:path*'] }
