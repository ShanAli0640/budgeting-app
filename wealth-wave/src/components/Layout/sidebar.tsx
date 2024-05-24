import React from 'react';
import Link from 'next/link';
import { FaHome, FaWallet, FaUser, FaCog, FaQuestionCircle, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import logo from '../../img/logo.svg';

interface MenuItemProps {
    icon: JSX.Element;
    name: string;
    route: string;
}

export default function Sidebar() {
    // Define our base class
    const className = "bg-black w-14 hover:w-80 transition-all duration-500 ease-in-out fixed md:static top-0 bottom-0 left-0 z-40";

    const MenuItem: React.FC<MenuItemProps> = ({ icon, name, route }) => {
        // Highlight menu item based on currently displayed route
        let colorClass = "text-white/50 hover:text-white";
        const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

        if (currentPath === route) {
            colorClass = "text-white";
        }

        return (
            <Link
                href={route}
                passHref
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                    <div className="text-2xl flex [&>*]:mx-auto w-12"> {/* Adjusted icon size here */}
                        {icon}
                    </div>
                    <div className="pl-2">{name}</div>
            </Link>
        )
    }

    return (
        <>
            <div className={`${className}`}>
                <div className="p-2 flex">
                    <Link href="/">
                        {/*eslint-disable-next-line*/}
                        <img src={logo.src} alt="Company Logo" width={300} height={300} />
                    </Link>
                </div>
                <div className="flex flex-col">
                    <MenuItem
                        name="Home"
                        route="/"
                        icon={<FaHome />}
                    />
                    <MenuItem
                        name=" Profile"
                        route="/profile"
                        icon={<FaUser />}
                    />
                    <MenuItem
                        name="Wallet"
                        route="/wallet"
                        icon={<FaWallet />}
                    />
                    <MenuItem
                        name="Analytics"
                        route="/analytics"
                        icon={<FaChartBar />}
                    />
                    <MenuItem
                        name="Settings"
                        route="/setting"
                        icon={<FaCog />}
                    />
                    <MenuItem
                        name="Help"
                        route="/help"
                        icon={<FaQuestionCircle />}
                    />
                    <MenuItem
                        name="Log Out"
                        route="/logout"
                        icon={<FaSignOutAlt />}
                    />
                </div>
            </div>
        </>
    )
}
