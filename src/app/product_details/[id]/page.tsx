// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Footer from '@/app/components/Footer';

// type PageProps = {
//     params: Promise<{ id: string }>;
// };

// // Predefine product IDs to pre-render for static export
// export async function generateStaticParams() {
//     // Replace with actual product IDs (e.g., from an API or database)
//     const productIds = ['1', '2', '3']; // Example: Generates /product_details/1, /product_details/2, /product_details/3
//     return productIds.map((id) => ({ id }));
// }

// export default async function ProductDetailsPage({ params }: PageProps) {
//     const { id } = await params;

//     // Validate ID to ensure it matches pre-rendered paths
//     const validIds = ['1', '2', '3']; // Match generateStaticParams
//     if (!validIds.includes(id)) return notFound();

//     // Optional: Fetch product data at build time
//     // const product = await fetch(`https://api.example.com/products/${id}`).then((res) => res.json());
//     // if (!product) return notFound();

//     return (
//         <div>
//             <div className="p-10 md:px-16">

//                 <div className="flex flex-col md:flex-row gap-[32px] justify-end">

//                     <div className="flex flex-col gap-4">
//                         <div
//                             style={{
//                                 width: '140px',
//                                 height: '157.5px',
//                                 borderRadius: '4px',
//                                 background: '#E5E7EB',
//                             }}
//                             className="flex flex-col items-center justify-center p-1"
//                         >
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 width={140}
//                                 height={157.5}
//                             />
//                         </div>

//                         <div
//                             style={{
//                                 width: '140px',
//                                 height: '157.5px',
//                                 borderRadius: '4px',
//                                 background: '#E5E7EB',
//                             }}
//                             className="flex flex-col items-center justify-center p-1"
//                         >
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 width={140}
//                                 height={157.5}
//                             />
//                         </div>

//                         <div
//                             style={{
//                                 width: '140px',
//                                 height: '157.5px',
//                                 borderRadius: '4px',
//                                 background: '#E5E7EB',
//                             }}
//                             className="flex flex-col items-center justify-center p-1"
//                         >
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 width={140}
//                                 height={157.5}
//                             />
//                         </div>

//                         <div
//                             style={{
//                                 width: '140px',
//                                 height: '157.5px',
//                                 borderRadius: '4px',
//                                 background: '#E5E7EB',
//                             }}
//                             className="flex flex-col items-center justify-center p-1"
//                         >
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 width={140}
//                                 height={157.5}
//                             />
//                         </div>

//                         {/* Add more columns if needed */}
//                     </div>
//                     <div

//                         className="relative bg-white  rounded-lg p-6 "
//                         style={{ width: '640px', height: '678px' }}
//                     >

//                         <div className="absolute top-6 left-6 flex items-center w-full pr-6">
//                             <div
//                                 className="flex items-center gap-1 bg-white text-black text-sm font-medium shadow-md shadow-rounded hover:bg-gray hover:bg-gray-300"
//                                 style={{
//                                     width: '91px',
//                                     height: '32px',
//                                     borderRadius: '9999px',
//                                     padding: '8px 14px',
//                                 }}
//                             >

//                                 <Image src="/assets/medal-star.svg" alt="New" width={12} height={12} />
//                                 <span className="text-[14px]">New in</span>
//                             </div>
//                             <div>
//                                 <Image
//                                     src="/assets/Wishlist button.svg"
//                                     alt="Wishlist"
//                                     width={50}
//                                     height={50}
//                                     className="absolute right-6 top-[-10px]"
//                                 />
//                             </div>
//                         </div>
//                         <Image
//                             src="/assets/Img.png"
//                             alt="Product"
//                             width={640}
//                             height={678}
//                         />
//                     </div>

//                     <div
//                         style={{
//                             width: '460px',
//                             height: '497px',
//                             gap: '24px',
//                             padding: '19px',
//                             // margin: '1px',
//                             borderRadius: '16px',
//                             border: '1px solid #E5E7EB',
//                             background: '#FFFFFF01',
//                         }}
//                         className="overflow-hidden"
//                     >

