import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import SignOutBtn from "@/components/sign-out-btn"

export default async function Home() {

    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })

    const { data: { session } } = await supabase.auth.getSession()


    if (!session) {
        redirect('/sign-in')
    }
    console.log(session);



    return (
        <>
            <h1>Home {session.user.user_metadata.name}</h1>
            <SignOutBtn />
        </>
    )
}
