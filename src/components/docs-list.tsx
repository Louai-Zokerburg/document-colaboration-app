'use client'

import React from 'react'
import SingleDocItem from './single-doc-item'

import { ScrollArea } from './ui/scroll-area'
import { Docuemnt } from '@/global'

type PropTypes = {
    docs: Docuemnt[],
    userId: string | undefined 
}

const DocsList = ({ docs, userId }: PropTypes) => {
    return (
        <ScrollArea className='w-full h-[600px] flex flex-col justify-start items-start list-none mt-2'>
            {
                docs.length > 0 
                ? docs.map((doc: Docuemnt) => (
                    <SingleDocItem key={doc.doc_id} doc={doc} showActions={doc.creator_id === userId} />
                )) 
                : <p className='text-center mt-8 text-muted-foreground'>No docs to display :(</p>
            }
        </ScrollArea>
    )
}

export default DocsList