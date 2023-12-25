import React from 'react'
import UserProfileBtn from './user-profile-btn'

const AppHeader = () => {
  return (
    <header className='h-[60px] w-full bg-secondary py-2 px-4 flex justify-between items-center'>
      <h1>Logo</h1>
      <UserProfileBtn />
    </header>
  )
}

export default AppHeader