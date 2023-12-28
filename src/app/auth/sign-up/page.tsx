import SignupForm from "@/components/forms/sign-up-form";
import Link from "next/link";


const SignupPage = () => {
    return (
        <section
            className="flex flex-col gap-y-4 w-full max-w-[500px]">
            <h3 className="text-xl lg:text-3xl">Sign up to create an account</h3>

            <SignupForm />

            <p>
                Already have an account?
                <Link className="text-primary font-bold mt-2" href='/auth/sign-in'> Sign In</Link>
            </p>
        </section>
    );
};

export default SignupPage;
