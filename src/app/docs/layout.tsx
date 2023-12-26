import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: { user } } = await supabase.auth.getUser()


    if (!user) {
        return redirect('/sign-in')
    }

    return (
        <main>
            <Header user={user} />
            <Sidebar />
            {children}
        </main>
    )
}

export default DocsLayout