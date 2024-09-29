"use client";

import { Account, Client } from "appwrite";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../../../public/styles/globals.css";

const client = new Client();
client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

const account = new Account(client);

export default function Navbar() {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const checkUser = async () => {
            const userConnected = await getUser();
            setIsConnected(userConnected);
        };

        const handleAuthChange = () => {
            checkUser();
        };

        checkUser();

        window.addEventListener("authChange", handleAuthChange);

        return () => {
            window.removeEventListener("authChange", handleAuthChange);
        };
    }, []);

    const LinksConnected = [
        {
            name: "Accueil",
            href: "/",
        },
        {
            name: "Profil",
            href: "/profil",
        },
    ];
    const LinksNotConnected = [
        {
            name: "Accueil",
            href: "/",
        },
        {
            name: "login",
            href: "/login",
        },
        {
            name: "register",
            href: "/register",
        },
    ];

    const getUser = async () => {
        try {
            await account.get();
            return true;
        } catch (err) {
            return false;
        }
    };

    return isConnected === true ? (
        <div className="flex justify-center items-center h-[96px] bg-red-300 w-full">
            <ul className="flex justify-center items-center gap-4">
                {LinksConnected.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    ) : (
        <div className="flex justify-center items-center h-[96px]  w-full">
            <ul className="flex justify-center items-center gap-4">
                {LinksNotConnected.map((link) => (
                    <li key={link.name} className="text-xl">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
