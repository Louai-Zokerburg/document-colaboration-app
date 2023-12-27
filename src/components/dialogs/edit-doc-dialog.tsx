'use client'

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
import { deleteDocument } from "@/server-actions/delete-doc"
import { Checkbox } from "../ui/checkbox"

import { useFormStatus, useFormState } from "react-dom"

import React, { useEffect, useState } from "react"
import { FaPen, FaTrash } from "react-icons/fa"

const EditDocDilog = ({ children, doc }: { children: React.ReactNode, doc: any }) => {
    const [open, setOpen] = useState(false);
    const [deleteState, deleFormAction] = useFormState(deleteDocument, null)

    useEffect(() => {

        console.log(deleteState);
        

        if (deleteState?.message === 'Success') {
            setOpen(false)
        }

    }, [deleteState])

    console.log(doc);
    

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[400px] lg:max-w-[450px]">
                <DialogHeader>
                    <div className="flex justify-between items-center mt-4">

                        <DialogTitle>Edit Document</DialogTitle>
                        <form action={deleFormAction}>
                            <input type="hidden" name='doc_id' defaultValue={doc.doc_id} />
                            <DeleteFormSubmitBtn />
                        </form>
                    </div>
                    <DialogDescription>
                        Edit you document information and save changes
                    </DialogDescription>
                </DialogHeader>
                <form action={deleFormAction}>
                    <div className="flex justify-start items-start flex-col w-full gap-y-6 mt-4">
                        
                        <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                            <Label htmlFor="doc_id" className="text-right">
                                Document ID
                            </Label>
                            <Input disabled id="doc_id" name="doc_id" defaultValue={doc.doc_id} className="w-full" />
                            
                        </div>
                        <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                            <Label htmlFor="doc_title" className="text-right">
                                Document Title
                            </Label>
                            <Input
                                id="doc_title"
                                name="doc_title"
                                placeholder="Document name"
                                defaultValue={doc.title}
                                className="w-full"
                            />
                        </div>
                        <div className="flex justify-start items-center gap-x-2">
                            <Checkbox id='public' name='public' checked={doc.public} />
                            <Label htmlFor="public" className="text-right">
                                is Public
                            </Label>
                        </div>
                    </div>
                    <DialogFooter>
                        <SubmitBtn />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditDocDilog


const SubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit">
            {pending ? "Creating...." : "New Document"}
        </Button>
    )
}

const DeleteFormSubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" size='icon' variant='outline'>
            {
                pending ?
                    <FaPen />
                    : <FaTrash />
            }
        </Button>
    )
}