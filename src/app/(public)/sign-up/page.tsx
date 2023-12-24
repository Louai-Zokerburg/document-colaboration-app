"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import { SignupValidation } from "@/lib/validations";
import Link from "next/link";

const SignupForm = () => {

    const router = useRouter()
    const supabase = createClientComponentClient()

    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
        const res = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
            options: {
                emailRedirectTo: `${location.origin}/api/auth/callback`,
            },
        })


        router.refresh()
        console.log(res)
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSignup)}
                className="flex flex-col gap-y-4 w-full max-w-[500px]">
                <h3 className="text-lg lg:text-2xl">Sign up to create an account</h3>

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

                <Button type="submit" className="w-full mt-4">Sign Up</Button>

                <p>Already have an account? <Link className="text-primary font-bold" href='/sign-in'>Sign In</Link></p>
            </form>
        </Form>
    );
};

export default SignupForm;
