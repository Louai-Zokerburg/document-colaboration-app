import React from 'react'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='w-full h-screen py-4 lg:py-8 px-4 flex justify-center items-center'>
            {children}
        </main>
    )
}

export default AuthLayout