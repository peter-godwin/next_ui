// export default function Order() {
//     return (
//         <div className="p-10">
//             <div>
//                 <p className="text-[36px] text-black font-[Poppins] font-[600]">Orders</p>
//                 <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / order</p>
//             </div>

//             <p className="text-[24px] font-[600] text-black  font-[Poppins]  mb-[24px]">My Orders</p>
//               <div
//                     style={{
//                         width: '636px',
//                         height: '704px',
//                         padding: '20px 24px',
//                         gap: '24px',
//                         borderRadius: '20px',
//                         border: '1px solid #E5E7EB',
//                     }}
//                     className="bg-white flex flex-col"
//                 ></div>
//         </div>
//     );
// }






// import Image from 'next/image';

// export default function Order() {
//     return (
//         <div className="p-10">
//             {/* Page Header */}
//             <div>
//                 <p className="text-[36px] text-black font-[Poppins] font-[600]">Orders</p>
//                 <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / order</p>
//             </div>

//             {/* Section Title */}
//             <p className="text-[24px] font-[600] text-black font-[Poppins] mb-[24px]">My Orders</p>

//             {/* Main Card */}
//             <div
//                 style={{
//                     width: '636px',
//                     height: '704px',
//                     padding: '20px 24px',
//                     gap: '24px',
//                     borderRadius: '20px',
//                     border: '1px solid #E5E7EB',
//                 }}
//                 className="bg-white flex flex-col"
//             >
//                 {/* Inner Card */}
//                 <div
//                     style={{
//                         width: '588px',
//                         height: '148px',
//                         padding: '12px 16px',
//                         borderRadius: '4px',
//                     }}
//                     className="bg-[#E5E7EB] flex justify-between items-center"
//                 >
//                     {/* Left: Product Image */}
//                     <div className=" h-full flex items-center">
//                         <div className="w-[120px] h-[120px] relative">
//                             <Image
//                                 src="/assets/Img.png"
//                                 alt="Product"
//                                 layout="fill"
//                                 // objectFit="cover"
//                                 className="rounded-md"
//                             />
//                         </div>
//                     </div>

//                     {/* Middle: Product Info */}
//                     <div className="flex flex-col justify-start flex-1 px-4">
//                         <p className="font-[700] text-[20px] text-black font-[Poppins] mb-2">
//                             Feroglobin Liquid Plus...
//                         </p>
//                         <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
//                             Order no: <span className="font-medium">298993899</span>
//                         </p>
//                         <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
//                             Sold by: <span className="font-medium">DeemPay</span>
//                         </p>
//                         <div className="w-[95px] h-[31px] bg-black text-white text-[12px] font-[500] flex items-center justify-center rounded-[4px] ">
//                             Delivered
//                         </div>
//                     </div>

//                     {/* Right: Date of Delivery (Bottom-left aligned) */}
//                     <div className="flex flex-col justify-end items-start h-full pb-2">
//                         <p className="text-[12px] font-[400] text-black font-[Poppins]">04 - June - 2020</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





// import Image from 'next/image';
// import Link from 'next/link';

// const orders = [
//   {
//     id: 1,
//     name: 'Feroglobin Liquid Plus...',
//     orderNo: '298993899',
//     seller: 'DeemPay',
//     status: 'Delivered',
//     date: '04 - June - 2020',
//     image: '/assets/Img.png',
//   },
//   {
//     id: 2,
//     name: 'Paracetamol 500mg',
//     orderNo: '198223456',
//     seller: 'PharmaFast',
//     status: 'Delivered',
//     date: '12 - July - 2021',
//     image: '/assets/Img.png',
//   },
//   {
//     id: 3,
//     name: 'Vitamin C Tablets',
//     orderNo: '984561238',
//     seller: 'HealthMart',
//     status: 'Delivered',
//     date: '30 - Aug - 2021',
//     image: '/assets/Img.png',
//   },
//   {
//     id: 4,
//     name: 'Cough Syrup Max',
//     orderNo: '182736451',
//     seller: 'MediPlus',
//     status: 'Delivered',
//     date: '15 - Sep - 2021',
//     image: '/assets/Img.png',
//   },
// ];

// export default function Order() {
//   return (
//     <div className="p-10">
//       <div>
//         <p className="text-[36px] text-black font-[Poppins] font-[600]">Orders</p>
//         <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / order</p>
//       </div>

//       <p className="text-[24px] font-[600] text-black font-[Poppins] mb-[24px]">My Orders</p>

