'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();
    const [searchActive, setSearchActive] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contacts", path: "/contacts" },
        { name: "Loremip", path: "/loremip" },
    ];

    return (
        <header className="w-full bg-white h-[80px] flex items-center justify-between px-4 md:px-12 relative z-20 border">
            <div className="flex items-center">
                <Image
                    src="/assets/Group 247.svg"
                    alt="Logo"
                    width={119}
                    height={46}
                    className="w-[100px] h-auto"
                />
            </div>
            <nav className={`hidden md:flex gap-6 text-sm font-medium text-gray-800 ${searchActive ? 'hidden' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`hover:text-black transition-colors ${pathname === link.path ? "underline font-semibold" : ""}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-3 md:gap-4">
                {searchActive ? (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-[400px] h-[52px] bg-gray-100 rounded-full px-6 gap-2 z-30">
                        <Image
                            src="/assets/search-normal.svg"
                            alt="Search Icon"
                            width={20}
                            height={20}
                        />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full bg-transparent  text-black focus:outline-none text-sm"
                        />
                        <button onClick={() => setSearchActive(false)} className="text-gray-500 hover:text-black text-sm">✕</button>
                    </div>
                ) : (
                    <Image
                        src="/assets/search-normal.svg"
                        alt="Search"
                        width={24}
                        height={24}
                        className="cursor-pointer"
                        onClick={() => setSearchActive(true)}
                    />
                )}
                <Link href={"/profile"}>
                    <Image
                        src="/assets/user.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href={"/cart"}>
                    <Image
                        src="/assets/cart-btn.svg"
                        alt="Logo"
                        width={32}
                        height={30}
                    />
                </Link>
            </div>
        </header>
    );
}
