import React from "react";
import background from "../assets/images/background.jpg";
import HeroSection from "../components/hero/HeroSection";
import ServicesSection from "../components/hero/ServicesSection";
import About from "../components/hero/About";
import Review from "../components/hero/Review";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <About />
      <Review />
    </div>
  );
};

export default Home;
