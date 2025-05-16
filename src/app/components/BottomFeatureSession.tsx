'use client';

import { useState } from "react";
import InputField from './InputField';

export default function BottomFeatureSession() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-[#F8F8F8] px-4 md:px-[120px] py-8 flex justify-center">
      <div
        className="bg-black text-white rounded-[20px] w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
        style={{
          maxWidth: '1240px',
          paddingTop: '36px',
          paddingBottom: '36px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <p
            className="text-white text-center md:text-left px-2 md:px-6"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '42px',
              maxWidth: '100%',
            }}
          >
            Stay up to date about our <br className="hidden md:block" /> latest offers
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[349px] ">
          <InputField
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon="/assets/sms.svg"
            required
            className="bg-white text-black rounded-full h-12 px-4 flex items-center gap-2"
          />
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-white text-black font-semibold transition duration-300 hover:bg-gray-200"
            style={{
              padding: '12px 24px',
              borderRadius: '62px',
            }}
          >
            Subscribe to our newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
