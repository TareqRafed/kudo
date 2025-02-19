import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(
  request: NextRequest,
  response: NextResponse,
  REDIRECTED_LOGGEDIN_ROUTES: string[],
  PROTECTED_ROUTES: string[],
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    },
  );

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoggedIn = !!user;
  let completedProfile = false;
  if (isLoggedIn)
    completedProfile = !!(await supabase.from('members').select('id').eq('id', user.id).maybeSingle()).data;

  console.log({ isLoggedIn, completedProfile });
  let [, locale, ...path] = request.nextUrl.pathname.split('/');
  if (locale !== 'en') path = [locale, ...path];

  const shouldRedirectAuthedUser = REDIRECTED_LOGGEDIN_ROUTES.some(
    (route) => path.join('/').startsWith(route) || path.join('/') === '',
  );

  if (isLoggedIn && completedProfile && shouldRedirectAuthedUser) {
    const url = request.nextUrl.clone();
    url.pathname = `/~`;
    return NextResponse.redirect(url);
  }

  const shouldRedirectUnauthedUser = PROTECTED_ROUTES.some((route) => path.join('/').startsWith(route));

  if (!isLoggedIn && shouldRedirectUnauthedUser) {
    const url = request.nextUrl.clone();
    url.pathname = `/login`;
    return NextResponse.redirect(url);
  }

  if (isLoggedIn && !completedProfile) {
    const url = request.nextUrl.clone();
    if (url.pathname !== '/complete-registeration') {
      url.pathname = `/complete-registeration`; // TODO: will change locale, for now we only have english so it's alright
      return NextResponse.redirect(url);
    }
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  // creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return response;
}
