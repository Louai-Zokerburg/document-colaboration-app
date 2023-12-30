import React from 'react'
import UserProfileBtn from './user-profile-btn'
import Logo from './logo'
import MobileSidebar from './mobile-side-bar';
// import { Avatars } from './avatars';

const Header = () => {

  return (
    <header className='fixed top-0 left-0 z-50 bg-background h-[60px] w-full border-b-2 py-2 px-4 flex justify-between items-center'>

      <div className='flex justify-center items-center gap-x-2'>
        <MobileSidebar />
        <Logo />
      </div>

      <div>

        {/* <Avatars  /> */}

      <UserProfileBtn  />
      </div>
    </header>
  )
}

export default Header