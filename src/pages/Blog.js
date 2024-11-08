import React from "react";
import HeroSection from "../components/hero/HeroSection";
import Jumbotron from "../components/hero/Jumbotron";
import CardBlog from "../components/blog/CardBlog";

const Blog = () => {
  return (
    <div>
      <Jumbotron
        heading={"This title is dynamic for blog page"}
        description={"this desc is dyinamic too for blog page description"}
      />
      <CardBlog />
    </div>
  );
};

export default Blog;
