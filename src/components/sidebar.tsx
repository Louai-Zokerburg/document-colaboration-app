import React from 'react'

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import DocsList from './docs-list';


const docs = [
    {
        id: 1,
        title: 'The Company Policies',
        content: 'Word Flow'
    },
    {
        id: 2,
        title: 'Doc 2',
        content: 'Get This Job'
    },
    {
        id: 3,
        title: 'Doc 3',
        content: 'Ethics and morals dfsdf sdfsdf'
    }
]
const docs2 = [
    {
        id: 1,
        title: 'The Company Policies',
        content: 'Word Flow'
    },
    {
        id: 2,
        title: 'Doc 2',
        content: 'Get This Job'
    },
    {
        id: 3,
        title: 'The Company Policies',
        content: 'Word Flow'
    },
    {
        id: 4,
        title: 'Doc 2',
        content: 'Get This Job'
    },
    {
        id: 5,
        title: 'The Company Policies',
        content: 'Word Flow'
    },
    {
        id: 6,
        title: 'Doc 2',
        content: 'Get This Job'
    },
]


const Sidebar = () => {
    return (
        <aside className='duration-300 fixed top-[60px] left-[-250px] lg:left-0 h-screen w-[250px] border-r-2 py-4 px-2 flex flex-col justify-start items-center'>

            <Tabs defaultValue="all_docs" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-transparent">
                    <TabsTrigger value="all_docs">All Docs</TabsTrigger>
                    <TabsTrigger value="my_docs">My Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="all_docs">
                    <DocsList docs={docs2} />
                </TabsContent>
                <TabsContent value="my_docs">
                    <DocsList docs={docs} />
                </TabsContent>
            </Tabs>
        </aside>
    )
}

export default Sidebar