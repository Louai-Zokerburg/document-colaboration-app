import { Button } from '@/components/ui/button'
import React from 'react'

import { FaPlus } from 'react-icons/fa'

const DocsPage = () => {
  return (
    <section className='ml-0 h-[calc(100vh-60px)] lg:ml-[300px] flex flex-col justify-center items-center gap-y-3 bg-secondary'>
      <h1 className='text-xl lg:text-2xl'>Select a Document</h1>
      <h1 className='text-xl lg:text-2xl'>Or</h1>

      <Button variant='default' className='flex justify-center items-center gap-x-4'>
        <FaPlus size={20} />
        New document
      </Button>

    </section>
  )
}

export default DocsPage