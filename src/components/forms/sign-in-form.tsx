"use client"

import { useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

import { useRouter } from "next/navigation";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { SigninValidation } from "@/lib/validations";


const SigninForm = () => {
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const supabase = createClientComponentClient<Database>()


    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
        setIsLoading(true)

        const { data: { user: authUser }, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })

        setIsLoading(false)
        if (error) {
            toast(error.message, {
                description: "Make sure to sign up first!!",
            })
            return
        }

        setIsLoading(false)
        router.refresh()
    };
  return (
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

                    <Button type="submit" className="w-full mt-6 gap-x-4">
                        {isLoading ? "Signing in..." : "Sign In With Email"}
                        
                    </Button>


                </form>
            </Form>
  )
}

export default SigninForm