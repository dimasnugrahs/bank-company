import React from "react";
import Jumbotron from "../components/hero/Jumbotron";
import CompanyProfile from "../components/about/CompanyProfile";
import VisionMission from "../components/about/VisionMission";

const About = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for about page"}
        description={"this desc is dyinamic too for about page description"}
      />

      <CompanyProfile />
      <VisionMission />
    </div>
  );
};

export default About;
