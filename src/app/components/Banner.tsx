export default function Banner() {
    return (
        <div className="bg-black w-full h-[45.48px] flex items-center">
            <div className="flex items-center pl-4 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-100">
                <span className="font-poppins font-semibold text-[12.28px] leading-[16.26px] tracking-[0.57px] text-white whitespace-nowrap">
                    Promo! Promo!! Promo!!!
                </span>

                <img
                    src="/assets/CTA Button.png"
                    alt="Promo Arrow"
                    className="w-[40px] h-[40px] pl-4 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-0"
                />
            </div>
        </div>
    );
}
