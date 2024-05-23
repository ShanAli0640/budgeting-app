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
        <Link href="/dashboard" passHref>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </Link>
        </>
    )
}
