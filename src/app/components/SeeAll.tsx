import Image from 'next/image';

export default function SeeAll() {
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <h2 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[40px] font-semibold font-poppins text-black">
                See all
            </h2>
            {/* <img src="/assets/arrow-right.svg" alt="arrow right icon" className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]" /> */}

            <Image
                src="/assets/arrow-right.svg"
                alt="Arrow Right Icon"
                className="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
                width={16} 
                height={16} 
            />

        </div>
    );
}
