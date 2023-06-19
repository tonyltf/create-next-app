import { NextRequest, NextResponse } from 'next/server'
 
const PUBLIC_FILE = /\.(.*)$/
 
export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }
  console.log(req.nextUrl, req.url);
  if (req.nextUrl.locale === 'zh-HK') {
    const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    )
  }
}

export const config = {
  matcher: '/:path*',
};