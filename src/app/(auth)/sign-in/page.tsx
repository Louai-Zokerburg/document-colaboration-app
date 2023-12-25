"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { SigninValidation } from "@/lib/validations";



const SigninForm = () => {

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
        const res = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })

        if (res.error) {
            
            toast(res.error.message, {
                description: "Make sure to sign up first!!",
            })

            return
        }

        router.refresh()
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSignin)}
                className="flex flex-col gap-y-4 w-full max-w-[500px]">
                <h3 className="text-lg lg:text-2xl">Sign in to access you dashboard</h3>

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

                <Button type="submit" className="w-full mt-4">Sign In</Button>

                <p>Don't have account? <Link className="text-primary font-bold" href='/sign-up'>Sign Up</Link></p>
            </form>
        </Form>
    );
};

export default SigninForm;