import SeeAll from "./SeeAll";

export default function Recommendations() {
    return (
        <div className="w-full px-6 md:px-[120px] mt-10">
            <h2 className="text-[36px] leading-[40px] font-semibold font-poppins text-gray-900">
                Recommendations
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between mt-4">
                <p className="text-[20px] font-poppins font-[500] text-black md:flex-1 mb-4 md:mb-0">
                    Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum Lorem Ipsum Lorem ipsum
                </p>
                <SeeAll />
            </div>
        </div>
    );
}
