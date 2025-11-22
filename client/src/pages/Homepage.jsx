import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import CTA from "../components/CTA";

const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Stats />
      <About />
      <CTA />
    </div>
  );
};

export default Homepage;
