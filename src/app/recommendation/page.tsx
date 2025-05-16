
'use client';
import { useState } from "react";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ProductsPage() {
    const [min, setMin] = useState(10);
    const [max, setMax] = useState(10000);

    const categories = [
        'Beauty & Maternity',
        'Baby & Personal care',
        'Pain & Skin care',
        'First aid & Emergency',
        'Medicines',
        'Health & Wellness',
        'Vitamins & Supplements',
    ];

    const minPercentage = (min / 100) * 100;
    const maxPercentage = (max / 100) * 100;

    const trackStyle = {
        background: `linear-gradient(to right, #E5E7EB ${minPercentage}% , #111111 ${minPercentage}%, #111111 ${maxPercentage}%, #E5E7EB ${maxPercentage}%)`,
    };

    return (
        <div>
            <div className="flex justify-between">

                <div className="p-4 pl-[96px]">
                    <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
                    <div className="space-y-3">
                        {categories.map((category, index) => (
                            <label key={index} className="flex items-center space-x-2">
                                <input type="checkbox" className="custom-checkbox" />
                                <p className="text-base text-black">{category}</p>
                            </label>
                        ))}
                    </div>

                    <hr className="mt-4 mb-4 border-t border-gray-300 w-[100%] mx-auto" />

                    <div className="mb-2">
                        <h3 className="text-lg font-semibold text-black mb-2">Price Range</h3>
                        <div className="dual-slider-container">
                            <div
                                className="dual-slider-track"
                                style={trackStyle}
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={min}
                                onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
                                className="dual-slider"
                            />
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={max}
                                onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
                                className="dual-slider"
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-sm text-black">
                            <div className="flex flex-col items-left">
                                <p
                                    className="text-gray-600"
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0%',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    Min Price
                                </p>
                                <div
                                    style={{
                                        width: '130.5px',
                                        height: '40px',
                                        borderRadius: '9999px',
                                        paddingTop: '8px',
                                        paddingRight: '16px',
                                        paddingBottom: '8px',
                                        paddingLeft: '16px',
                                        borderWidth: '1px',
                                        borderColor: '#E5E7EB',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0%',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        ₦
                                    </p>
                                    <p
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0%',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        {min}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-left ml-4 ">
                                <span
                                    className="text-gray-600"
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '0%',
                                        verticalAlign: 'middle',
                                    }}
                                >
                                    Max Price
                                </span>
                                <div
                                    style={{
                                        width: '130.5px',
                                        height: '40px',
                                        borderRadius: '9999px',
                                        paddingTop: '8px',
                                        paddingRight: '16px',
                                        paddingBottom: '8px',
                                        paddingLeft: '16px',
                                        borderWidth: '1px',
                                        borderColor: '#E5E7EB',
                                        borderStyle: 'solid',
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0%',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        ₦
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            letterSpacing: '0%',
                                            verticalAlign: 'middle',
                                        }}
                                    >
                                        {max}
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr className="mt-4 mb-4 border-t border-gray-300 w-[100%] mx-auto" />

                    <div className="mt-4 ">
                        <h3
                            className="text-lg font-semibold text-black mb-2"
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: '18px',
                                lineHeight: '24px',
                            }}
                        >
                            Sort Order
                        </h3>
                        <div className="space-y-2">
                            {['Popularity', 'Best Rating', 'Newest', 'Price: Low - High', 'Price: High - Low'].map((option, index) => (
                                <label key={index} className="flex items-center space-x-2 text-black">
                                    <input
                                        type="radio"
                                        name="sortOrder"
                                        value={option}
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '9999px',
                                            border: '1px solid #000',
                                            accentColor: '#000',
                                        }}

                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        {option}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4 p-4 ml-[20px] pt-3 pr-15">
                    <div className="grid grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                            <div key={index} className="relative bg-white border border-gray-50 rounded-lg p-4">
                                <Image src="/assets/Img.png" alt="Product" width={309} height={250} className="rounded-md" />

                                <div className="absolute bottom-32 right-4 hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-black rounded-full">
                                    <Image src="assets/btn.svg" alt="Add Icon" width={40} height={40} />
                                </div>

                                <div className="absolute top-0 right-0">
                                    <Image src="/assets/Wishlist button.svg" alt="Tag" width={50} height={50} />
                                </div>

                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Feroglobin Liquid Plus...</h3>
                                        <p className="text-sm text-gray-500">280ML</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-gray-900">₦21,400.99</p>
                                        <p className="text-xs text-gray-400 line-through">₦22,000.99</p>
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center text-sm text-yellow-500 gap-1">
                                    <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
                                    <span className="text-gray-800 font-medium">4.9</span>
                                    <span className="text-gray-400">(98)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 gap-2 items-right ml-150">
                        <button className="text-black text-xl px-3 py-2 hover:bg-gray-200 rounded-md">
                            <Image
                                src="/assets/Frame 3688.svg"
                                alt="Left Arrow"
                                width={29.93}
                                height={26.17}
                            />

                        </button>

                        {[1, 2, 3, 4, 5].map((number) => (
                            <button
                                key={number}
                                className={`text-black font-medium ${number === 1
                                    ? 'bg-gray-200'
                                    : 'hover:bg-gray-100'
                                    }`}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    padding: '6px 12px',
                                    gap: '10px',
                                    borderRadius: '12px',
                                    background: number === 1 ? '#E5E7EB' : 'transparent',
                                }}
                            >
                                {number}
                            </button>
                        ))}

                        <button className="text-black text-xl px-3 py-2 hover:bg-gray-200 rounded-md">
                            <Image
                                src="/assets/Frame 3687.svg"
                                alt="Right Arrow"
                                width={29.93}
                                height={26.17}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
