'use client';

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BottomFeatureSession from "../components/BottomFeatureSession";

export default function ProductsPage() {
  const categories = useMemo(() => [
    "Babies & Maternity",
    "Body & Personal Care",
    "Face & Skin Care",
    "First Aid & Emergency",
    "Hair Care",
    "Health & Medicines",
    "Vitamins & Supplements",
    "Pain Relievers"
  ], []);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const categoryRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const categoryContainerRef = useRef<HTMLDivElement | null>(null);
  const hrContainerRef = useRef<HTMLDivElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const index = categories.indexOf(currentCategory);
    const selectedEl = categoryRefs.current[index];
    const containerEl = categoryContainerRef.current;
    const hrEl = hrContainerRef.current;

    if (selectedEl && containerEl && hrEl) {
      const selectedRect = selectedEl.getBoundingClientRect();
      const hrRect = hrEl.getBoundingClientRect();
      const leftOffset = selectedRect.left - hrRect.left;

      setUnderlineStyle({
        left: leftOffset,
        width: selectedRect.width
      });
    }
  }, [currentCategory, categories]);

  return (
    <div>
      <Hero />

      <div className="categories-section mt-10 px-4 md:px-12 relative">
        <div
          ref={categoryContainerRef}
          className="flex justify-between items-center text-[16px] font-poppins font-normal leading-[24px] tracking-normal text-gray-800 mb-4"
        >
          {categories.map((category, index) => (
            <span
              key={index}
              ref={(el) => {
                categoryRefs.current[index] = el;
              }}
              className={`cursor-pointer whitespace-nowrap ${category === currentCategory ? 'font-bold' : ''
                }`}
              onClick={() => setCurrentCategory(category)}
            >
              {category}
            </span>
          ))}
        </div>

        <div className="relative">
          <div ref={hrContainerRef} className="relative h-[2px] bg-gray-300 my-4">
            <div
              className="absolute bg-gray-800 h-[2px] transition-all duration-300"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-12 py-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <Link
            key={index}
            href={`/product_details/${index + 1}`}
            className="block"
          >
            <div className="relative bg-white border border-gray-50 rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow duration-300">
              <Image
                src="/assets/Img.png"
                alt={`Product ${index + 1}`}
                width={309}
                height={250}
                className="rounded-md"
              />
              <div className="absolute bottom-40 right-4 hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-black rounded-full">
                <Image src="/assets/btn.svg" alt="Add Icon" width={40} height={40} />
              </div>
              <div className="absolute top-0 right-0">
                <Image src="/assets/Wishlist button.svg" alt="Wishlist" width={50} height={50} />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 text-ellipsis whitespace-nowrap overflow-hidden">
                  Feroglobin Liquid Plus...
                </h3>
                <p className="text-sm text-gray-500 mt-1">280ML</p>
                <p className="text-sm font-semibold text-gray-900 mt-2">₦21,400.99</p>
                <div className="flex items-center gap-1 mt-2">
                  <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
                  <span className="text-gray-800 font-medium text-sm">4.9</span>
                  <span className="text-gray-400 text-sm">(98)</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Image src="/assets/tag.svg" alt="Discount" width={20} height={20} />
                  <p className="text-gray-400 text-sm line-through">₦22,000.99</p>
                  <p className="text-gray-400 text-sm">(25% off)</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <BottomFeatureSession />
      <Footer />
    </div>
  );
}
