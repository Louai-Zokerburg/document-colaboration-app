import { Button } from './ui/button'

const SignOutBtn = () => {
    return (
        <form action="/api/auth/sign-out" method="post">
            <Button type="submit" variant='destructive' className='w-full'>
                Sign out
            </Button>
        </form>
    )
}

export default SignOutBtn