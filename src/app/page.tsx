'use client';

import Header from "./components/Header";
import Banner from './components/Banner'
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSession";
import Recommendations from "./components/Recommendations";
import ProductCardGrid from "./components/ProductCard";
import BestSellers from "./components/BestSeller";
import BottomFeatureSession from "./components/BottomFeatureSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div><Banner />
      <Header />
      <Hero />
      <FeatureSection />
      <Recommendations />
      <ProductCardGrid />
      <BestSellers />
      <ProductCardGrid />
      <BottomFeatureSession />
      <Footer />
    </div>
  );
}





// export default function HomePage() {
//   return (
//     <div>
//     </div>
//   );
// }








