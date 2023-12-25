"use client"

import { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import Loader from "@/components/Loader";
import AuthWithGithubBtn from "@/components/auth-with-github-btn";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { SigninValidation } from "@/lib/validations";

import auth_image from '@/assets/images/auth-image.jpg'

const SigninForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const supabase = createClientComponentClient()


    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
        setIsLoading(true)

        const res = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })

        setIsLoading(false)
        if (res.error) {
            toast(res.error.message, {
                description: "Make sure to sign up first!!",
            })

            return
        }

        router.refresh()
    };

    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <section className='w-full px-4 lg:w-1/2 flex justify-center items-center'>
                <section
                    className="flex flex-col gap-y-2 w-full max-w-[500px]">
                    <h3 className="text-lg lg:text-2xl">Sign in to access you dashboard</h3>

                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(handleSignin)}
                            className="space-y-4"
                        >

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

                            <Button type="submit" className="w-full mt-4 gap-x-4">
                                {isLoading && <Loader />}
                                Sign In With Email
                            </Button>


                        </form>
                    </Form>
                    <div className="w-full flex justify-between items-center my-2">
                        <span className="h-[2px] bg-accent w-[40%]"></span>
                        <p>OR</p>
                        <span className="h-[2px] bg-accent w-[40%]"></span>
                    </div>

                    <AuthWithGithubBtn />
                    <p>Don't have account? <Link className="text-primary font-bold" href='/sign-up'>Sign Up</Link></p>
                </section>
            </section>
            <Image src={auth_image} alt='sign up image' className='hidden lg:flex w-1/2 h-screen' />
        </main>

    );
};

export default SigninForm;
