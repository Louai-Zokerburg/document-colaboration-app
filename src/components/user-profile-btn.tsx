'use client'

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import ThemeToggle from "./theme-toggle"
import SignOutBtn from "./sign-out-btn"

const UserProfileBtn = () => {
    const [userInitials, setUserInitials] = useState(null)
    const [userEmail, setUserEmail] = useState<string | undefined>("")
    const supabase = createClientComponentClient()

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUserInitials(user?.user_metadata.name.slice(0, 2))
            setUserEmail(user?.email);
        }

        getUser()
    }, [])

    return (
        <Popover>
            <PopoverTrigger asChild>
                <span className="w-10 h-10 font-semibold cursor-pointer bg-blue-500 flex justify-center items-center rounded-full">
                    {userInitials}
                </span>
            </PopoverTrigger>
            <PopoverContent className="w-80 gap-y-4 flex flex-col justify-start items-start">
                <div>
                    <h4>Account</h4>
                    <p className="text-sm">{userEmail}</p>
                </div>
                <div>
                    <h4>Theme</h4>
                    <ThemeToggle />
                </div>
                <SignOutBtn />
            </PopoverContent>
        </Popover>

    )
}

export default UserProfileBtn