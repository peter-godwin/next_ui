"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/home" },
        { name: "Products", path: "/products" },
        { name: "Contacts", path: "/contacts" },
        { name: "Loremip", path: "/loremip" },
    ];

    return (
        <header className="w-full bg-white h-[80px] flex items-center justify-between px-4 md:px-12 shadow-md">
            <div className="flex items-center">
                {/* <img
                    src="/assets/Group 247.svg"
                    alt="Logo"
                    className="w-[100px] h-auto"
                /> */}
                <Image
                    src="/assets/Group 247.svg"
                    alt="Logo"
                    className="w-[100px] h-auto"
                    width={119} // Specify width for next/image
                    height={46} // Specify height for next/image (or define a fixed height if necessary)
                />
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`hover:text-black transition-colors ${pathname === link.path ? "underline font-semibold" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* <div className="flex items-center gap-3 md:gap-4">
                <img src="/assets/search-normal.svg" alt="Search" className="w-[20px] md:w-[24px] h-auto" />
                <img src="/assets/user.svg" alt="User" className="w-[20px] md:w-[24px] h-auto" />
                <img src="/assets/cart-btn.svg" alt="Cart" className="w-[24px] md:w-[28px] h-auto" /> */}
            {/* </div> */}
            <div className="flex items-center gap-3 md:gap-4">
                <Image
                    src="/assets/search-normal.svg"
                    alt="Search"
                    className="w-[20px] md:w-[24px] h-auto"
                    width={24} // Specify width
                    height={24} // Specify height
                />
                <Image
                    src="/assets/user.svg"
                    alt="User"
                    className="w-[20px] md:w-[24px] h-auto"
                    width={24}
                    height={24}
                />
                <Image
                    src="/assets/cart-btn.svg"
                    alt="Cart"
                    className="w-[24px] md:w-[28px] h-auto"
                    width={24}
                    height={24}
                />
            </div>

        </header>
    );
}







// 'use client';

// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//     const pathname = usePathname();
//     const [searchActive, setSearchActive] = useState(false);
//     const [searchValue, setSearchValue] = useState('');

//     const navLinks = [
//         { name: "Home", path: "/" },
//         { name: "Products", path: "/products" },
//         { name: "Contacts", path: "/contacts" },
//         { name: "Loremip", path: "/loremip" },
//     ];

//     return (
//         <header className="w-full bg-white h-[80px] flex items-center justify-between px-4 md:px-12 shadow-md">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <img
//                     src="/assets/Group 247.svg"
//                     alt="Logo"
//                     className="w-[100px] h-auto"
//                 />
//             </div>

//             {/* Nav Links */}
//             <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-800">
//                 {navLinks.map((link) => (
//                     <Link
//                         key={link.path}
//                         href={link.path}
//                         className={`hover:text-black transition-colors ${pathname === link.path ? "underline font-semibold" : ""}`}
//                     >
//                         {link.name}
//                     </Link>
//                 ))}
//             </nav>

//             {/* Right Section */}
//             <div className="flex items-center gap-3 md:gap-4">
//                 {/* Search Logic */}
//                 {searchActive ? (
//                     <div className="flex items-center w-[400px] h-[52px] bg-gray-100 rounded-full px-6 gap-2">
//                         <Image
//                             src="/assets/search-normal.svg"
//                             alt="Search Icon"
//                             width={20}
//                             height={20}
//                         />
//                         <input
//                             type="text"
//                             placeholder="Search products..."
//                             value={searchValue}
//                             onChange={(e) => setSearchValue(e.target.value)}
//                             className="w-full bg-transparent focus:outline-none text-sm"
//                         />
//                         <button onClick={() => setSearchActive(false)} className="text-gray-500 hover:text-black text-sm">✕</button>
//                     </div>
//                 ) : (
//                     <img
//                         src="/assets/search-normal.svg"
//                         alt="Search"
//                         className="w-[20px] md:w-[24px] h-auto cursor-pointer"
//                         onClick={() => setSearchActive(true)}
//                     />
//                 )}

//                 {/* User and Cart Icons */}
//                 <img src="/assets/user.svg" alt="User" className="w-[20px] md:w-[24px] h-auto" />
//                 <img src="/assets/cart-btn.svg" alt="Cart" className="w-[24px] md:w-[28px] h-auto" />
//             </div>
//         </header>
//     );
// }
