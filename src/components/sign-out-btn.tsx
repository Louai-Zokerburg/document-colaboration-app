import { Button } from './ui/button'

const SignOutBtn = () => {
    return (
        <form action="/api/auth/sign-out" method="post" className='w-full'>
            <Button type="submit" variant='destructive' className='w-full'>
                Sign out
            </Button>
        </form>
    )
}

export default SignOutBtn