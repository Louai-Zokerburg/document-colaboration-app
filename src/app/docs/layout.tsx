import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import Header from '@/components/header'

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: { user } } = await supabase.auth.getUser()


    if (!user) {
        return redirect('/auth/sign-in')
    }

    return (
        <main>
            <Header user={user} />
            {children}
        </main>
    )
}

export default DocsLayout