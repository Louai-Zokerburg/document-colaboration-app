import React from 'react'
import UserProfileBtn from './user-profile-btn'
import Logo from './logo'
import { Button } from './ui/button'
import { IoMdMenu } from "react-icons/io";
import MobileSidebar from './mobile-side-bar';


const Header = ({ profile, docs }: { profile: Profile, docs: any }) => {
  return (
    <header className='h-[60px] w-full border-b-2 py-2 px-4 flex justify-between items-center'>

      <div className='flex justify-center items-center gap-x-2'>
        <MobileSidebar docs={docs} currentProfile={profile} />
        <Logo />
      </div>
      <UserProfileBtn profile={profile} />
    </header>
  )
}

export default Header