import { TextEditor } from '@/components/editor/TextEditor'
import React from 'react'

import { Room } from './Room'

const page = ({ params }: { params: { doc_id: string } }) => {
    return (
        <section className='ml-0 h-[calc(100vh-60px)] lg:ml-[250px] flex flex-col justify-start bg-secondary'>
            <Room>
                <TextEditor />
            </Room>
            <div className='rounded-md grow w-full h-full p-4 focus:outline-none'></div>
        </section>
    )
}

export default page