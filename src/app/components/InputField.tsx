'use client';

import React from 'react';
import Image from 'next/image';

interface InputFieldProps {
  type?: 'text' | 'email' | 'password' | 'number'; 
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: string; 
  required?: boolean;
  className?: string; 
  errorMessage?: string; 
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
