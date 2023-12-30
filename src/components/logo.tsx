import React from 'react'

import { FaFile } from 'react-icons/fa'

import Link from 'next/link'

const Logo = () => {
    return (
        <Link href='/'>
            <h1 className='flex justify-center items-center gap-x-2 text-lg font-bold'>
                <FaFile size={20} />
                LouDocs
            </h1>
        </Link>
    )
}

export default Logo