import React from "react";
import HeroSection from "../components/hero/HeroSection";
import ServicesSection from "../components/hero/ServicesSection";
import About from "../components/hero/About";
import Review from "../components/hero/Review";
import CompanyBrand from "../components/hero/CompanyBrand";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CompanyBrand />
      <ServicesSection />
      {/* <About /> */}
    </div>
  );
};

export default Home;
