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
import { createDocument } from "@/server-actions/create-doc"
import { Checkbox } from "../ui/checkbox"

import { useFormStatus, useFormState } from "react-dom"

import React, { useEffect, useState } from "react"

const CreateDocDialog = ({ children, creator_id }: { children: React.ReactNode, creator_id: string }) => {
    const [open, setOpen] = useState(false);
    const [state, formAction] = useFormState(createDocument, null)

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
                        Add you document information and save changes
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction}>
                    <div className="flex justify-start items-start flex-col w-full gap-y-6 mt-4">
                        <Input type="hidden" name="creator_id" defaultValue={creator_id} />
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
                        <div className="flex justify-start items-center gap-x-2">
                            <Checkbox id='public' name='public' defaultValue='off' />
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

export default CreateDocDialog


const SubmitBtn = () => {
    const { pending } = useFormStatus()

    return (
        <Button disabled={pending} type="submit">
            {pending ? "Creating...." : "New Document"}
        </Button>
    )
}