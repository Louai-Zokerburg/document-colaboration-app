"use client"

import { useState } from "react";


import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";


import { SignupValidation } from "@/lib/validations";


const SignupForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
        setIsLoading(true)

        const res = await supabase.auth.signUp({
            email: user.email,
            password: user.password,

            options: {
                data: {
                    name: user.name,
                },
                emailRedirectTo: `${location.origin}/api/auth/callback`,
            },

        })

        if (res.error) {
            setIsLoading(false)            

            toast("An Error Accured", {
                description: res.error.message,
            })

            return
        }

        setIsLoading(false)
        router.push('/email-verification')
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSignup)}
                className="space-y-4"
            >


                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Name</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} placeholder="Louai Boumediene" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Email</FormLabel>
                            <FormControl>
                                <Input type="text" {...field} placeholder="example@gmail.com" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} placeholder="123456" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full mt-6 gap-x-4">
                    {isLoading ? "Signin Up..." : "Sign Up With Email"}
                    
                </Button>

            </form>
        </Form>

    );
};

export default SignupForm;
