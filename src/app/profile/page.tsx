import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
    return (
        <div className="p-10">
            <div>
                <p className="text-[36px] text-black font-[Poppins] font-[600]">Profile</p>
                <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500] mb-6">HomePage / Profile</p>
            </div>
            <div className="flex gap-10">
                <div
                    style={{
                        width: '315px',
                        height: '700px',
                        padding: '20px 24px',
                        gap: '24px',
                        borderRadius: '4px',
                        border: '1px solid #E5E7EB',
                    }}
                    className="bg-white flex flex-col"
                >
                    <div
                        style={{
                            width: '291px',
                            height: '656px',
                            borderRadius: '10px',
                            background: '#FAFAFA',
                        }}
                        className="flex flex-col items-center pt-6 gap-6"
                    >
                        <div
                            style={{
                                width: '220px',
                                height: '220px',
                            }}
                            className="relative overflow-hidden"
                        >
                            <Image
                                src="/assets/Avatar.png"
                                alt="Profile Image"
                                width={220}
                                height={220}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="text-center">
                            <p className="font-[700] text-[24px] text-black">Stella DeemPay</p>
                            <p className="text-[16px] font-[400] text-[#666666]">stelladeempay@gmail.com</p>
                        </div>
                        <div className="flex flex-col gap-3 w-full items-center">
                            <div className="w-[243px] h-[45px] bg-black text-white rounded-[4px] flex items-center justify-between px-4 cursor-pointer">
                                <span className="font-[500] text-[14px]">Account info</span>
                                <Image src="/assets/ar-right.svg" alt="arrow right" width={20} height={20} />
                            </div>
                            {[
                                { label: 'My order', href: '/orders' },
                                { label: 'My address', href: '/addresses' },
                                { label: 'Change password', href: '/change-password' },
                                { label: 'Log out', href: '/logout' },
                            ].map(({ label, href }, index) => (
                                <Link
                                    key={index}
                                    href={href}
                                    className="w-[243px] h-[45px] bg-white text-black rounded-[4px] flex items-center justify-between px-4 hover:bg-gray-100"
                                >
                                    <span className="font-[500] text-[14px]">{label}</span>
                                    <Image src="/assets/arro-right.svg" alt="arrow right" width={20} height={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '836px',
                        // height: '562.6px',
                        height: '500.6px',
                        borderRadius: '16px',
                        border: '1px solid #E5E7EB',
                        padding: '1px',
                    }}
                    className="bg-white"
                >                    <div className="flex items-center gap-2 px-4 pt-5">
                        <Image src="/assets/profile.svg" alt="Profile icon" width={24} height={24} />
                        <p className="text-[16px] text-[#4B5563] font-[Poppins] font-[500]">ACCOUNT INFO</p>
                    </div>
                    <hr className="border-t border-[#E5E7EB] mt-4" />
                    <div className="flex gap-[24px] px-5 pt-4">
                        <div>
                            <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">First Name</p>
                            <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                        </div>
                        <div>
                            <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Last Name</p>
                            <div className="border border-[#E5E7EB] rounded-[12px] w-[382px] h-[43.2px] px-4 bg-white"></div>
                        </div>
                    </div>
                    <div className="px-4 pt-4">
                        <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Email Address</p>
                        <div className="border border-[#E5E7EB] rounded-[12px] w-[786px] h-[43.2px] px-4 bg-white"></div>
                    </div>
                    <div className="px-4 pt-4">
                        <p className="text-[16px] text-[#111827] font-[Poppins] font-[600] mb-1">Phone Number</p>
                        <div className="border border-[#E5E7EB] rounded-[12px] w-[786px] h-[43.2px] px-4 bg-white"></div>
                    </div>
                    <div className="px-4 pt-6 flex gap-8">
                        <div className="flex flex-col  gap-2">
                            <label key="male" className="flex items-center justify-between text-black">
                                <span className="text-[16px] text-[#1D232E] font-[Poppins] font-[400]">Male</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '9999px',
                                        border: '1px solid #000',
                                        accentColor: '#000',
                                    }}
                                />
                            </label>
                            <hr
                                style={{
                                    width: '382px',
                                    top: '52px',
                                    borderWidth: '1px',
                                    borderImageSource: 'linear-gradient(0deg, #C2C9D1, #C2C9D1), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
                                }}
                            />
                        </div>
                        <div className="flex flex-col  gap-2">
                            <label key="female" className="flex items-center justify-between text-black">
                                <span className="text-[16px] text-[#1D232E] font-[Poppins] font-[400]">Female</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '9999px',
                                        border: '1px solid #000',
                                        accentColor: '#000',
                                    }}
                                />
                            </label>
                            <hr
                                style={{
                                    width: '382px',
                                    top: '52px',
                                    borderWidth: '1px',
                                    borderImageSource: 'linear-gradient(0deg, #C2C9D1, #C2C9D1), linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
                                }}
                            />
                        </div>
                    </div>
                    <div className="px-4 pt-6">
                        <button className="w-[381px] h-[60px] px-[54px] py-[16px] gap-[12px] rounded-[4px] bg-[#0000001A] font-[Poppins] font-medium text-[16px] leading-[100%] text-white">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}




