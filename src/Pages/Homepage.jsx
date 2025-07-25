import React from "react";
import NavBar from "../components/NavBar";
import Hero from "./../components/Hero";
import Info from "./../components/Info";
import Services from "../components/Services";
import CTA from "./../components/CTA";
import Testimonials from "./../components/Testimonials";
import Reasons from "./../components/Reasons";
import Footer from "./../components/Footer";

const Homepage = () => {
  return (
    <main>
      <NavBar/>
      <Hero />
      <Info />
      <Services />
      <Reasons /> 
      <CTA /> 
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Homepage;