//       <div className="flex gap-6">
//         {[1, 2].map((_, idx) => (
//           <div
//             key={idx}
//             style={{
//               width: '636px',
//               padding: '20px 24px',
//               borderRadius: '20px',
//               border: '1px solid #E5E7EB',
//             }}
//             className="bg-white flex flex-col space-y-4"
//           >
//             {orders.map((order) => (
//               <Link key={`${idx +1}-${order.id}`} href={`/orders_details/${idx + 1}`}>
                
//                   <OrderCard order={order} />
               
//               </Link>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // OrderCard Component
// function OrderCard({ order }) {
//   return (
//     <div
//       style={{
//         width: '588px',
//         height: '148px',
//         padding: '12px 16px',
//         borderRadius: '4px',
//       }}
//       className="bg-[#E5E7EB] flex justify-between items-center cursor-pointer hover:shadow-md transition"
//     >
//       <div className="h-full flex items-center">
//         <div className="w-[120px] h-[120px] relative">
//           <Image src={order.image} alt="Product" layout="fill" objectFit="cover" className="rounded-md" />
//         </div>
//       </div>

//       <div className="flex flex-col justify-start flex-1 px-4">
//         <p className="font-[700] text-[20px] text-black font-[Poppins] mb-2">{order.name}</p>
//         <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
//           Order no: <span className="font-medium">{order.orderNo}</span>
//         </p>
//         <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
//           Sold by: <span className="font-medium">{order.seller}</span>
//         </p>
//         <div className="w-[95px] h-[31px] bg-black text-white text-[12px] font-[500] flex items-center justify-center rounded-[4px]">
//           {order.status}
//         </div>
//       </div>

//       <div className="flex flex-col justify-end items-start h-full pb-2">
//         <p className="text-[12px] font-[400] text-black font-[Poppins]">{order.date}</p>
//       </div>
//     </div>
//   );
// }



import Image from 'next/image';
import Link from 'next/link';

const orders = [
  {
    id: 1,
    name: 'Feroglobin Liquid Plus...',
    orderNo: '298993899',
    seller: 'DeemPay',
    status: 'Delivered',
    date: '04 - June - 2020',
    image: '/assets/Img.png',
  },
  {
    id: 2,
    name: 'Paracetamol 500mg',
    orderNo: '198223456',
    seller: 'PharmaFast',
    status: 'Delivered',
    date: '12 - July - 2021',
    image: '/assets/Img.png',
  },
  {
    id: 3,
    name: 'Vitamin C Tablets',
    orderNo: '984561238',
    seller: 'HealthMart',
    status: 'Delivered',
    date: '30 - Aug - 2021',
    image: '/assets/Img.png',
  },
  {
    id: 4,
    name: 'Cough Syrup Max',
    orderNo: '182736451',
    seller: 'MediPlus',
    status: 'Delivered',
    date: '15 - Sep - 2021',
    image: '/assets/Img.png',
  },
];

export default function Order() {
  return (
    <div className="p-10">
      {/* Page Header */}
      <div>
        <p className="text-[36px] text-black font-[Poppins] font-[600]">Orders</p>
        <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">
          HomePage / order
        </p>
      </div>

      {/* Section Title */}
      <p className="text-[24px] font-[600] text-black font-[Poppins] mb-[24px]">My Orders</p>

      {/* Two Columns */}
      <div className="flex gap-6">
        {[1, 2].map((_, idx) => (
          <div
            key={idx}
            className="bg-white flex flex-col space-y-4 p-6 border border-[#E5E7EB] rounded-[20px]"
            style={{ width: '636px' }}
          >
            {orders.map((order) => (
              <Link key={`${order.id}`} href={`/orders_details/${order.id}`}>
                <OrderCard order={order} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// OrderCard Component
function OrderCard({ order }: { order: typeof orders[0] }) {
  return (
    <div
      className="bg-[#E5E7EB] flex justify-between items-center cursor-pointer hover:shadow-md transition"
      style={{ width: '588px', height: '148px', padding: '12px 16px', borderRadius: '4px' }}
    >
      {/* Product Image */}
      <div className="h-full flex items-center">
        <div className="w-[120px] h-[120px] relative">
          <Image
            src={order.image}
            alt="Product"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-start flex-1 px-4">
        <p className="font-[700] text-[20px] text-black font-[Poppins] mb-2">{order.name}</p>
        <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
          Order no: <span className="font-medium">{order.orderNo}</span>
        </p>
        <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
          Sold by: <span className="font-medium">{order.seller}</span>
        </p>
        <div className="w-[95px] h-[31px] bg-black text-white text-[12px] font-[500] flex items-center justify-center rounded-[4px]">
          {order.status}
        </div>
      </div>

      {/* Date */}
      <div className="flex flex-col justify-end items-start h-full pb-2">
        <p className="text-[12px] font-[400] text-black font-[Poppins]">{order.date}</p>
      </div>
    </div>
  );
}
