import React from "react";
import Jumbotron from "../components/hero/Jumbotron";
import CompanyProfile from "../components/about/CompanyProfile";
import VisionMission from "../components/about/VisionMission";
import DirectorProfile from "../components/about/DirectorProfile";
import Partners from "../components/about/Partners";
import Reports from "../components/about/Reports";
import ContactUs from "../components/hero/ContactUs";
import Location from "../components/about/Location";

const About = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for about page"}
        description={"this desc is dyinamic too for about page description"}
      />

      <CompanyProfile />
      <VisionMission />
      <DirectorProfile />
      <Partners />
      <Reports />
      <ContactUs />
      <Location />
    </div>
  );
};

export default About;
