import React from 'react'

const page = ({ params }: { params: { doc_id: string } }) => {
    return (
        <section className='ml-0 h-[calc(100vh-60px)] lg:ml-[250px] flex flex-col justify-center items-center gap-y-3 bg-secondary'>

            <div>{params.doc_id}</div>
        </section>
    )
}

export default page