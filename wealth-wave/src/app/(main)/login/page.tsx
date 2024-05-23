<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3e4b07fbeae8e6bd1a46d927aa4071e6c4c7901c
"use client";
import Link from 'next/link';
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Login() {
    const { user, error, isLoading } = useUser();
    return (
        <>
            <a href="/api/auth/login">
                yo
            </a>
            <p> howdy </p>
<<<<<<< HEAD
        </>
=======
import Link from 'next/link';

export default function Login(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to BudgetBuddy</h1>
          <p className="text-lg text-gray-600 mb-8">Your smart way to manage your finances effortlessly.</p>
          <Link href="/dashboard" passHref>
=======
        <Link href="/dashboard" passHref>
>>>>>>> 3e4b07fbeae8e6bd1a46d927aa4071e6c4c7901c
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>
<<<<<<< HEAD
        </div>
      </div>
>>>>>>> dc40c640e606ef8492328eda79f8eafdf9295574
=======
        </>
>>>>>>> 3e4b07fbeae8e6bd1a46d927aa4071e6c4c7901c
    )
}
