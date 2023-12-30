import { TextEditor } from '@/components/editor/text-editor'
import React from 'react'

import { Room } from '@/components/Room'

const page = ({ params }: { params: { doc_id: string } }) => {
    return (
        <section className='ml-0 h-screen lg:ml-[300px] pt-[60px] flex justify-center items-center bg-secondary'>
            <Room roomId={params.doc_id}>
                <TextEditor />
            </Room>
        </section>
    )
}

export default page