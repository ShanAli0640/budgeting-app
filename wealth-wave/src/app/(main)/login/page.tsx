"use client";
import React from "react";
import Link from "next/link";

export default function Login() {

    return (
        <>
            <Link href="/api/auth/login" passHref>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Login
                </button>
            </Link>
        </>
    )
}
