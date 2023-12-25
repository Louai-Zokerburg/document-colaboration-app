import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // instantiate a new NextResponse instance.
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if expired - required for Server Components
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if the user is logged-in there is no reason to show him the auth pages
  if (
    user &&
    (req.nextUrl.pathname === '/sing-up' || req.nextUrl.pathname === '/sign-in')
  ) {
    return NextResponse.redirect(new URL('/docs', req.url));
  }

  // Returnin the new response
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
