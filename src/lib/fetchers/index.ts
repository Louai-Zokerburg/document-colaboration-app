import { User } from '@/global';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// gets user session from suaabase auth
export async function getSessionFromServer() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session;
}

// All documents from supabase docs table
export async function getDocsFromServer() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: docs } = await supabase.from('docs').select();

  return docs || [];
}

// Gets user from supabase users table
export async function getUserFromServer() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null;

  const { data: user } = await supabase
    .from('users')
    .select()
    .eq('id', authUser.id)
    .single();

  return user;
}
