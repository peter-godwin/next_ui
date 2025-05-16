// import Image from 'next/image';
// import Link from 'next/link';

// export default function CheckOut() {
//     return (
//         <div className="p-10">
//             {/* Header */}
//             <div>
//                 <p className="text-[36px] text-black font-[Poppins] font-[600]">Checkout</p>
//                 <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / Checkout</p>
//             </div>

//             {/* Contact Info Card */}
//             <div
//                 style={{
//                     width: '836px',
//                     height: '203.2px',
//                     borderRadius: '16px',
//                     border: '1px solid #E5E7EB',
//                 }}
//                 className="bg-white flex flex-col mb-6"
//             >
//                 <div className="flex items-center gap-2 px-4 pt-4">
//                     <Image src="/assets/profile.svg" alt="Profile icon" width={24} height={24} />
//                     <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">CONTACT INFO</p>
//                 </div>

//                 <hr className="border-t border-[#E5E7EB] mt-4" />

//                 <div className="flex gap-[24px] px-4 pt-4">
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Your phone number</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Email address</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Shipping Address Card */}
//             <div
//                 style={{
//                     width: '836px',
//                     borderRadius: '16px',
//                     border: '1px solid #E5E7EB',
//                     padding: '1px',
//                 }}
//                 className="bg-white"
//             >
//                 <div className="flex items-center gap-2 px-4 pt-4">
//                     <Image src="/assets/arrow.svg" alt="Arrow icon" width={24} height={24} />
//                     <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">SHIPPING ADDRESS</p>
//                 </div>

//                 <hr className="border-t border-[#E5E7EB] mt-4" />

//                 <div className="flex gap-[24px] px-4 pt-4">
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">First name</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Last name</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                 </div>

