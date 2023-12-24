"use client"

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import { SigninValidation } from "@/lib/validations";

const SigninForm = () => {

    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
        console.log("sign in")
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(handleSignin)}
                className="flex flex-col gap-y-4 w-full">

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


            </form>
        </Form>
    );
};

export default SigninForm;
