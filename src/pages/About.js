import React from "react";
import Jumbotron from "../components/hero/Jumbotron";
import CompanyProfile from "../components/about/CompanyProfile";
import VisionMission from "../components/about/VisionMission";
import DirectorProfile from "../components/about/DirectorProfile";
import Partners from "../components/about/Partners";

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
    </div>
  );
};

export default About;
