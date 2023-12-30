'use client';

import React from 'react'
import { MdOutlineTextFields } from 'react-icons/md'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import EditDocDialog from './dialogs/edit-doc-dialog'
import { Button } from './ui/button'
import { IoIosMore } from 'react-icons/io'

import { Docuemnt } from '@/global'

type PropTypes = {
    doc: Docuemnt,
    showActions: boolean
}

const SingleDocItem = ({ doc, showActions }: PropTypes) => {

    const pathname = usePathname()

    const douId = pathname.split('/')[2]

    const isActive = douId === doc.doc_id

    const title = doc.title!.length < 24 ? doc.title : doc.title!.slice(0, 24) + '...'

    return (
        <article className={`flex justify-between items-center my-2 p-1 rounded-md  duration-300 cursor-pointer w-full ${isActive ? 'bg-primary/50' : 'hover:bg-secondary/50'}`}>
            <Link href={`/docs/${doc.doc_id}`} className='w-full flex justify-start items-center gap-x-2 text-sm'>
                <span className='w-10 h-10 flex justify-center items-center border-[1px] rounded-sm '>
                    <MdOutlineTextFields size={18} />
                </span>
                {title}
            </Link>

            {
                !isActive && showActions && (
                    <EditDocDialog doc={doc}>
                        <Button size='icon' variant='ghost'>
                            <IoIosMore size={18} />
                        </Button>
                    </EditDocDialog>

                )
            }

        </article >
    )
}

export default SingleDocItem