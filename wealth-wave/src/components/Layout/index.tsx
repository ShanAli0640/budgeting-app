import React, { useState } from 'react'
import Sidebar from './sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {    
    return (
        <div className="min-h-screen">
            <div className="flex">
                
                <Sidebar/>
                <div className="flex flex-col flex-grow w-screen md:w-full min-h-screen">
                    {children}
                </div>
            </div>
        </div>
    )
}