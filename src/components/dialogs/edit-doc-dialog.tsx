import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoIosMore } from "react-icons/io"
import { Checkbox } from "../ui/checkbox"

const EditDocDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Document</DialogTitle>
                    <DialogDescription>
                        Edit you document information and save changes
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-start items-start flex-col w-full gap-y-6 mt-4">
                    {/* <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                        <Label htmlFor="doc_id" className="text-right">
                            Document ID
                        </Label>
                        <Input
                            id="doc_id"
                            disabled
                            defaultValue="sfs5d5f-565sdf-s5dfs5f-sd5fs"
                            className="w-full"
                        />
                    </div>
                    <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                        <Label htmlFor="creator_id" className="text-right">
                            Creator ID
                        </Label>
                        <Input
                            id="creator_id"
                            disabled
                            defaultValue="hfgh2f-fgh1fg-5f1gh51f-5f1gh5"
                            className="w-full"
                        />
                    </div> */}
                    <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                        <Label htmlFor="doc_title" className="text-right">
                            Document Title
                        </Label>
                        <Input
                            id="doc_title"
                            defaultValue="Doc 1"
                            className="w-full"
                        />
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                        <Checkbox id='public' />
                        <Label htmlFor="public" className="text-right">
                            is Public
                        </Label>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='secondary'>Cancel</Button>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default EditDocDialog