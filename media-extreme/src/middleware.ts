import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

let locales = ['en', 'es', 'pt'];
let defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (locales.includes(firstSegment)) {
    const remainingPath = '/' + segments.slice(2).join('/');
    const url = request.nextUrl.clone();
    url.pathname = remainingPath === '' ? '/' : remainingPath;
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', firstSegment, { path: '/' });
    return response;
  }

  const queryLang = request.nextUrl.searchParams.get('lang');
  if (queryLang && locales.includes(queryLang)) {
    const url = request.nextUrl.clone();
    url.searchParams.delete('lang');
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', queryLang, { path: '/' });
    return response;
  }

  const cookie = request.cookies.get('NEXT_LOCALE');
  let lang = cookie?.value || defaultLocale;
  if (!locales.includes(lang)) {
    lang = defaultLocale;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!_next).*)',
  ],
};
