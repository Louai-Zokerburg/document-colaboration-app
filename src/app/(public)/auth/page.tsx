import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import SigninForm from "@/components/forms/sign-in-form"
import SignupForm from "@/components/forms/sign-up-form"

export default function AuthFrom() {
    return (
        <Card className="w-full md:w-[500px]" >
            <Tabs defaultValue="sing-up" >
                <CardHeader>
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="sing-up">Sign Up</TabsTrigger>
                        <TabsTrigger value="sing-in">Sign In</TabsTrigger>
                    </TabsList>
                </CardHeader>
                <TabsContent value="sing-up">
                    <CardContent className="space-y-2">
                        <SignupForm />
                    </CardContent>

                </TabsContent>
                <TabsContent value="sing-in">
                    <CardContent className="space-y-2">
                        <SigninForm />
                    </CardContent>
                </TabsContent>
            </Tabs>
        </Card>
    )
}
