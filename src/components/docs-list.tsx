'use client'

import React from 'react'
import SingleDocItem from './single-doc-item'

import { ScrollArea } from './ui/scroll-area'

const DocsList = ({ docs, profileId }: { docs: any, profileId: string }) => {
    return (
        <ScrollArea className='w-full h-[800px] flex flex-col justify-start items-start list-none mt-2'>
            {
                docs.map((doc: any) => (
                    <SingleDocItem key={doc.doc_id} doc={doc} showActions={doc.creator_id === profileId} />
                ))
            }

        </ScrollArea>
    )
}

export default DocsList