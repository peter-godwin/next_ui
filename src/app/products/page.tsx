// import Head from "../components/Head";

// export default function ProductsPage() {
//   const categories = [
//     'Beauty & Maternity',
//     'Baby & Personal care',
//     'Pain & Skin care',
//     'First aid & Emergency',
//     'Medicines',
//     'Health & Wellness',
//     'Vitamins & Supplements',
//   ];

//   return (
//     <div>
//       <Head />

//       <div className="max-w-xs p-4">
//         <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
//         <div className="space-y-3">
//           {categories.map((category, index) => (
//             <label key={index} className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 className="custom-checkbox"
//               />
//               <span className="text-base text-black">{category}</span>
//             </label>
//           ))}
//         </div>

//         {/* Divider */}
//         <hr className="mt-4 border-t border-gray-300" />
//       </div>
//     </div>
//   );
// }



// 'use client';


// 'use client';
// import { useState } from "react";
// import Head from "../components/Head";

// export default function ProductsPage() {
//   const [min, setMin] = useState(10); // Left thumb (min price)
//   const [max, setMax] = useState(90); // Right thumb (max price)

//   const categories = [
//     'Beauty & Maternity',
//     'Baby & Personal care',
//     'Pain & Skin care',
//     'First aid & Emergency',
//     'Medicines',
//     'Health & Wellness',
//     'Vitamins & Supplements',
//   ];

//   // Calculate the percentage of the slider for both min and max values
//   const minPercentage = (min / 100) * 100;  // Percentage for the min thumb
//   const maxPercentage = (max / 100) * 100;  // Percentage for the max thumb

//   // Create a gradient based on the slider values
//   const trackStyle = {
//     background: `linear-gradient(to right, #E5E7EB ${minPercentage}% , #111111 ${minPercentage}%, #111111 ${maxPercentage}%, #E5E7EB ${maxPercentage}%)`,
//   };

//   return (
//     <div>
//       <Head />

//       <div className="max-w-xs p-4">
//         <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
//         <div className="space-y-3">
//           {categories.map((category, index) => (
//             <label key={index} className="flex items-center space-x-2">
//               <input type="checkbox" className="custom-checkbox" />
//               <span className="text-base text-black">{category}</span>
//             </label>
//           ))}
//         </div>

//         <hr className="mt-4 mb-4 border-t border-gray-300" />

//         {/* Price Range Section */}
//         <div className="mb-2">
//           <h3 className="text-lg font-semibold text-black mb-2">Price Range</h3>
//           <div className="dual-slider-container">
//             <div
//               className="dual-slider-track"
//               style={trackStyle} // Apply the dynamic gradient background
//             />
//             {/* Left Thumb: min */}
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={min}
//               onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
//               className="dual-slider"
//             />
//             {/* Right Thumb: max */}
//             <input
//               type="range"
//               min="0"
//               max="100"
//               value={max}
//               onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
//               className="dual-slider"
//             />
//           </div>
//           <div className="text-sm text-black mt-1">
//             N{min} - N{max}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





'use client';
import { useState } from "react";
import Head from "../components/Head";

export default function ProductsPage() {
  const [min, setMin] = useState(50); // Left thumb (min price)
  const [max, setMax] = useState(10000); // Right thumb (max price)

  const categories = [
    'Beauty & Maternity',
    'Baby & Personal care',
    'Pain & Skin care',
    'First aid & Emergency',
    'Medicines',
    'Health & Wellness',
    'Vitamins & Supplements',
  ];

  // Calculate the percentage of the slider for both min and max values
  const minPercentage = (min / 100) * 100;  // Percentage for the min thumb
  const maxPercentage = (max / 100) * 100;  // Percentage for the max thumb

  // Create a gradient based on the slider values
  const trackStyle = {
    background: `linear-gradient(to right, #E5E7EB ${minPercentage}% , #111111 ${minPercentage}%, #111111 ${maxPercentage}%, #E5E7EB ${maxPercentage}%)`,
  };

  return (
    <div>
      <Head />

<div className="max-w-xs p-4 pl-20">
        <h3 className="text-lg font-semibold mb-4 text-black">Categories</h3>
        <div className="space-y-3">
          {categories.map((category, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" className="custom-checkbox" />
              <span className="text-base text-black">{category}</span>
            </label>
          ))}
        </div>

        <hr className="mt-4 mb-4 border-t border-gray-300" />

        {/* Price Range Section */}
        <div className="mb-2">
          <h3 className="text-lg font-semibold text-black mb-2">Price Range</h3>
          <div className="dual-slider-container">
            <div
              className="dual-slider-track"
              style={trackStyle} // Apply the dynamic gradient background
            />
            {/* Left Thumb: min */}
            <input
              type="range"
              min="0"
              max="100"
              value={min}
              onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1))}
              className="dual-slider"
            />
            {/* Right Thumb: max */}
            <input
              type="range"
              min="0"
              max="100"
              value={max}
              onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1))}
              className="dual-slider"
            />
          </div>

          {/* Min and Max Price Display (in a row) */}
          <div className="flex justify-between mt-2 text-sm text-black">
            <div className="flex flex-col items-left">
              <span
                className="text-gray-600"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                }}
              >
                Min Price
              </span>
              <div
                style={{
                  width: '130.5px',
                  height: '40px',
                  borderRadius: '9999px',
                  paddingTop: '8px',
                  paddingRight: '16px',
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                  borderWidth: '1px',
                  borderColor: '#E5E7EB',
                  borderStyle: 'solid',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  ₦
                </span>
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  {min}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-left">
              <span
                className="text-gray-600"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  verticalAlign: 'middle',
                }}
              >
                Max Price
              </span>
              <div
                style={{
                  width: '130.5px',
                  height: '40px',
                  borderRadius: '9999px',
                  paddingTop: '8px',
                  paddingRight: '16px',
                  paddingBottom: '8px',
                  paddingLeft: '16px',
                  borderWidth: '1px',
                  borderColor: '#E5E7EB',
                  borderStyle: 'solid',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  ₦
                </span>
                <span
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0%',
                    verticalAlign: 'middle',
                  }}
                >
                  {max}
                </span>

              </div>

            </div>
          </div>
          <hr className="mt-4 mb-4 border-t border-gray-300" />

          {/* Sort Order Section */}
          <div className="mt-4">
            <h3
              className="text-lg font-semibold text-black mb-2"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
              }}
            >
              Sort Order
            </h3>
            <div className="space-y-2">
              {['Popularity', 'Best Rating', 'Newest', 'Price: Low - High', 'Price: High - Low'].map((option, index) => (
                <label key={index} className="flex items-center space-x-2 text-black">
                  <input
                    type="radio"
                    name="sortOrder"
                    value={option}
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '9999px',
                      border: '1px solid #000',
                      accentColor: '#000', // ensures selected color is black
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                    }}
                  >
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
