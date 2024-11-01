import React from "react";
import Jumbotron from "../components/hero/Jumbotron";

const About = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for about page"}
        description={"this desc is dyinamic too for about page description"}
      />
    </div>
  );
};

export default About;
