import React from 'react'
import UserProfileBtn from './user-profile-btn'
import Logo from './logo'
import MobileSidebar from './mobile-side-bar';

const Header = () => {

  return (
    <header className='h-[60px] w-full border-b-2 py-2 px-4 flex justify-between items-center'>

      <div className='flex justify-center items-center gap-x-2'>
        <MobileSidebar />
        <Logo />
      </div>
      <UserProfileBtn  />
    </header>
  )
}

export default Header