//                         <div>
//                             <h2 className="font-[600] text-[40px] text-gray-900 mb-2">
//                                 Feroglobin Liquid Plus...
//                             </h2>
//                             <div className="flex items-center gap-2 text-[16px] mb-4">
//                                 <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
//                                 <span className="text-gray-800 font-medium">4.9</span>
//                                 <span className="text-gray-400">(98 reviews)</span>
//                             </div>
//                             <div className="mb-4">
//                                 <p className="text-gray-900 font-bold text-xl text-[56px] font-[400]">₦ 120,000</p>
//                                 <div className="flex items-center gap-2 mt-1">
//                                     <Image src="/assets/tag.svg" alt="Discount" width={20} height={20} />
//                                     <p className="text-gray-400 text-sm line-through">₦ 220,000</p>
//                                     <p className="text-gray-400 text-sm">(25% off)</p>
//                                 </div>
//                             </div>
//                             <p className="text-gray-700 text-sm mb-6 text-[17px] font-[400] font-[Poppins]">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                                 Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
//                                 <br />
//                                 odio minus dolore impedit fuga eum eligendi.
//                             </p>
//                         </div>
//                         <div className="flex justify-between items-center mt-auto">
//                             <div className="flex items-center rounded-md px-4 py-1 bg-[#F8F8F8] w-[110px] h-[40px]">
//                                 <Image src="/assets/decrease-btn.svg" alt="decrease" width={24} height={24} />
//                                 <span className="px-3 text-[#4B5563]">1</span>
//                                 <Image src="/assets/increase-btn.svg" alt="increase" width={24} height={24} />
//                             </div>
//                             <div className="flex gap-3">
//                                 <button className="font-[Poppins] bg-black text-white rounded hover:bg-gray-900 w-[117px] h-[48px] text-[16px] font-[600]">
//                                     Buy Now
//                                 </button>
//                                 <button className="font-[Poppins] border border-b text-black rounded hover:bg-gray-100 w-[139px] h-[48px] text-[17px] font-[600]">
//                                     Add to Cart
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <hr className="border-t-1 border-gray-300 my-20" />

//                 <p className='font-[600] text-[40px] text-black font-[Poppins]'>Product Description</p>
//                 <p className='font-[400] text-[16px] font-[Poppins] text-[#4B5563]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendisminima nisi modi, quasi,odio minus dolore impedit fuga eum eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, <br />
//                     odio minus dolore impedit fuga eum eligendi.</p>
//                 <div className="flex justify-between items-center mt-10 mb-6">
//                     <div className="flex items-baseline gap-2">
//                         <p className="font-[600] text-[24px] text-black font-[Poppins]">Product reviews</p>
//                         <p className="font-[400] text-[#00000099] text-[16px]">(451)</p>
//                     </div>

//                     <button className="flex items-center justify-between gap-2 font-[Poppins] bg-black text-white rounded hover:bg-gray-900 px-4 h-[48px] text-[16px] font-[600]">
//                         Latest
//                         <Image src="/assets/Icons.svg" alt="arrow" width={20} height={20} />
//                     </button>
//                 </div>
//                 <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//                     {[...Array(6)].map((_, idx) => (
//                         <div
//                             key={idx}
//                             className="w-full h-[247.58px] border border-[#0000001A] rounded-[4px] px-8 py-7 bg-white flex flex-col justify-between"
//                         >
//                             {/* Top icons row */}
//                             <div className="flex justify-between items-center mb-4">
//                                 <Image src="/assets/Frame 10.svg" alt="Star" width={97.93} height={22.58} />
//                                 <Image src="/assets/Frame.svg" alt="Options" width={24} height={24} />
//                             </div>

//                             {/* Reviewer row with custom checkbox beside the name */}
//                             <div className="flex items-center justify-between mb-3">
//                                 <div className="flex items-center gap-2">
//                                     <span className="text-black font-[700] text-[20px]  font-[Poppins]">Chinedu Eze</span>

//                                     {/* Custom checkbox */}
//                                     <label className="relative cursor-pointer">
//                                         <input type="checkbox" className="peer hidden" />
//                                         <div
//                                             className="
//                 w-[19.5px] h-[19.5px] rounded-full
//                 bg-no-repeat bg-center bg-contain
//                 border border-gray-300
//                 peer-checked:border-0
//                 peer-checked:bg-[url('/assets/Vector.svg')]
//               "
//                                         />
//                                     </label>
//                                 </div>
//                             </div>

//                             {/* Review text */}
//                             <p className=" mb-3 font-[400] text-[16px] text-[#4B5563]">
//                                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
//                                 officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore
//                                 impedit fuga eum eligendi.
//                             </p>

