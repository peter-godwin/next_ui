// 'use client';

// import Image from 'next/image';

// interface InputFieldProps {
//   icon?: string; 
//   placeholder?: string;
//   className?: string;
// }

// export default function InputField({ icon, placeholder, className = '' }: InputFieldProps) {
//   return (
//     <div
//       className={`flex items-center bg-white text-black rounded-full w-full ${className}`}
//       style={{
//         height: '48px',
//         borderRadius: '62px',
//         padding: '12px 24px',
//         gap: '12px',
//       }}
//     >
//       {icon && <Image src={icon} alt="Icon" width={20} height={20} />}
//       <span className="text-sm text-gray-500">{placeholder}</span>
//     </div>
//   );
// }




'use client';

import React from 'react';
import Image from 'next/image';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'number'; // Can extend as needed
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: string; // Optional icon (left side)
  required?: boolean;
  className?: string; // Optional additional classes for customization
  errorMessage?: string; // Optional error message for validation
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  icon,
  required = false,
  className = '',
  errorMessage,
}) => {
  return (
    <div className={`flex flex-col gap-2 w-full  ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-800">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div
        className={`flex items-left rounded-full  p-3 ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        {icon && <Image src={icon} alt="Icon" width={20} height={20} className="mr-3" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent outline-none text-sm text-gray-700"
        />
      </div>
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
