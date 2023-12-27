import React from 'react'
import { MdOutlineTextFields } from 'react-icons/md'

import Link from 'next/link'
import EditDocDialog from './dialogs/edit-doc-dialog'
import { Button } from './ui/button'
import { IoIosMore } from 'react-icons/io'

const SingleDocItem = ({ doc, showActions }: { doc: any, showActions: boolean }) => {
    return (
        <article className='flex justify-between items-center my-2 p-1 rounded-md hover:bg-secondary/50 duration-300 cursor-pointer w-full'>
            <Link href={`/docs/${doc.doc_id}`} className='w-full flex justify-start items-center gap-x-2 text-sm'>
                <span className='w-10 h-10 flex justify-center items-center border-[1px] rounded-sm '>
                    <MdOutlineTextFields size={18} />
                </span>
                {
                    doc.title.length < 24
                        ? doc.title
                        : doc.title.slice(0, 24) + '...'
                }
            </Link>

            {
                showActions && (
                    // <Popover >
                    //     <PopoverTrigger asChild>
                    //         <Button size='icon' variant='ghost'>
                    //             <IoIosMore size={18} />
                    //         </Button>
                    //     </PopoverTrigger>
                    //     <PopoverContent className='w-40'>
                    //         <Button className='w-full gap-x-2' variant='ghost'>
                    //             <FaPen size={18} /> Rename
                    //         </Button>
                    //         <Button className='w-full gap-x-2' variant='ghost'>
                    //             <FaTrash size={18} /> Delete
                    //         </Button>

                    //     </PopoverContent>
                    // </Popover>

                    // <Button size='icon' variant='ghost'>
                    //     <IoIosMore size={18} />
                    // </Button>

                    <EditDocDialog>
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