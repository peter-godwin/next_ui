import BestSellers from "../components/BestSeller";
import BottomFeatureSession from "../components/BottomFeatureSession";
import Category from "../components/CategorySession";
import FeatureSection from "../components/FeatureSession";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCardGrid from "../components/ProductCard";
import Recommendations from "../components/Recommendations";

export default function Home() {
  return (
  <div>
    <Hero />
    <FeatureSection />
    <Category />
    <Recommendations />
    <ProductCardGrid />
    <BestSellers />
    <ProductCardGrid />
    <BottomFeatureSession />
    <Footer />
  </div>
  );
}
