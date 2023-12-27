"use client"

import { useState } from "react";


import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AuthWithGithubBtn from "@/components/auth-with-github-btn";


import { SignupValidation } from "@/lib/validations";
import Loader from "@/components/Loader";


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

        // router.refresh()
        router.push('/email-verification')
    };

    return (
        <section
            className="flex flex-col gap-y-4 w-full max-w-[500px]">
            <h3 className="text-lg lg:text-2xl">Sign up to create an account</h3>


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
                        {isLoading && <Loader />}
                        Sign Up With Email
                    </Button>

                </form>
            </Form>

            {/* <div className="w-full flex justify-between items-center my-2">
                <span className="h-[2px] bg-accent w-[40%]"></span>
                <p>OR</p>
                <span className="h-[2px] bg-accent w-[40%]"></span>
            </div>

            <AuthWithGithubBtn /> */}

            <p>Already have an account? <Link className="text-primary font-bold mt-2" href='/auth/sign-in'>Sign In</Link></p>
        </section>
    );
};

export default SignupForm;
