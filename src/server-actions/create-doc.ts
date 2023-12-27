'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function createDocument(state: any, formData: FormData) {
  const creatorId = formData.get('creator_id');
  const title = formData.get('doc_title');
  const isPublic = formData.get('public');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.from('docs').insert([
    {
      creator_id: creatorId,
      title,
      content: '',
      public: isPublic || false,
    },
  ]);

  if (error) {
    return {error: error.message}
  }

  revalidatePath('/docs');

  return { message: 'Success' };
}
