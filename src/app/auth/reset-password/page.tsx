'use client';

import Footer from '@/app/components/Footer';
import { useRef, useState } from 'react';

export default function ResetPasswordCode() {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [values, setValues] = useState(Array(6).fill(''));

  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^[0-9]$/.test(value)) {
      const newValues = [...values];
      newValues[index] = '*';
      setValues(newValues);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      e.target.value = '';
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newValues = [...values];
      newValues[index] = '';
      setValues(newValues);
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div>
    <div className=" flex items-center justify-center px-4 ">
      <div className="w-full max-w-md bg-white p-6 flex flex-col items-center">
        <h1 className="text-[#111827] text-3xl font-semibold text-center mb-6">
          Reset password
        </h1>

        <p className="text-[#212121] font-normal text-center mb-8 whitespace-nowrap text-[16px] leading-[24px] font-lato">
          Enter the 6-digit secure code that was sent to your email
        </p>

        {/* Input boxes */}
        <div className="flex justify-center gap-[12px] mb-8">
          {values.map((val, i) => (
            <input
              key={i}
              maxLength={1}
              value={val}
              placeholder="*"
              ref={(el) => {
                inputs.current[i] = el;
              }}
              onChange={(e) => handleChange(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              inputMode="numeric"
              className={`w-[73px] h-[56px] text-center 
                text-[16px] leading-[24px] font-[700] 
                rounded-[6px] border border-[#212121B2] 
                placeholder-gray-400 font-lato 
                flex items-center justify-center
                focus:outline-none focus:ring-2 focus:ring-gray-500 
                ${val === '' ? 'text-gray-400' : 'text-[#212121]'}`}
            />
          ))}
        </div>

        {/* Continue button centered and sized */}
        <button
          type="submit"
          className="w-[440px] h-12 bg-[#111111] text-white text-base font-medium rounded-md hover:bg-[#222222] transition"
        >
          Continue
        </button>
      </div>
    </div>
      <Footer />
    </div>
  );
}
