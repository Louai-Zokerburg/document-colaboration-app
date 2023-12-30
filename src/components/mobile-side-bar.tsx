import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'

import { IoMdMenu } from 'react-icons/io'

import SidebarContent from './sidebar-content'

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost' className='flex lg:hidden'>
                    <IoMdMenu size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent side='left' className='w-[300px] items-start p-4 pt-12'>

                <SidebarContent />
            </SheetContent>
        </Sheet>
    )
}

export default MobileSidebar