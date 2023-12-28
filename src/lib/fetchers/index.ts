import { User } from '@/global';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

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

export async function getDocFromServer() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const { data: docs } = await supabase.from('docs').select();

  return docs || [];
}

export async function getUserFromServer() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();

  if (!authUser) return null

  const { data: user } = await supabase
    .from('users')
    .select()
    .eq('id', authUser.id)
    .single();

  return user;
}
