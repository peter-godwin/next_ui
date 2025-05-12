import BestSellers from "../components/BestSeller";
import BottomFeatureSession from "../components/BottomFeatureSession";
import FeatureSection from "../components/FeatureSession";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCardGrid from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function HomePage() {
  return  <div>
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
  
  
  
}
