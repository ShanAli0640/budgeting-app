"use client";
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from "next/navigation";

export default function Home() {

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        return (
            redirect("/dashboard")
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to BudgetBuddy</h1>
                <p className="text-lg text-gray-600 mb-8">Your smart way to manage your finances effortlessly.</p>
                <Link href="/api/auth/login" passHref>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}
