
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Category() {
    const categories = [
        { src: '/assets/Frame 9@2x.png', title: 'Vitamins & Supplements' },
        { src: '/assets/Frame 8.png', title: 'First Aid & Emergency' },
        { src: '/assets/Frame 7.png', title: 'Babies and Maternity' },
    ];

    return (
        <section className="w-full px-4 md:px-12 py-10">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className=" mt-8 pl-20 md:w-1/2 space-y-4 mb-6 md:mb-0">
                    <h2 className="text-[32px] leading-[100%] font-poppins text-black font-[700]">
                        Shop by <br /> Category
                    </h2>
                    <p className="text-[18px] leading-[100%] font-[500] font-poppins text-gray-500">
                        Lorem ipsum lorem <br />
                        ipsum, loreipsumm <br />
                        mmmmm
                    </p>
                    <Link href="/recommendation">
                        <button className="bg-black text-white px-6 py-3 rounded-md text-sm md:text-base">
                            See more
                        </button>
                    </Link>
                </div>

                <div className="flex gap-4 md:gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-start w-[299.33px]">
                            <div className="w-full h-[363px] relative rounded-[12px] overflow-hidden">
                                <Image
                                    src={category.src}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 text-left text-[16px] font-bold font-poppins text-gray-800">
                                {category.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

