import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })

    const { data: { user } } = await supabase.auth.getUser()


    if (!user) {
        return redirect('/auth/sign-in')
    }

    const { data: profiles } = await supabase.from('profiles').select()
    const { data: docs } = await supabase.from('docs').select()

    const currentProfile: Profile = profiles?.find(profile => profile.id === user?.id)    


 
    return (
        <main>
            <Header profile={currentProfile} docs={docs} />
            <Sidebar docs={docs} currentProfile={currentProfile}/>
            {children}
        </main>
    )
}

export default DocsLayout