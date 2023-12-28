import SigninForm from "@/components/forms/sign-in-form";
import Link from "next/link";


const SigninPage = () => {
    return (
        <section className="flex flex-col gap-y-4 w-full max-w-[500px]">
            <h3 className="text-xl lg:text-3xl">
                Sign in to access you dashboard
            </h3>

            <SigninForm />

            <p>
                Dont have account?
                <Link className="text-primary font-bold mt-2" href='/auth/sign-up'> Sign Up</Link>
            </p>
        </section>

    );
};

export default SigninPage;



{/* 
    <div className="w-full flex justify-between items-center my-2">
        <span className="h-[2px] bg-accent w-[40%]"></span>
        <p>OR</p>
        <span className="h-[2px] bg-accent w-[40%]"></span>
    </div>

    <AuthWithGithubBtn /> 
*/}
