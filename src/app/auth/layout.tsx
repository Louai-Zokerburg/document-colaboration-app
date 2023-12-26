import React from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

import auth_image from '@/assets/images/auth-image.jpg'


const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })

    const { data: { user } } = await supabase.auth.getUser()


    if (user) {
        return redirect('/docs')
    }

    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <section className='w-full px-4 lg:w-1/2 flex justify-center items-center'>

                {children}
            </section>
            <Image src={auth_image} alt='sign up image' className='hidden lg:flex w-1/2 h-screen' />

        </main>
    )
}

export default AuthLayout