//                             {/* Date */}
//                             <p className="font-[500] text-[16px] text-[#00000099] font-[Poppins]">Posted on Today 16, 2025</p>
//                         </div>
//                     ))}
//                 </div>
//                 <button className="border-[#0000001A] font-[Poppins] border text-black rounded-[4px] hover:bg-gray-100 w-[230px] h-[52px] text-[16px] font-[500] mt-[4.26px]">
//                     Load More Reviews
//                 </button>
//                 <p className="text-[36px] font-[600] font-[Poppins] text-black mt-16 mb-6">Related products</p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
//                     {[1, 2, 3, 4].map((_, index) => (
//                         <div key={index} className="relative bg-white border border-gray-100 rounded-lg p-4">
//                             {/* Product Image */}
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 width={309}
//                                 height={250}
//                                 className="rounded-md"
//                             />

//                             {/* Floating Add Icon */}
//                             <div className="absolute bottom-40 right-4 hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-black rounded-full">
//                                 <Image src="/assets/btn.svg" alt="Add Icon" width={40} height={40} />
//                             </div>

//                             {/* Wishlist Icon */}
//                             <div className="absolute top-0 right-0">
//                                 <Image src="/assets/Wishlist button.svg" alt="Wishlist" width={50} height={50} />
//                             </div>

//                             {/* Product Info */}
//                             <div className="mt-4">
//                                 {/* Title - One line */}
//                                 <h3 className="font-semibold text-gray-800 text-ellipsis whitespace-nowrap overflow-hidden">
//                                     Feroglobin Liquid Plus...
//                                 </h3>

//                                 {/* Volume */}
//                                 <p className="text-sm text-gray-500 mt-1">280ML</p>

//                                 {/* Price */}
//                                 <p className="text-sm font-semibold text-gray-900 mt-2">₦21,400.99</p>

//                                 {/* Ratings */}
//                                 <div className="flex items-center gap-1 mt-2">
//                                     <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
//                                     <span className="text-gray-800 font-medium text-sm">4.9</span>
//                                     <span className="text-gray-400 text-sm">(98)</span>
//                                 </div>

//                                 {/* Discount Row: Tag, Old Price, % Off */}
//                                 <div className="flex items-center gap-2 mt-2">
//                                     <Image src="/assets/tag.svg" alt="Discount" width={20} height={20} />
//                                     <p className="text-gray-400 text-sm line-through">₦220,000</p>
//                                     <p className="text-gray-400 text-sm">(25% off)</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//             <Footer />

//         </div>
//     );
// }



import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/app/components/Footer';

type PageProps = {
    params: Promise<{ id: string }>;
};

// Predefine product IDs to pre-render for static export
export async function generateStaticParams() {
    // Replace with actual product IDs (e.g., from an API or database)
    const productIds = ['1', '2', '3']; // Example: Generates /product_details/1, /product_details/2, /product_details/3
    return productIds.map((id) => ({ id }));
}

