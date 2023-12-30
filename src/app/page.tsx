import { redirect } from "next/navigation"

// redirect to docs page
export default async function Home() {
    return redirect('/docs')
}
