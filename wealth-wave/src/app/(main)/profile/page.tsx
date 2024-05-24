"use client";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { redirect } from "next/navigation";
import Layout from '../../../components/Layout/index';

export default function profile() {

    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    if (user) {
        return (
            <Layout>
                    <h1> Hello {user.nickname} </h1>
                    <p> {user.name} </p>
            </Layout>
        );
    }

    return (
        redirect("/")
    );
}