export default async function ProductDetailsPage({ params }: PageProps) {
    const { id } = await params;

    // Validate ID to ensure it matches pre-rendered paths
    const validIds = ['1', '2', '3']; // Match generateStaticParams
    if (!validIds.includes(id)) return notFound();

    // Optional: Fetch product data at build time
    // const product = await fetch(`https://api.example.com/products/${id}`).then((res) => res.json());
    // if (!product) return notFound();

    return (
        <div>
            <div className="p-10 md:px-16">

                <div className="flex flex-col md:flex-row gap-[32px] justify-end">

                    <div className="flex flex-col gap-4">
                        <div
                            style={{
                                width: '140px',
                                height: '157.5px',
                                borderRadius: '4px',
                                background: '#E5E7EB',
                            }}
                            className="flex flex-col items-center justify-center p-1"
                        >
                            <Image
                                src="/assets/Img.png"
                                alt="Product"
                                width={140}
                                height={157.5}
                            />
                        </div>

                        <div
                            style={{
                                width: '140px',
                                height: '157.5px',
                                borderRadius: '4px',
                                background: '#E5E7EB',
                            }}
                            className="flex flex-col items-center justify-center p-1"
                        >
                            <Image
                                src="/assets/Img.png"
                                alt="Product"
                                width={140}
                                height={157.5}
                            />
                        </div>

                        <div
                            style={{
                                width: '140px',
                                height: '157.5px',
                                borderRadius: '4px',
                                background: '#E5E7EB',
                            }}
                            className="flex flex-col items-center justify-center p-1"
                        >
                            <Image
                                src="/assets/Img.png"
                                alt="Product"
                                width={140}
                                height={157.5}
                            />
                        </div>

                        <div
                            style={{
                                width: '140px',
                                height: '157.5px',
                                borderRadius: '4px',
                                background: '#E5E7EB',
                            }}
                            className="flex flex-col items-center justify-center p-1"
                        >
                            <Image
                                src="/assets/Img.png"
                                alt="Product"
                                width={140}
                                height={157.5}
                            />
                        </div>

                        {/* Add more columns if needed */}
                    </div>
                    <div

                        className="relative bg-white  rounded-lg p-6 "
                        style={{ width: '640px', height: '678px' }}
                    >

                        <div className="absolute top-6 left-6 flex items-center w-full pr-6">
                            <div
                                className="flex items-center gap-1 bg-white text-black text-sm font-medium shadow-md shadow-rounded hover:bg-gray hover:bg-gray-300"
                                style={{
                                    width: '91px',
                                    height: '32px',
                                    borderRadius: '9999px',
                                    padding: '8px 14px',
                                }}
                            >
                                <Image src="/assets/medal-star.svg" alt="New" width={12} height={12} />
                                <span className="text-[14px]">New in</span>
                            </div>
                            <div>
                                <Image
                                    src="/assets/Wishlist button.svg"
                                    alt="Wishlist"
                                    width={50}
                                    height={50}
                                    className="absolute right-6 top-[-10px]"
                                />
                            </div>
                        </div>
                        <Image
                            src="/assets/Img.png"
                            alt="Product"
                            width={640}
                            height={678}
                        />
                    </div>

                    <div
                        style={{
                            width: '460px',
                            height: '497px',
                            gap: '24px',
                            padding: '19px',
                            // margin: '1px',
                            borderRadius: '16px',
                            border: '1px solid #E5E7EB',
                            background: '#FFFFFF01',
                        }}
                        className="overflow-hidden"
                    >

                        <div>
                            <h2 className="font-[600] text-[40px] text-gray-900 mb-2">
                                Feroglobin Liquid Plus...
                            </h2>
                            <div className="flex items-center gap-2 text-[16px] mb-4">
                                <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
                                <span className="text-gray-800 font-medium">4.9</span>
                                <span className="text-gray-400">(98 reviews)</span>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-900 font-bold text-xl text-[56px] font-[400]">₦ 120,000</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Image src="/assets/tag.svg" alt="Discount" width={20} height={20} />
                                    <p className="text-gray-400 text-sm line-through">₦ 220,000</p>
                                    <p className="text-gray-400 text-sm">(25% off)</p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-sm mb-6 text-[17px] font-[400] font-[Poppins]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                                <br />
                                odio minus dolore impedit fuga eum eligendi.
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-auto">
                            <div className="flex items-center rounded-md px-4 py-1 bg-[#F8F8F8] w-[110px] h-[40px]">
                                <Image src="/assets/decrease-btn.svg" alt="decrease" width={24} height={24} />
                                <span className="px-3 text-[#4B5563]">1</span>
                                <Image src="/assets/increase-btn.svg" alt="increase" width={24} height={24} />
                            </div>
                            <div className="flex gap-3">
                                <Link href="/checkout">
                                    <button className="font-[Poppins] bg-black text-white rounded hover:bg-gray-900 w-[117px] h-[48px] text-[16px] font-[600]">
                                        Buy Now
                                    </button>
                                </Link>
                                <Link href="/cart">
                                    <button className="font-[Poppins] border border-b text-black rounded hover:bg-gray-100 w-[139px] h-[48px] text-[17px] font-[600]">
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border-t-1 border-gray-300 my-20" />

                <p className='font-[600] text-[40px] text-black font-[Poppins]'>Product Description</p>
                <p className='font-[400] text-[16px] font-[Poppins] text-[#4B5563]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendisminima nisi modi, quasi,odio minus dolore impedit fuga eum eligendi.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, <br />
                    odio minus dolore impedit fuga eum eligendi.</p>
                <div className="flex justify-between items-center mt-10 mb-6">
                    <div className="flex items-baseline gap-2">
                        <p className="font-[600] text-[24px] text-black font-[Poppins]">Product reviews</p>
                        <p className="font-[400] text-[#00000099] text-[16px]">(451)</p>
                    </div>

                    <button className="flex items-center justify-between gap-2 font-[Poppins] bg-black text-white rounded hover:bg-gray-900 px-4 h-[48px] text-[16px] font-[600]">
                        Latest
                        <Image src="/assets/Icons.svg" alt="arrow" width={20} height={20} />
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[...Array(6)].map((_, idx) => (
                        <div
                            key={idx}
                            className="w-full h-[247.58px] border border-[#0000001A] rounded-[4px] px-8 py-7 bg-white flex flex-col justify-between"
                        >
                            {/* Top icons row */}
                            <div className="flex justify-between items-center mb-4">
                                <Image src="/assets/Frame 10.svg" alt="Star" width={97.93} height={22.58} />
                                <Image src="/assets/Frame.svg" alt="Options" width={24} height={24} />
                            </div>

                            {/* Reviewer row with custom checkbox beside the name */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-black font-[700] text-[20px]  font-[Poppins]">Chinedu Eze</span>

                                    {/* Custom checkbox */}
                                    <label className="relative cursor-pointer">
                                        <input type="checkbox" className="peer hidden" />
                                        <div
                                            className="
                                                w-[19.5px] h-[19.5px] rounded-full
                                                bg-no-repeat bg-center bg-contain
                                                border border-gray-300
                                                peer-checked:border-0
                                                peer-checked:bg-[url('/assets/Vector.svg')]
                                        "
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Review text */}
                            <p className=" mb-3 font-[400] text-[16px] text-[#4B5563]">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem
                                officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore
                                impedit fuga eum eligendi.
                            </p>

                            {/* Date */}
                            <p className="font-[500] text-[16px] text-[#00000099] font-[Poppins]">Posted on Today 16, 2025</p>
                        </div>
                    ))}
                </div>
                <button className="border-[#0000001A] font-[Poppins] border text-black rounded-[4px] hover:bg-gray-100 w-[230px] h-[52px] text-[16px] font-[500] mt-[4.26px]">
                    Load More Reviews
                </button>
                <p className="text-[36px] font-[600] font-[Poppins] text-black mt-16 mb-6">Related products</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[1, 2, 3, 4].map((_, index) => (
                        <div key={index} className="relative bg-white border border-gray-100 rounded-lg p-4">
                            {/* Product Image */}
                            <Image
                                src="/assets/Img.png"
                                alt="Product"
                                width={309}
                                height={250}
                                className="rounded-md"
                            />

                            {/* Floating Add Icon */}
                            <div className="absolute bottom-40 right-4 hover:scale-110 transition-transform duration-300 cursor-pointer hover:bg-black rounded-full">
                                <Image src="/assets/btn.svg" alt="Add Icon" width={40} height={40} />
                            </div>

                            {/* Wishlist Icon */}
                            <div className="absolute top-0 right-0">
                                <Image src="/assets/Wishlist button.svg" alt="Wishlist" width={50} height={50} />
                            </div>

                            {/* Product Info */}
                            <div className="mt-4">
                                {/* Title - One line */}
                                <h3 className="font-semibold text-gray-800 text-ellipsis whitespace-nowrap overflow-hidden">
                                    Feroglobin Liquid Plus...
                                </h3>

                                {/* Volume */}
                                <p className="text-sm text-gray-500 mt-1">280ML</p>

                                {/* Price */}
                                <p className="text-sm font-semibold text-gray-900 mt-2">₦21,400.99</p>

                                {/* Ratings */}
                                <div className="flex items-center gap-1 mt-2">
                                    <Image src="/assets/star.svg" alt="Star" width={20} height={20} />
                                    <span className="text-gray-800 font-medium text-sm">4.9</span>
                                    <span className="text-gray-400 text-sm">(98)</span>
                                </div>

                                {/* Discount Row: Tag, Old Price, % Off */}
                                <div className="flex items-center gap-2 mt-2">
                                    <Image src="/assets/tag.svg" alt="Discount" width={20} height={20} />
                                    <p className="text-gray-400 text-sm line-through">₦220,000</p>
                                    <p className="text-gray-400 text-sm">(25% off)</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}




