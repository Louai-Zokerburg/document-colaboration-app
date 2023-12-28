import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'

import CreateDocDialog from "./dialogs/create-doc-dialog"
import DocsList from './docs-list'

import { Docuemnt } from "@/global";

import { getDocFromServer, getUserFromServer } from "@/lib/fetchers"

import { FaPlus } from 'react-icons/fa'

const SidebarContent = async () => {
    const docs = await getDocFromServer()
    const user = await getUserFromServer()

    const myDocs = docs.filter((doc: Docuemnt) => doc.creator_id === user?.id)

    return (
        <>
            <CreateDocDialog creator_id={user?.id}>
                <Button variant='ghost' className='flex justify-start gap-x-4 w-full'>
                    <FaPlus />
                    New Doc
                </Button>
            </CreateDocDialog>

            <Tabs defaultValue="all_docs" className="w-full mt-4">
                <TabsList className="grid w-full grid-cols-2 bg-transparent">
                    <TabsTrigger value="all_docs">All Docs</TabsTrigger>
                    <TabsTrigger value="my_docs">My Docs</TabsTrigger>
                </TabsList>
                <TabsContent value="all_docs">
                    <DocsList docs={docs} userId={user?.id} />
                </TabsContent>
                <TabsContent value="my_docs">
                    <DocsList docs={myDocs} userId={user?.id} />
                </TabsContent>
            </Tabs>
        </>
    )
}

export default SidebarContent