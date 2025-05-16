
// 'use client';  // Make sure to mark this file as a client component

// import Image from 'next/image';

// export default function Cart() {
//     return (
//         <div className="p-10">
//             <p className="text-[36px] text-black font-[Poppins] font-[600]">Cart</p>
//             <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / Cart</p>

//             <p className="text-[24px] text-[#111827] font-[Poppins] font-[600] mb-6">My cart</p>

//             {/* Styled Card Container */}
//             <div className='flex gap-6'>
//             <div
//                 style={{
//                     width: '715px',
//                     height: '656px',
//                     borderRadius: '20px',
//                     border: '1px solid #0000001A',
//                     padding: '20px 24px',
//                     overflowY: 'auto',  // Keeps content scrollable
//                             paddingLeft: '24px',  // Add left padding to move content to the left
//                 }}
//                 className="bg-white flex flex-col gap-6 scrollable-container"
//             >
//                 {/* Custom CSS to hide scrollbar */}
//                 <style jsx>{`
//                     /* Hide scrollbar in Webkit browsers (Chrome, Safari) */
//                     .scrollable-container::-webkit-scrollbar {
//                         display: none;
//                     }

//                     /* Hide scrollbar in Firefox */
//                     .scrollable-container {
//                         scrollbar-width: none;
//                     }
//                 `}</style>

//                 {[1, 2, 3, 4].map((item, index) => (
//                     <div key={index} className="flex flex-col">
//                         <div className="flex justify-between items-start">
//                             {/* Left: Image and product details */}
//                             <div className="flex gap-6">
//                                 {/* Apply negative margin to push the image upwards */}
//                                 <Image
//                                     src="/assets/Img.png"
//                                     alt="Product"
//                                     width={124}
//                                     height={124}
//                                     className="rounded-md mt-[-8px]"  // Negative margin to push the image up
//                                 />

//                                 <div className="flex flex-col gap-1">
//                                     <p className="text-[20px] text-black font-[Poppins] font-[700]">
//                                         Feroglobin Liquid Plus...
//                                     </p>

//                                     <div className="flex gap-2">
//                                         <p className="text-[14px] text-black font-[Poppins] font-[400]">Type:</p>
//                                         <p className="text-[14px] text-black/50 font-[Poppins] font-[700]">Syrub</p>
//                                     </div>

//                                     <div className="flex gap-2">
//                                         <p className="text-[14px] text-black font-[Poppins] font-[400]">Quantity:</p>
//                                         <p className="text-[14px] text-black/50 font-[Poppins] font-[700]">200ML</p>
//                                     </div>

//                                     <p className="text-[24px] text-black font-[Poppins] font-[500] mt-2">
//                                         ₦ 120,000
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Right: Trash icon and quantity control */}
//                             <div className="flex flex-col items-end justify-between h-full gap-4">
//                                 <Image
//                                     src="/assets/trash.svg"
//                                     alt="Remove item"
//                                     width={24}
//                                     height={24}
//                                     className="cursor-pointer"
//                                 />
//                                 <div className="flex items-center rounded-md px-4 py-1 bg-[#F8F8F8] w-[110px] h-[40px]">
//                                     <Image src="/assets/decrease-btn.svg" alt="decrease" width={24} height={24} />
//                                     <span className="px-3 text-[#4B5563]">1</span>
//                                     <Image src="/assets/increase-btn.svg" alt="increase" width={24} height={24} />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Show divider only after second and third items */}
//                         {(index === 1 || index === 2) && (
//                             <hr className="my-4 border-t border-[#0000001A]" />
//                         )}
//                     </div>

//                 ))}

//             </div>
//              <div
//                     style={{
//                         width: '505px',
//                         height: '498px',
//                         borderRadius: '4px',
//                         border: '1px solid #0000001A',
//                         padding: '20px 24px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '24px',
//                     }}
//                     className="bg-white"
//                 >
//                     <p className="text-[20px] font-[Poppins] font-[600] text-black">Order Summary</p>

//                     {/* Example content */}
//                     <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                         <span>Subtotal</span>
//                         <span>₦ 240,000</span>
//                     </div>

//                     <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                         <span>Delivery</span>
//                         <span>₦ 3,000</span>
//                     </div>

//                     <hr className="border-[#0000001A]" />

//                     <div className="flex justify-between text-[18px] font-[600] text-black font-[Poppins]">
//                         <span>Total</span>
//                         <span>₦ 243,000</span>
//                     </div>

