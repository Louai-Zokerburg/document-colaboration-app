'use client'
import { useFormStatus, useFormState } from "react-dom"
import React, { useEffect, useState } from "react"

import { Docuemnt } from "@/global"

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
import { Checkbox } from "../ui/checkbox"


import { deleteDocument } from "@/lib/actions/delete-doc"
import { updateDocument } from "@/lib/actions/update-doc"


type PropTypes = {
    children: React.ReactNode, 
    doc: Docuemnt
}


const EditDocDilog = ({ children, doc }: PropTypes) => {
    const [open, setOpen] = useState(false);
    const [deleteState, deleFormAction] = useFormState(deleteDocument, null)
    const [updateState, updateFormAction] = useFormState(updateDocument, null)

    useEffect(() => {
        if (deleteState?.message === 'Success') {
            setOpen(false)
        }
        if (updateState?.message === 'Success') {
            setOpen(false)
        }

    }, [deleteState, updateState])



    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>

            <DialogContent className="max-w-[400px] lg:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle>Edit Document</DialogTitle>
                    <DialogDescription>
                        Edit you document information and save changes
                    </DialogDescription>
                </DialogHeader>

                <form action={updateFormAction}>
                    <div className="flex justify-start items-start flex-col w-full gap-y-6 mt-4">

                        <input type="hidden" name="creator_id" value={doc.creator_id} />
                        <input type="hidden" name="doc_id" value={doc.doc_id} />

                        <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                            <Label htmlFor="doc_title" className="text-right">
                                Document Title
                            </Label>
                            <Input
                                id="doc_title"
                                name="doc_title"
                                placeholder="Document name"
                                defaultValue={doc.title!}
                                className="w-full"
                            />
                        </div>
                        <div className="flex justify-start items-center gap-x-2">
                            <Checkbox id='public' name='public' defaultChecked={doc.public} />
                            <Label htmlFor="public" className="text-right">
                                is Public
                            </Label>
                        </div>
                    </div>

                    <EditFormSubmitBtn />
                </form>
                <form action={deleFormAction}>
                    <input type="hidden" name='doc_id' defaultValue={doc.doc_id} />
                    <DeleteFormSubmitBtn />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditDocDilog


const EditFormSubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit" className="w-full mt-4">
            {pending ? "Updating...." : "Update Document"}
        </Button>
    )
}

const DeleteFormSubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit" variant='destructive' className="w-full mt-1">
            {pending ? "Deleting..." : "Delete"}
        </Button>
    )
}