import React from 'react'

import { FaFile } from 'react-icons/fa'

const Logo = () => {
    return (
        <h1 className='flex justify-center items-center gap-x-2 text-lg font-bold'>
            <FaFile size={20} />
            LouDocs
        </h1>
    )
}

export default Logo