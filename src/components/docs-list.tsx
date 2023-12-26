import React from 'react'
import SingleDocItem from './single-doc-item'

const DocsList = ({ docs }: { docs: any }) => {
    return (
        <ul className='w-full flex flex-col justify-start items-start gap-y-2 list-none mt-2'>
            {
                docs.map((doc: any) => (
                    <SingleDocItem key={doc.id} doc={doc} />
                ))
            }

        </ul>
    )
}

export default DocsList