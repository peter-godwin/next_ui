'use client';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 w-full min-h-[426px] px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col items-start space-y-6 pl-10">
          <h2 className="font-[Poppins] text-[20px] font-semibold text-black mb-4">Pharmacy</h2>
          <p className="font-[Poppins] text-[18px] font-medium text-black">
            We bring comfort to <br />your doorsteps.
          </p>
          <div className="flex space-x-4 mt-2">
            <Image
              src="/assets/Group 11.svg"
              alt="Facebook"
              width={51.16}
              height={51.16}
              className="hover:opacity-80"
            />
            <Image
              src="/assets/Group 12.svg"
              alt="Twitter"
              width={51.16}
              height={51.16}
              className="hover:opacity-80"
            />
            <Image
              src="/assets/Group 13.svg"
              alt="Instagram"
              width={51.16}
              height={51.16}
              className="hover:opacity-80"
            />
          </div>
        </div>

        {/* Right Columns Grouped */}
        <div className="flex flex-col sm:flex-row gap-10">
          {/* Column 2: Information Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-[Poppins] text-[20px] font-semibold text-black mb-4">Information</h3>
            <span className="text-black text-[18px]">Home</span>
            <span className="text-black text-[18px]">Product</span>
            <span className="text-black text-[18px]">Contact</span>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4 pr-20">
            <h3 className="font-[Poppins] text-[20px] font-semibold text-black mb-4">Get in Touch</h3>
            <span className="text-black text-[18px]">+234-813-4902-354</span>
            <span className="text-black text-[18px]">obimkpustanley@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text: Copyright & Powered By */}
       <div className="mt-30">
        <p className="text-[20px] font-[Poppins] font-medium text-black leading-tight ml-13">
          © 2025 Pharmacy. All rights reserved. Powered by Storecra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
