import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { type NextRequest, NextResponse } from 'next/server';
import { updateSession } from './util/supabase/middleware';

/**
 * Routes authenticated user is redirected from
 */
const REDIRECTED_LOGGEDIN_ROUTES = ['login'];

/**
 * Routes unauthenticated user/uncomplete is redirected from
 */
const PROTECTED_ROUTES = ['~'];

const handleI18nRouting = createMiddleware(routing);
export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');
  if (locale === '~') {
    return await updateSession(request, NextResponse.next(), REDIRECTED_LOGGEDIN_ROUTES, PROTECTED_ROUTES);
  }

  const response = handleI18nRouting(request);
  return await updateSession(request, response, REDIRECTED_LOGGEDIN_ROUTES, PROTECTED_ROUTES);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/~/:path*', '/(en)/:path*'],
};
