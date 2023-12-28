import React from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'

import { getSessionFromServer, getUserFromServer } from '@/lib/fetchers'

import auth_image from '@/assets/images/auth-image.jpg'


const AuthLayout = async ({ children }: { children: React.ReactNode }) => {

    const session = await getSessionFromServer()

    if (session) {
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