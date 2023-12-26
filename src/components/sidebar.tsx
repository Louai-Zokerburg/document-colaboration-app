import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import DocsList from './docs-list';



const Sidebar = ({ docs, currentProfile }: { docs: any, currentProfile: any }) => {

    const myDocs = docs.filter((doc: any) => doc.creator_id === currentProfile.id)

    return (
        <aside className='duration-300 fixed top-[60px] left-[-250px] lg:left-0 h-screen w-[250px] border-r-2 py-4 px-2 flex flex-col justify-start items-center'>

            <Tabs defaultValue="all_docs" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-transparent">
                    <TabsTrigger value="all_docs">All Docs</TabsTrigger>
                    <TabsTrigger value="my_docs">My Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="all_docs">
                    <DocsList docs={docs} profileId={currentProfile.id} />
                </TabsContent>
                <TabsContent value="my_docs">
                    <DocsList docs={myDocs} profileId={currentProfile.id}  />
                </TabsContent>
            </Tabs>
        </aside>
    )
}

export default Sidebar