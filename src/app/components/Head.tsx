

'use client';

import Image from 'next/image';

export default function Head() {
    return (
        <header className="w-full bg-white h-[80px] flex items-center justify-between px-4 md:px-12 border-b ">
            <div className="flex items-center">
                <Image
                    src="/assets/Group 247.svg"
                    alt="Logo"
                    className="w-[100px] h-auto"
                    width={100} // Specify width
                    height={40} // Specify height
                />
            </div>

            <div className="flex-1 flex justify-center">
                <div className="relative w-[400px] h-[52px]">
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none">
                        <Image
                            src="/assets/search-normal.svg"
                            alt="Search"
                            className="w-5 h-5"
                            width={20} // Specify width
                            height={20} // Specify height
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Search in products..."
                        className="w-full h-full pl-10 pr-4 rounded-full bg-gray-100 text-sm focus:outline-none text-gray-800 placeholder-gray-500"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <Image
                    src="/assets/user.svg"
                    alt="User"
                    className="w-[20px] md:w-[24px] h-auto"
                    width={20} // Specify width
                    height={20} // Specify height
                />
                <Image
                    src="/assets/cart-btn.svg"
                    alt="Cart"
                    className="w-[24px] md:w-[28px] h-auto"
                    width={24} // Specify width
                    height={24} // Specify height
                />
            </div>
        </header>
    );
}
