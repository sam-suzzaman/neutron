"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarData = [
    {
        _id: 1,
        label: "all contacts",
        path: "/",
    },
    {
        _id: 2,
        label: "add contact",
        path: "/add-contact",
    },
];

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-left-col">
                    <Link className="logo" href="/">
                        LoGo
                    </Link>
                </div>
                <div className="nav-right-col">
                    <ul className="main-menu">
                        {navbarData?.map((item) => {
                            const isActive = pathName === item.path;
                            return (
                                <li className="menu-item">
                                    <Link
                                        className={`menu-link ${
                                            isActive && "active"
                                        }`}
                                        href={item.path}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
