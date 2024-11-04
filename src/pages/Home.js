import React from "react";
import HeroSection from "../components/hero/HeroSection";
import ServicesSection from "../components/hero/ServicesSection";
import About from "../components/hero/About";
import CompanyBrand from "../components/hero/CompanyBrand";
import WhyUs from "../components/hero/WhyUs";
import ContactUs from "../components/hero/ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CompanyBrand />
      <ServicesSection />
      <WhyUs />
      <ContactUs />
      <About />
    </div>
  );
};

export default Home;
