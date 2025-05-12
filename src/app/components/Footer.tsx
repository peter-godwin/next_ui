// 'use client';

// const Footer: React.FC = () => {
//   return (
//     <footer
//       className="bg-gray-200 py-8"
//       style={{
//         width: 'w-full', 
//         height: '426px', 
//       }}
//     >
//       <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center sm:flex-row sm:justify-between h-full">
//         <p className="text-sm text-center sm:text-left mb-4 sm:mb-0 text-black">
//           &copy; {new Date().getFullYear()} Your Company. All rights reserved.
//         </p>
//         <ul className="flex space-x-4 justify-center sm:justify-start">
//           <li>
//             <a href="/privacy" className="hover:text-gray-900 transition-colors">
//               Privacy Policy
//             </a>
//           </li>
//           <li>
//             <a href="/terms" className="hover:text-gray-900 transition-colors">
//               Terms
//             </a>
//           </li>
//           <li>
//             <a href="/contact" className="hover:text-gray-900 transition-colors">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// 'use client';

// import Image from 'next/image';

// const Footer: React.FC = () => {
//   return (
//     <footer
//       className="bg-gray-200 w-full min-h-[426px] px-6 py-10"
//       style={{ top: '2729px' }} // Only works if parent is relative
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-10 h-full">
//         {/* Left: Logo + Text + Socials */}
//         <div className="flex flex-col items-start space-y-4">
//           {/* Title */}
//           <h2 className="font-[Poppins] text-[18px] font-medium leading-[100%] text-gray-900">
//             Pharmacy
//           </h2>

//           {/* Subtitle */}
//           <p className="font-[Poppins] text-[18px] font-medium leading-[100%] text-gray-700">
//             We bring comfort to your doorsteps.
//           </p>

//           {/* Social Icons (Using image files without links) */}
//           <div className="flex space-x-4 mt-2">
//             {/* Facebook Image Icon */}
//             <Image
//               src="/assets/Group 11.svg" // Path to your custom Facebook icon
//               alt="Facebook"
//               width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />

//             {/* Twitter Image Icon */}
//             <Image
//               src="/assets/Group 12.svg" // Path to your custom Twitter icon
//               alt="Twitter"
//               width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />

//             {/* Instagram Image Icon */}
//             <Image
//               src="/assets/Group 13.svg" // Path to your custom Instagram icon
//               alt="Instagram"
//              width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />
//           </div>
//         </div>

//         {/* Right: Navigation Links */}
//         <div className="flex flex-col sm:items-end space-y-2 text-sm text-gray-700">
//           <a href="/privacy" className="hover:text-gray-900 transition-colors">
//             Privacy Policy
//           </a>
//           <a href="/terms" className="hover:text-gray-900 transition-colors">
//             Terms of Service
//           </a>
//           <a href="/contact" className="hover:text-gray-900 transition-colors">
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// 'use client';

// import Image from 'next/image';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-200 w-full min-h-[426px] px-6 py-10">
//       <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12">
//         {/* Column 1: Branding + Icons */}
//         <div className="flex flex-col items-start space-y-4">
//           <h2 className="font-[Poppins] text-[18px] font-medium text-gray-900">Pharmacy</h2>
//           <p className="font-[Poppins] text-[18px] font-medium text-gray-700">
//             We bring comfort to your doorsteps.
//           </p>
//           <div className="flex space-x-4 mt-2">
//             <Image
//               src="/assets/Group 11.svg"
//               alt="Facebook"
//               width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />
//             <Image
//               src="/assets/Group 12.svg"
//               alt="Twitter"
//               width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />
//             <Image
//               src="/assets/Group 13.svg"
//               alt="Instagram"
//               width={51.16}
//               height={51.16}
//               className="hover:opacity-80"
//             />
//           </div>
//         </div>

//         {/* Column 2: Information Links */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-[Poppins] text-[18px] font-semibold text-gray-900 mb-2">Information</h3>
//           <span className="text-gray-700 text-sm">Home</span>
//           <span className="text-gray-700 text-sm">Product</span>
//           <span className="text-gray-700 text-sm">Contact</span>
//         </div>

//         {/* Column 3: Contact Info */}
//         <div className="flex flex-col space-y-2">
//           <h3 className="font-[Poppins] text-[18px] font-semibold text-gray-900 mb-2">Get in Touch</h3>
//           <span className="text-gray-700 text-sm">+234-813-4902-354</span>
//           <span className="text-gray-700 text-sm">godwinpeter@gmail.com</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




'use client';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 w-full min-h-[426px] px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-12">
        {/* Column 1: Branding + Icons */}
        
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
            <span className="text-black text-[18px]">godwinpeter@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text: Copyright & Powered By */}
       <div className="mt-30">
        <p className="text-[20px] font-[Poppins] font-medium text-black leading-tight ml-3">
          © 2025 Pharmacy. All rights reserved. Powered by Storecra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
