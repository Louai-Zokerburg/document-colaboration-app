'use client'

import React from 'react'
import { Button } from './ui/button'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

import { useRouter } from 'next/navigation'

const SignOutBtn = () => {
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignout = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }
    return (
        <Button onClick={handleSignout} variant='destructive' className='w-full'>
            Sign out
        </Button>)
}

export default SignOutBtn