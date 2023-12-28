'use client'
import React, { useEffect, useState } from "react"
import { useFormStatus, useFormState } from "react-dom"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "../ui/checkbox"

import { createDocument } from "@/lib/actions/create-doc"

type PropTypes = {
    children: React.ReactNode,
    creator_id: string | undefined
}

const CreateDocDialog = ({ children, creator_id }: PropTypes) => {
    const [open, setOpen] = useState(false);
    const [state, createFormAction] = useFormState(createDocument, null)

    useEffect(() => {
        if (state?.message === 'Success') {
            setOpen(false)
        }
    }, [state])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-[400px] lg:max-w-[450px]">
                <DialogHeader>
                    <DialogTitle>Create New Document</DialogTitle>
                    <DialogDescription>
                        Add you document to your workspace
                    </DialogDescription>
                </DialogHeader>
                <form action={createFormAction}>
                    <div className="flex justify-start items-start flex-col w-full gap-y-6 mt-4">

                        {/*  input contains the needed creator id for the creation of the document */}
                        <Input type="hidden" name="creator_id" defaultValue={creator_id} />


                        {/*  Dcoument Title Input */}
                        <div className="flex justify-start items-start flex-col gap-y-2 w-full">
                            <Label htmlFor="doc_title" className="text-right">
                                Document Title
                            </Label>
                            <Input
                                id="doc_title"
                                name="doc_title"
                                placeholder="Document name"
                                className="w-full"
                            />
                        </div>

                        {/*  is public checkbox */}
                        <div className="flex justify-start items-center gap-x-2">
                            <Checkbox id='public' name='public' defaultValue='off' />
                            <Label htmlFor="public" className="text-right">
                                is Public
                            </Label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <SubmitBtn />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateDocDialog

// Submit button declaration
const SubmitBtn = () => {
    const { pending } = useFormStatus()
    
    return (
        <Button disabled={pending} type="submit" className="w-full mt-4">
            {pending ? "Creating...." : "New Document"}
        </Button>
    )
}