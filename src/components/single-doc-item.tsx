'use client'

import React from 'react'
import { MdOutlineTextFields } from 'react-icons/md'
import { Button } from './ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { IoIosMore } from 'react-icons/io'
import { FaTrash, FaPen } from 'react-icons/fa'
import Link from 'next/link'

const SingleDocItem = ({ doc }: { doc: any }) => {
    return (
        <li className='flex justify-between items-center p-1 rounded-md hover:bg-secondary/50 duration-300 cursor-pointer w-full'>
            <Link href={`/docs/${doc.id}`} className='w-full flex justify-start items-center gap-x-2 '>
                <span className='w-10 h-10 flex justify-center items-center border-[1px] rounded-sm'>
                    <MdOutlineTextFields size={18} />
                </span>
                {doc.title.slice(0, 12)}...
            </Link>

            <Popover >
                <PopoverTrigger>
                    <Button size='icon' variant='ghost'>
                        <IoIosMore size={18} />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-40'>
                    <Button className='w-full gap-x-2' variant='ghost'>
                        <FaPen /> Rename
                    </Button>
                    <Button className='w-full gap-x-2' variant='ghost'>
                        <FaTrash /> Delete
                    </Button>

                </PopoverContent>
            </Popover>
        </li>
    )
}

export default SingleDocItem