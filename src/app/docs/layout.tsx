import React from 'react'
import { redirect } from 'next/navigation'

import Header from '@/components/header'
import Sidebar from '@/components/sidebar'

import { getSessionFromServer } from '@/lib/fetchers'

const DocsLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getSessionFromServer()

    if (!session) {
        return redirect('/auth/sign-in')
    }

    return (
        <main>
            <Header />
            <Sidebar />
            {children}
        </main>
    )
}

export default DocsLayout