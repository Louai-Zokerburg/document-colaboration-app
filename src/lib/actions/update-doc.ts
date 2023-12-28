'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function updateDocument(state: any, formData: FormData) {
  const documentId = formData.get('doc_id');
  const creatorId = formData.get('creator_id');
  const title = formData.get('doc_title');
  const isPublic = formData.get('public');
  

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {data, error} = await supabase
        .from('docs')
        .update(
            {
                creator_id: creatorId,
                title,
                content: '',
                public: isPublic,
            }
        ).match({doc_id: documentId})

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/docs');

  return { message: 'Success' };
}
