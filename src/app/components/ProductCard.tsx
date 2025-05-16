
'use client';

import Image from "next/image";
import { useRef } from "react";

export default function ProductCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 1.2;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full px-6 md:px-[120px] py-8 relative">
      <button
        onClick={() => scroll("left")}
        className="absolute left-15 bottom-40 transform -translate-y-1/2 z-10 hidden md:block"
      >
        <Image src="/assets/FAB.svg" alt="Scroll Left" width={70} height={70} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {[1, 2, 3, 4, ].map((_, index) => (
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

      <button
        onClick={() => scroll("right")}
        className="absolute right-15 bottom-40 transform -translate-y-1/2 z-10 hidden md:block"
      >
        <Image src="/assets/FAB (1).svg" alt="Scroll Right" width={70} height={70} />
      </button>
    </div>
  );
}
