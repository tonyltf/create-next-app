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
  console.log(req.nextUrl, req.url, { locale });
  if (!locale) {
    const url = new URL(`/${'zh-HK'}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url);
    console.log({ url }, url.href);
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: '/:path*',
};
