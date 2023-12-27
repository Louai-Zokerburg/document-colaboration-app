// "use client"

// import { useState } from "react";

// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner"
// import Loader from "@/components/Loader";
// import AuthWithGithubBtn from "@/components/auth-with-github-btn";

// import Link from "next/link";
// import { useRouter } from "next/navigation";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

// import { CreateDocValidation } from "@/lib/validations";
// import { DialogFooter } from "../ui/dialog";
// import SignOutBtn from "../sign-out-btn";
// import { Checkbox } from "../ui/checkbox";

// const CreateDocumentFrom = () => {



//     const form = useForm<z.infer<typeof CreateDocValidation>>({
//         resolver: zodResolver(CreateDocValidation),
//         defaultValues: {
//             creator_id: "",
//             doc_title: "",
//             is_public: false
//         },
//     });

//     const handleSignin = async (user: z.infer<typeof CreateDocValidation>) => {
//         console.log('from handle submit')
//     };

//     return (
//         <Form {...form}>
//             <form
//                 onSubmit={form.handleSubmit(handleSignin)}
//                 className="space-y-4"
//             >

//                 <FormField
//                     control={form.control}
//                     name="doc_title"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel >Document Title</FormLabel>
//                             <FormControl>
//                                 <Input
//                                     type="text"
//                                     defaultValue="Doc 1"
//                                     className="w-full"
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <FormField
//                     control={form.control}
//                     name="is_public"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel >Document Title</FormLabel>
//                             <FormControl>
//                                 <Checkbox
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <SubmitBtn />


//             </form>
//         </Form>
//     )
// }

// export default CreateDocumentFrom


// const SubmitBtn = () => {
//     return (
//         <DialogFooter>
//             <Button type="submit">Save changes</Button>
//         </DialogFooter>
//     )
// }