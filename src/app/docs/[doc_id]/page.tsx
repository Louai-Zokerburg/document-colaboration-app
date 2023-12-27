import { TextEditor } from '@/components/editor/TextEditor'
import React from 'react'

import { Room } from './Room'

const page = ({ params }: { params: { doc_id: string } }) => {
    return (
        <section className='ml-0 h-[calc(100vh-60px)] lg:ml-[300px] flex justify-center items-center bg-secondary'>
            {/* <Room>
                <TextEditor />
            </Room> */}
            <h1>Document: {params.doc_id}</h1>
            {/* <div className='rounded-md grow w-full h-full p-4 focus:outline-none'></div> */}
        </section>
    )
}

export default page