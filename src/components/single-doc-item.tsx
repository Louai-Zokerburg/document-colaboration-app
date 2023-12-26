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

const SingleDocItem = ({ doc, showActions }: { doc: any, showActions: boolean }) => {
    return (
        <article className='flex justify-between items-center p-1 rounded-md hover:bg-secondary/50 duration-300 cursor-pointer w-full'>
            <Link href={`/docs/${doc.doc_id}`} className='w-full flex justify-start items-center gap-x-2 text-sm'>
                <span className='w-10 h-10 flex justify-center items-center border-[1px] rounded-sm '>
                    <MdOutlineTextFields size={18} />
                </span>
                {
                    doc.title.length < 16
                        ? doc.title
                        : doc.title.slice(0, 16) + '...'
                }
            </Link>

            {
                showActions && (
                    <Popover >
                        <PopoverTrigger asChild>
                            <Button size='icon' variant='ghost'>
                                <IoIosMore size={18} />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-40'>
                            <Button className='w-full gap-x-2' variant='ghost'>
                                <FaPen size={18} /> Rename
                            </Button>
                            <Button className='w-full gap-x-2' variant='ghost'>
                                <FaTrash size={18} /> Delete
                            </Button>

                        </PopoverContent>
                    </Popover>
                )
            }

        </article>
    )
}

export default SingleDocItem