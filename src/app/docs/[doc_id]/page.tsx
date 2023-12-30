import { TextEditor } from '@/components/editor/text-editor'
import React from 'react'

import { Room } from '@/components/Room'

const page = ({ params }: { params: { doc_id: string } }) => {
    return (
        <section className='ml-0 h-screen lg:ml-[300px] pt-[60px] flex justify-center items-center bg-secondary'>
            <Room roomId={params.doc_id || "Any id"}>
                <TextEditor />
            </Room>
            {/* <h1>Document: {params.doc_id}</h1> */}
            {/* <div className='rounded-md grow w-full h-full p-4 focus:outline-none'></div> */}
        </section>
    )
}

export default page