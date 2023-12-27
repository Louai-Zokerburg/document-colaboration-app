import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import DocsList from './docs-list'

import { FaPlus } from 'react-icons/fa'

const SidebarContent = ({ docs, currentProfile }: { docs: any, currentProfile: any }) => {
    const myDocs = docs.filter((doc: any) => doc.creator_id === currentProfile.id)
    return (
        <>
            <Button variant='ghost' className='flex justify-start gap-x-4 w-full'>
                <FaPlus />
                New Doc
            </Button>

            <Tabs defaultValue="all_docs" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-2 bg-transparent">
                    <TabsTrigger value="all_docs">All Docs</TabsTrigger>
                    <TabsTrigger value="my_docs">My Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="all_docs">
                    <DocsList docs={docs} profileId={currentProfile.id} />
                </TabsContent>
                <TabsContent value="my_docs">
                    <DocsList docs={myDocs} profileId={currentProfile.id} />
                </TabsContent>
            </Tabs>
        </>
    )
}

export default SidebarContent