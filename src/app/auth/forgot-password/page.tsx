'use client';

import Footer from "@/app/components/Footer";

export default function ForgotPassword() {
  return (
    <div>
    <div className=" flex items-center justify-center px-4">
      <div className="max-w-md bg-white p-6 ">
        <h1 className="text-[#111827] text-3xl font-semibold text-center mb-6">Forgot password</h1>
        
        <p className="text-[#212121]  font-normal  mb-8">
          To reset your password, enter the email registered with your account.
        </p>

        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-[#111827] text-base font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              className="w-full h-11 px-4 border border-[#E5E7EB] rounded-lg text-sm text-gray-700 placeholder:text-[#4B5563] focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full h-12 bg-[#111111] text-white text-base font-medium rounded-md hover:bg-[#222222] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
      <Footer />
    </div>
  );
}
