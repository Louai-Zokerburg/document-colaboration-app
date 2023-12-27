'use server';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function deleteDocument(state: any, formData: FormData) {
  const documentId = formData.get('doc_id');

  console.log(documentId);
  

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabase
    .from('docs')
    .delete()
    .match({ doc_id: documentId });

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/docs');

  return { message: 'Success' };
}