//                     <button className="mt-auto bg-black text-white py-3 rounded-md font-[Poppins]">
//                         Proceed to Checkout
//                     </button>
//                 </div>
//                 </div>
//             </div>
//     );
// }





'use client';

import Image from 'next/image';
import BottomFeatureSession from '../components/BottomFeatureSession';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Cart() {
    return (
        <div>
            <div className="p-10">
                <p className="text-[36px] text-black font-[Poppins] font-[600]">Cart</p>
                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / Cart</p>
                <p className="text-[24px] text-[#111827] font-[Poppins] font-[600] mb-6">My cart</p>

                {/* Flex container for both cards */}
                <div className="flex gap-[76px]">
                    {/* LEFT: Cart Items */}
                    <div
                        style={{
                            width: '715px',
                            height: '656px',
                            borderRadius: '20px',
                            border: '1px solid #0000001A',
                            padding: '20px 24px',
                            overflowY: 'auto',
                        }}
                        className="bg-white flex flex-col gap-6 scrollable-container"
                    >
                        <style jsx>{`
                        .scrollable-container::-webkit-scrollbar {
                            display: none;
                        }
                        .scrollable-container {
                            scrollbar-width: none;
                        }
                    `}</style>

                        {[1, 2, 3, 4].map((item, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-6">
                                        <Image
                                            src="/assets/Img.png"
                                            alt="Product"
                                            width={124}
                                            height={124}
                                            className="rounded-md mt-[-8px]"
                                        />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[20px] text-black font-[Poppins] font-[700]">
                                                Feroglobin Liquid Plus...
                                            </p>
                                            <div className="flex gap-2">
                                                <p className="text-[14px] text-black font-[Poppins] font-[400]">Type:</p>
                                                <p className="text-[14px] text-black/50 font-[Poppins] font-[700]">Syrub</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <p className="text-[14px] text-black font-[Poppins] font-[400]">Quantity:</p>
                                                <p className="text-[14px] text-black/50 font-[Poppins] font-[700]">200ML</p>
                                            </div>
                                            <p className="text-[24px] text-black font-[Poppins] font-[500] mt-2">
                                                ₦ 120,000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-end justify-between h-full gap-4">
                                        <Image
                                            src="/assets/trash.svg"
                                            alt="Remove item"
                                            width={24}
                                            height={24}
                                            className="cursor-pointer"
                                        />
                                        <div className="flex items-center rounded-md px-4 py-1 bg-[#F8F8F8] w-[110px] h-[40px]">
                                            <Image src="/assets/decrease-btn.svg" alt="decrease" width={24} height={24} />
                                            <span className="px-3 text-[#4B5563]">1</span>
                                            <Image src="/assets/increase-btn.svg" alt="increase" width={24} height={24} />
                                        </div>
                                    </div>
                                </div>

                                {(index === 1 || index === 2) && (
                                    <hr className="my-4 border-t border-[#0000001A]" />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Order Summary Card */}
                    <div
                        style={{
                            width: '505px',
                            height: '498px',
                            borderRadius: '4px',
                            border: '1px solid #0000001A',
                            padding: '20px 24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                        className="bg-white"
                    >
                        <p className="text-[20px] font-[Poppins] font-[600] text-black">Order Summary</p>
                        <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
                            <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Quantity</span>
                            <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>3</span>
                        </div>
                        <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
                            <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Product</span>
                            <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 120,000</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[326px] h-[48px] bg-[#F0F0F0] rounded-[4px] flex items-center px-4">
                                <p className="font-[400] text-[16px] text-[#00000066] font-[Poppins]">Add promo code</p>
                            </div>
                            <button className="w-[119px] h-[48px] bg-black text-white rounded-[4px] font-[Poppins] text-[16px] font-[400]">
                                Apply
                            </button>
                        </div>

                        <hr className="border-[#0000001A]" />

                        <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
                            <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>Subtotal</span>
                            <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 362,000</span>
                        </div>

                        <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
                            <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Delivery Fee</span>
                            <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 2,000</span>
                        </div>

                        <hr className="border-[#0000001A]" />

                        <div className="flex justify-between text-[16px] font-[400] text-black font-[Poppins]">
                            <span>Total</span>
                            <span>₦ 362,000</span>
                        </div>
                        <Link
                            href="/checkout"
                            className="mt-auto bg-black text-white py-3 rounded-md font-[Poppins] text-center block"
                        >
                            Proceed to Checkout
                        </Link>

                    </div>

                </div>

            </div>
            <BottomFeatureSession />
            <Footer />
        </div>

    );
}
