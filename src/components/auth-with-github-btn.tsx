'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"

import Loader from "./Loader"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const AuthWithGithubBtn = () => {
    const [isLoading, setIsLoading] = useState(false)

    const supabase = createClientComponentClient()

    const handleAuthWithGithub = async () => {

        const res = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${location.origin}/api/auth/callback`,
            }
        })

        if (res.error) {
            setIsLoading(false)
        }

        setIsLoading(false)
    }

    return (
        <Button className="w-full gap-x-4" variant='outline' onClick={handleAuthWithGithub}>
            {
                isLoading ? (<Loader />) : (<FaGithub size={24} />)
            }

            Sign Up With GitHub
        </Button>
    )
}

export default AuthWithGithubBtn