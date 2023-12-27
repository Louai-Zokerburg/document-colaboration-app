import CreateDocDialog from '@/components/dialogs/create-doc-dialog'
import { Button } from '@/components/ui/button'
import React from 'react'

import { FaPlus } from 'react-icons/fa'

const DocsPage = () => {
  return (
    <section className='ml-0 h-[calc(100vh-60px)] lg:ml-[300px] flex flex-col justify-center items-center gap-y-3 bg-secondary'>
      <h1 className='text-xl lg:text-2xl'>Select a Document</h1>
      <h1 className='text-xl lg:text-2xl'>Or Create new one from the sidebar</h1>


      {/* <CreateDocDialog creator_id={currentProfile.id}>
        <Button variant='default' className='flex justify-center items-center gap-x-4'>
          <FaPlus size={20} />
          New document
        </Button>
      </CreateDocDialog> */}

    </section>
  )
}

export default DocsPage