//                 {/* Address Line 1 + Apt/Suite */}
//                 <div className="flex gap-[24px] px-4 pt-4">
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Address line 1</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[582px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Apt, Suite</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[180px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                 </div>

//                 {/* Address Line 2 */}
//                 <div className="px-4 pt-4">
//                     <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Address line 2</p>
//                     <div className="border border-[#E5E7EB] rounded-[12px] w-[786px] h-[43.2px] px-4 bg-white"></div>
//                 </div>

//                 {/* City + Country */}
//                 <div className="flex gap-[24px] px-4 pt-4">
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">City</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Country</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                 </div>

//                 {/* State/Province + Postal Code */}
//                 <div className="flex gap-[24px] px-4 pt-4 pb-6">
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">State/Province</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                     <div>
//                         <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Postal code</p>
//                         <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
//                     </div>
//                 </div>

//             </div>
//             {/* Third Card - e.g. Payment Method */}
//             {/* Third Card - Payment Method */}
//             <div
//                 style={{
//                     width: '836px',
//                     height: '210px',
//                     paddingTop: '1px',
//                     paddingBottom: '1px',
//                     borderRadius: '16px',
//                     border: '1px solid #E5E7EB',
//                 }}
//                 className="bg-white mt-6"
//             >
//                 <div className="flex items-center gap-2 px-4 pt-4">
//                     <Image src="/assets/card-pos.svg" alt="Card icon" width={24} height={24} />
//                     <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">PAYMENT</p>
//                 </div>

//                 <div className="flex flex-col gap-4 px-4 pt-[40px]">
//                     {/* Option 1 */}
//                     <label className="flex items-center gap-3 cursor-pointer">
//                         <input type="checkbox" className="peer hidden" />
//                         <div
//                             className="
//       w-[19.5px] h-[19.5px] rounded-full
//       border border-gray-300 bg-white
//       peer-checked:border-none
//       peer-checked:bg-[url('/assets/Vector.svg')]
//       peer-checked:bg-no-repeat
//       peer-checked:bg-center
//       peer-checked:bg-contain
//     "
//                         />
//                         <div className="text-[16px] text-[#111827] font-[Poppins] font-[600]">Pay with bank</div>
//                     </label>


//                     {/* Option 2 */}
//                     <label className="flex items-center gap-3 cursor-pointer">
//                         <input type="checkbox" className="peer hidden" />
//                         <div
//                             className="
//       w-[19.5px] h-[19.5px] rounded-full
//       border border-gray-300 bg-white
//       peer-checked:border-none
//       peer-checked:bg-[url('/assets/Vector.svg')]
//       peer-checked:bg-no-repeat
//       peer-checked:bg-center
//       peer-checked:bg-contain
//     "
//                         />
//                         <div className="text-[16px] text-[#111827] font-[Poppins] font-[600]">Pay with bank</div>
//                     </label>


//                     {/* Option 3 */}
//                     <label className="flex items-center gap-3 cursor-pointer">
//                         <input type="checkbox" className="peer hidden" />
//                         <div
//                             className="
//       w-[19.5px] h-[19.5px] rounded-full
//       border border-gray-300 bg-white
//       peer-checked:border-none
//       peer-checked:bg-[url('/assets/Vector.svg')]
//       peer-checked:bg-no-repeat
//       peer-checked:bg-center
//       peer-checked:bg-contain
//     "
//                         />
//                         <div className="text-[16px] text-[#111827] font-[Poppins] font-[600]">Pay with bank</div>
//                     </label>

//                 </div>
//             </div>
//             <div
//                 style={{
//                     width: '505px',
//                     height: '498px',
//                     borderRadius: '4px',
//                     border: '1px solid #0000001A',
//                     padding: '20px 24px',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     gap: '24px',
//                 }}
//                 className="bg-white"
//             >
//                 <p className="text-[20px] font-[Poppins] font-[600] text-black">Order Summary</p>
//                 <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                     <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Quantity</span>
//                     <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>3</span>
//                 </div>
//                 <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                     <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Product</span>
//                     <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 120,000</span>
//                 </div>
//                 <div className="flex gap-4">
//                     <div className="w-[326px] h-[48px] bg-[#F0F0F0] rounded-[4px] flex items-center px-4">
//                         <p className="font-[400] text-[16px] text-[#00000066] font-[Poppins]">Add promo code</p>
//                     </div>
//                     <button className="w-[119px] h-[48px] bg-black text-white rounded-[4px] font-[Poppins] text-[16px] font-[400]">
//                         Apply
//                     </button>
//                 </div>

//                 <hr className="border-[#0000001A]" />

//                 <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                     <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>Subtotal</span>
//                     <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 362,000</span>
//                 </div>

//                 <div className="flex justify-between text-[16px] text-[#4B5563] font-[Poppins]">
//                     <span className='text-[16px] font-[500] text-[#00000099] font-[Poppins]'>Delivery Fee</span>
//                     <span className='text-[16px] font-[500] text-[#000000] font-[Poppins]'>₦ 2,000</span>
//                 </div>
//                 <span className='flex  text-[16px] font-[400] text-black font-[Poppins]'>VAT(0.5%)</span>
//                 <span className='flex  text-[12px] font-[400] text-[#111111] font-[Poppins]'>Note : VAT (Value Added Tax ) is the tax  added only on the value of the  product  purchased and not on the shipping fee.</span>
//                 <hr className="border-[#0000001A]" />

//                 <div className="flex justify-between text-[16px] font-[400] text-black font-[Poppins]">
//                     <span>Total</span>
//                     <span>₦ 362,000</span>
//                 </div>
//                 <Link
//                     href="/checkout"
//                     className="mt-auto bg-black text-white py-3 rounded-md font-[Poppins] text-center block"
//                 >
//                     Confirm Order
//                 </Link>

//             </div>

//         </div>


//     );
// }



import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

export default function CheckOut() {
    return (
        <div>
            <div className="p-10">
                {/* Header */}
                <div>
                    <p className="text-[36px] text-black font-[Poppins] font-[600]">Checkout</p>
                    <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / Checkout</p>
                </div>

                {/* Main Flex Layout */}
                <div className="flex gap-6">
                    {/* Left Column: All Form Cards */}
                    <div className="flex flex-col gap-6">
                        {/* Contact Info Card */}
                        <div
                            style={{
                                width: '836px',
                                height: '203.2px',
                                borderRadius: '16px',
                                border: '1px solid #E5E7EB',
                            }}
                            className="bg-white flex flex-col"
                        >
                            <div className="flex items-center gap-2 px-4 pt-4">
                                <Image src="/assets/profile.svg" alt="Profile icon" width={24} height={24} />
                                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">CONTACT INFO</p>
                            </div>
                            <hr className="border-t border-[#E5E7EB] mt-4" />
                            <div className="flex gap-[24px] px-4 pt-4">
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Your phone number</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Email address</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address Card */}
                        <div
                            style={{
                                width: '836px',
                                borderRadius: '16px',
                                border: '1px solid #E5E7EB',
                                padding: '1px',
                            }}
                            className="bg-white"
                        >
                            <div className="flex items-center gap-2 px-4 pt-4">
                                <Image src="/assets/arrow.svg" alt="Arrow icon" width={24} height={24} />
                                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">SHIPPING ADDRESS</p>
                            </div>
                            <hr className="border-t border-[#E5E7EB] mt-4" />
                            <div className="flex gap-[24px] px-4 pt-4">
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">First name</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Last name</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                            </div>
                            <div className="flex gap-[24px] px-4 pt-4">
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Address line 1</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[582px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Apt, Suite</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[180px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                            </div>
                            <div className="px-4 pt-4">
                                <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Address line 2</p>
                                <div className="border border-[#E5E7EB] rounded-[12px] w-[786px] h-[43.2px] px-4 bg-white"></div>
                            </div>
                            <div className="flex gap-[24px] px-4 pt-4">
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">City</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Country</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                            </div>
                            <div className="flex gap-[24px] px-4 pt-4 pb-6">
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">State/Province</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                                <div>
                                    <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Postal code</p>
                                    <div className="border border-[#E5E7EB] rounded-[12px] w-[381px] h-[43.2px] px-4 bg-white"></div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Method Card */}
                        <div
                            style={{
                                width: '836px',
                                height: '210px',
                                paddingTop: '1px',
                                paddingBottom: '1px',
                                borderRadius: '16px',
                                border: '1px solid #E5E7EB',
                            }}
                            className="bg-white"
                        >
                            <div className="flex items-center gap-2 px-4 pt-4">
                                <Image src="/assets/card-pos.svg" alt="Card icon" width={24} height={24} />
                                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">PAYMENT</p>
                            </div>
                            <div className="flex flex-col gap-4 px-4 pt-[40px]">
                                
                                {['Pay with bank', 'Paystack', 'Deempay'].map((option, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center space-x-2 text-black cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="paymentMethod"
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

                    {/* Right Column: Order Summary Card */}
                    <div
                        style={{
                            width: '505px',
                            height: '625px',
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
                        <div className="flex justify-between">
                            <span className="text-[16px] font-[500] text-[#00000099]">Quantity</span>
                            <span className="text-[16px] font-[500] text-[#000000]">3</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[16px] font-[500] text-[#00000099]">Product</span>
                            <span className="text-[16px] font-[500] text-[#000000]">₦ 120,000</span>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-[326px] h-[48px] bg-[#F0F0F0] rounded-[4px] flex items-center px-4">
                                <p className="font-[400] text-[16px] text-[#00000066]">Add promo code</p>
                            </div>
                            <button className="w-[119px] h-[48px] bg-black text-white rounded-[4px] text-[16px] font-[400]">
                                Apply
                            </button>
                        </div>
                        <hr className="border-[#0000001A]" />
                        <div className="flex justify-between">
                            <span className="text-[16px] font-[500] text-black">Subtotal</span>
                            <span className="text-[16px] font-[500] text-black">₦ 362,000</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[16px] font-[500] text-[#00000099]">Delivery Fee</span>
                            <span className="text-[16px] font-[500] text-[#000000]">₦ 2,000</span>
                        </div>
                        <span className="text-[16px] font-[400] text-black">VAT(0.5%)</span>
                        <span className="text-[12px] font-[400] text-[#111111]">
                            Note : VAT (Value Added Tax ) is the tax added only on the value of the product purchased and not on the shipping fee.
                        </span>
                        <hr className="border-[#0000001A]" />
                        <div className="flex justify-between">
                            <span className="text-[16px] font-[400] text-black">Total</span>
                            <span className="text-[16px] font-[400] text-black">₦ 362,000</span>
                        </div>
                        <Link href="/orders" className="mt-auto bg-black text-white py-3 rounded-md text-center">
                            Confirm Order
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
