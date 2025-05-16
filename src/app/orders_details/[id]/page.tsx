import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const orderIds = ['1', '2', '3'];
  return orderIds.map((id) => ({ id }));
}

export default async function OrderDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const orders = [
    {
      id: '1',
      name: 'Feroglobin Liquid Plus...',
      orderNo: '298993899',
      seller: 'DeemPay',
      status: 'Delivered',
      date: '04 - June - 2020',
      image: '/assets/Img.png',
      shippingAddress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vulputate at ornare eget lorem feugiat sem amet. Consequat sit in purus, malesuada mattis tellus in. ',
    },
    {
      id: '2',
      name: 'Paracetamol 500mg',
      orderNo: '198223456',
      seller: 'PharmaFast',
      status: 'Delivered',
      date: '12 - July - 2021',
      image: '/assets/Img.png',
      shippingAddress: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas vulputate at ornare eget lorem feugiat sem amet. Consequat sit in purus, malesuada mattis tellus in. ',
    },
    {
      id: '3',
      name: 'Vitamin C Tablets',
      orderNo: '984561238',
      seller: 'HealthMart',
      status: 'Delivered',
      date: '30 - Aug - 2021',
      image: '/assets/Img.png',
      shippingAddress: '789 Market Ave, City, Country',
    },
  ];

  const order = orders.find((order) => order.id === id);

  if (!order) {
    return notFound();
  }

  return (
    <div>
      <div className="p-10">
        <div>
          <p className="text-[36px] text-black font-[Poppins] font-[600]">Orders</p>
          <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / order</p>
        </div>
        <p className="text-[24px] font-[500] text-black font-[Poppins] mb-[24px]">
          Order no: {order.orderNo}
        </p>
        <div
          style={{
            width: '1296px',
            height: '679px',
            padding: '20px 24px',
            gap: '24px',
            borderRadius: '20px',
            border: '1px solid #E5E7EB',
          }}
          className="bg-white flex flex-col"
        >
          <div
            style={{
              width: '588px',
              height: '148px',
              padding: '12px 16px',
              borderRadius: '4px',
            }}
            className="bg-[#E5E7EB] flex justify-between items-center"
          >
            <div className="h-full flex items-center">
              <div className="w-[120px] h-[120px] relative">
                <Image
                  src={order.image}
                  alt="Product"
                  layout="fill"
                  className="rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start flex-1 px-4">
              <p className="font-[700] text-[20px] text-black font-[Poppins] mb-2">
                {order.name}
              </p>
              <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
                Order no: <span className="font-medium">{order.orderNo}</span>
              </p>
              <p className="text-[14px] font-[400] text-black font-[Poppins] mb-2">
                Sold by: <span className="font-medium">{order.seller}</span>
              </p>
              <div className="w-[95px] h-[31px] bg-black text-white text-[12px] font-[500] flex items-center justify-center rounded-[4px] ">
                {order.status}
              </div>
            </div>
            <div className="flex flex-col justify-end items-start h-full pb-2">
              <p className="text-[12px] font-[400] text-black font-[Poppins]">{order.date}</p>
            </div>
          </div>
          <div
            style={{
              width: '588px',
              height: '208px',
              borderRadius: '4px',
            }}
            className="bg-[#E5E7EB] flex flex-col"
          >
            <div className="flex-1 ">
              <div className="flex items-center gap-2 px-4 pt-2 mt-[12px]">
                <Image src="/assets/arrow.svg" alt="Arrow icon" width={24} height={24} />
                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">SHIPPING ADDRESS</p>
              </div>

              <hr className="border-t border-gray-300 mt-4 w-full" />

              <div className="px-4 pt-2 space-y-2">
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#212121] font-[Lato] font-[400]">Contact:</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#212121] font-[Lato] font-[400]">Phone:</p>
                  <span className="text-[14px] text-[#212121] font-[Lato] font-[400] text-right">
                    +23481000222341
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#212121] font-[Lato] font-[400]">Delivery address:</p>
                  <span className="text-[14px] text-[#212121] font-[Lato] font-[400] text-right w-[270px]">
                    {order.shippingAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: '588px',
              height: '246px',
              borderRadius: '4px',
            }}
            className="bg-[#E5E7EB] flex flex-col"
          >
            <div className="flex-1 ">
              <div className="flex items-center gap-2 px-4 pt-2 mt-[12px]">
                <Image src="/assets/card-pos.svg" alt="Card icon" width={24} height={24} />
                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">PAYMENT</p>
              </div>

              <hr className="border-t border-gray-300 mt-4 w-full" />

              <div className="px-4 pt-2 space-y-2">
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#212121] font-[Poppins] font-[400]">Subtotal</p>
                  <span className="text-[16px] text-black font-[Poppins] font-[400] text-right">₦ 360,000</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[14px] text-[#212121] font-[Poppins] font-[400]">Shipping fee</p>
                  <span className="text-[16px] text-black font-[Poppins] font-[400] text-right">₦ 2000</span>
                </div>
                <div className="flex justify-between">
                  <p className="text-[16px] text-[#212121] font-[Poppins] font-[700]">Total</p>
                  <span className="text-[16px] text-[#212121] font-[Poppins] font-[700] text-right">₦ 362,000</span>
                </div>
              </div>
            </div>
            <div className="flex w-full h-[41px] gap-[15.7px]">
              <div className="flex-1 bg-black text-white font-[Poppins] font-[700] text-[16px] flex items-center justify-center rounded-[4px] hover:bg-black/80">
                Confirm Order
              </div>
              <div className="flex-1 border border-black text-black font-[Poppins] font-[700] text-[16px] flex items-center justify-center rounded-[4px] hover:bg-gray-300">
                Open Dispute
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
