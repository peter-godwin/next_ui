import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins 'Lato', 'sans-serif'",
  
});

export const metadata: Metadata = {
  title: "Storecra",
  description: "Pharmacy e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      > 
    <Header />
      <main>{children}</main>
      </body>
    </html>
  );
}



// 'use client'

// import Header from './components/Header';
// import './globals.css';

// import { ReactNode } from 'react';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="bg-white antialiased">
       
//         <Header />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }