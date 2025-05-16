'use client';

import Footer from "@/app/components/Footer";

export default function Login() {
    return (
        <div>
            <div className=" flex items-center justify-center  px-4">
                <div className="w-full max-w-md  p-6 rounded-xl ">
                    <h1 className="text-[#111827] text-3xl font-semibold text-center mb-8">Login</h1>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-[#111827] text-base font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="example@example.com"
                                className="w-full h-11 px-4 border border-[#E5E7EB]  rounded-[12px] text-sm text-gray-700 placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>

                        <div>
                            <label className="block text-[#111827] text-base font-semibold mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full h-11 px-4 border border-[#E5E7EB]  rounded-[12px] text-sm text-gray-700 placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>
                        <div className="text-left text-sm font-medium text-[#111827]">
                            <a href="/auth/forgot-password" className="hover:underline">Forgot password?</a>
                        </div>
                        <button
                            type="submit"
                            className="w-full h-12 bg-[#111111] text-white text-base font-medium rounded-md hover:bg-[#222222] transition"
                        >
                            Continue
                        </button>
                        <div className="flex items-center gap-4">
                            <hr className="flex-grow border-gray-300" />
                            <span className="text-sm text-gray-500 font-medium">OR</span>
                            <hr className="flex-grow border-gray-300" />
                        </div>
                        <p className="text-sm text-gray-600 text-center">
                            New user?{' '}
                            <a href="/auth/signup" className="text-black hover:underline">
                                Create an account
                            </a>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
