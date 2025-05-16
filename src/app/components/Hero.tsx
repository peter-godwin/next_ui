// "use client";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { useState, useEffect } from "react";

// export default function Hero() {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
//         loop: true,
//         slides: { perView: 1 },
//         slideChanged(slider) {
//             setCurrentSlide(slider.track.details.rel);
//         },
//     });

//     const slides = [
//         {
//             title: "Browse Our Latest\nProducts",
//             //   img: "/assets/hero-image-1.png",
//         },
//         {
//             title: "Exclusive Offers",
//             //   img: "/assets/hero-image-2.png",
//         },
//         {
//             title: "New Arrivals",
//             //   img: "/assets/hero-image-3.png",
//         },
//         {
//             title: "New Arrivals",
//             //   img: "/assets/hero-image-3.png",
//         },
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (instanceRef.current) {
//                 instanceRef.current.next();
//             }
//         }, 10000); // Slide every 9 seconds
//         return () => clearInterval(interval);
//     }, [instanceRef]);

//     return (
//         <section className="w-full h-auto md:h-[600px] bg-[#B6B5B5] overflow-hidden flex flex-col justify-between">
//             <div ref={sliderRef} className="keen-slider flex-1">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={index}
//                         className="keen-slider__slide flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12"
//                     >
//                         {/* Left: Text Content */}
//                         <div className="text-center md:text-left max-w-xl">
//                             <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 whitespace-pre-line">
//                                 {slide.title}
//                             </h1>
//                             <button className="bg-black text-white px-6 py-3 rounded-md text-sm md:text-base">
//                                 Shop Now
//                             </button>
//                         </div>


//                     </div>
//                 ))}
//             </div>

//             <div className="keen-slider__dots mt-4 flex justify-center gap-2 pb-6">
//                 {slides.map((_, idx) => (
//                     <button
//                         key={idx}
//                         onClick={() => instanceRef.current?.moveToIdx(idx)}
//                         className={`keen-slider__dot w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-black  w-8" : "bg-black/70"
//                             }`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect } from "react";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: { perView: 1 },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true); // Only show slider once it's ready
        },
    });

    const slides = [
        { title: "Browse Our Latest\nProducts" },
        { title: "Exclusive Offers" },
        { title: "New Arrivals" },
        { title: "New Items" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (instanceRef.current) {
                instanceRef.current.next();
            }
        }, 10000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <section className="w-full h-auto md:h-[600px] bg-[#B6B5B5] overflow-hidden flex flex-col justify-between">
            <div
                ref={sliderRef}
                className={`keen-slider flex-1 transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="keen-slider__slide flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12"
                    >
                        <div className="text-center md:text-left max-w-xl">
                            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 whitespace-pre-line">
                                {slide.title}
                            </h1>
                            <button className="bg-black text-white px-6 py-3 rounded-md text-sm md:text-base">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {loaded && (
                <div className="keen-slider__dots mt-4 flex justify-center gap-2 pb-6">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => instanceRef.current?.moveToIdx(idx)}
                            className={`keen-slider__dot w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "bg-black w-8" : "bg-black/70"
                                }`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
