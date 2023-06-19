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
  const locale = req.cookies.get('NEXT_LOCALE')?.value
  console.log({ locale, nextLocale: req.nextUrl.locale, url: req.url, nextUrl: req.nextUrl });
  if (!req.nextUrl.pathname.startsWith(`/zh-HK`) && !req.nextUrl.pathname.startsWith('/en')) {
    const url = new URL(`/${'zh-HK'}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url);
    console.log({ url });
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: '/:path*',
};
