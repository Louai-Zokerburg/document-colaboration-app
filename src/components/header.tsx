import React from 'react'
import UserProfileBtn from './user-profile-btn'

const Header = ({ user }: { user: any }) => {
  return (
    <header className='h-[60px] w-full bg-secondary py-2 px-4 flex justify-between items-center'>
      <h1>{user.email}</h1>
      <UserProfileBtn />
    </header>
  )
}

export default Header