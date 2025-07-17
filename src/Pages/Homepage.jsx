import React from "react";
import Header from "../components/Hero";
import Info from "../components/Info";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <Info />
      <Testimonials />
    </main>
  );
};

export default Homepage;
