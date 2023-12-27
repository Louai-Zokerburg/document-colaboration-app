import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  
  // instantiate a new NextResponse instance.
  const res = NextResponse.next();

  // Create a Supabase client configured to use cookies
  const supabase = createMiddlewareClient<Database>({ req, res });

  // Refresh session if expired - required for Server Components
  const {data: {session}} = await supabase.auth.getSession();

  // if (session && req.nextUrl.pathname.includes('/auth')) {
  //   console.log('session detected')
  //   return redirect('/docs')
  // }

  // Returnin the new response
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
