import React from 'react'
import UserProfileBtn from './user-profile-btn'
import Logo from './logo'
import { Button } from './ui/button'
import { IoMdMenu } from "react-icons/io";


const Header = ({ profile }: { profile: Profile }) => {
  return (
    <header className='h-[60px] w-full border-b-2 py-2 px-4 flex justify-between items-center'>

      <div className='flex justify-center items-center gap-x-2'>
        <Button size='icon' variant='ghost' className='flex lg:hidden'>
          <IoMdMenu size={20} />
        </Button>
        <Logo />
      </div>
      <UserProfileBtn profile={profile} />
    </header>
  )
}

export default Header