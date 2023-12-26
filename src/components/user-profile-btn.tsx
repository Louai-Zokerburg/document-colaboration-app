'use client'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import ThemeToggle from "./theme-toggle"
import SignOutBtn from "./sign-out-btn"

const UserProfileBtn = ({ profile }: { profile: Profile }) => {


    return (
        <Popover>
            <PopoverTrigger asChild>
                <span className="w-10 h-10  cursor-pointer bg-primary text-primary-foreground flex justify-center items-center font-bold rounded-full">
                    {profile.name.toUpperCase().slice(0, 2)}
                </span>
            </PopoverTrigger>
            <PopoverContent className="w-60 lg:w-80 mt-1 mr-1 shadow-md gap-y-4 flex flex-col justify-start items-start">
                <div>
                    <h4 className="text-base">Account</h4>

                    <p className="text-sm">{profile.email}</p>
                </div>
                <div className="w-full">
                    <h4>Theme</h4>
                    <ThemeToggle />
                </div>
                <SignOutBtn />
            </PopoverContent>
        </Popover>

    )
}

export default UserProfileBtn