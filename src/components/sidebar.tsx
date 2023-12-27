import React from 'react'

import SidebarContent from './sidebar-content';

const Sidebar = ({ docs, currentProfile }: { docs: any, currentProfile: any }) => {


    return (
        <aside className='duration-300 fixed top-[60px] left-[-300px] lg:left-0 h-screen w-[300px] border-r-2 p-4 flex flex-col justify-start items-center'>
            <SidebarContent docs={docs} currentProfile={currentProfile} />
        </aside>
    )
}

export default Sidebar