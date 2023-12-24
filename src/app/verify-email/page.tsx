import { Button } from '@/components/ui/button'
import React from 'react'

import { Lock } from 'lucide-react'
import Link from 'next/link'

const page = () => {
    return (
        <main className='w-full h-screen flex justify-center items-center flex-col gap-y-6'>

            <h1 className='text-2xl lg:text-4xl font-bold flex gap-x-4 justify-center items-center'>
                <Lock size={28} /> Email Verification Required
            </h1>
            <p className='text-lg lg:text-xl'>We sent you a confirmation email to your inbox</p>
            <p className='text-lg lg:text-xl'>Verify your email address to continue</p>


            {/* <p className='text-lg lg:text-xl mt-8 mb-4'>Did you entred wrong email?</p>
            <Link href='/sign-up'>
                <Button>
                    Back To Sign Up
                </Button>
            </Link> */}
        </main>
    )
}

export default page