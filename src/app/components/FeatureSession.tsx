"use client";

import Image from "next/image";

export default function FeatureSection() {
    return (
        <section className="w-full bg-[#F8F8F8] px-6 md:px-[120px] py-8">
            <div className="max-w-[1296px] w-full bg-white border border-gray-200 rounded-[16px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] px-[24px] md:px-[40px] py-[24px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

                <div className="flex items-middle gap-3 text-center md:text-left">
                    <Image src="/assets/svg.svg" alt="Feature 1" width={24} height={24} />
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-sm font-semibold">Fast Delivery</p>
                        <p className="text-gray-800 text-sm whitespace-pre-line">
                            Fast delivery nationwide
                        </p>
                    </div>
                </div>
                <div className="hidden md:block w-px h-[50px] bg-[#E5E7EB] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]" />

                <div className="flex items-middle gap-3 text-center md:text-left">
                    <Image src="/assets/empty-wallet-tick.svg" alt="Feature 2" width={24} height={24} />
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-sm font-semibold">Secure Payments Options</p>
                        <p className="text-gray-800 text-sm whitespace-pre-line">
                            We are now accepting payment{"\n"}through card or bank transfer
                        </p>
                    </div>
                </div>

                <div className="hidden md:block w-px h-[50px] bg-[#E5E7EB] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]" />

                <div className="flex items-middle gap-3 text-center md:text-left">
                    <Image src="/assets/house-2.svg" alt="Feature 3" width={24} height={24} />
                    <div className="flex flex-col">
                        <p className="text-gray-800 text-sm font-semibold">Click and Collect</p>
                        <p className="text-gray-800 text-sm whitespace-pre-line">
                            Order products from our website and{"\n"} receive them at home
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
