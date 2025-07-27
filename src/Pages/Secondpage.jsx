import React from "react";
import Category from "../components/component_2/Category";
import Hero_Sec from "../components/component_2/Hero_Sec";
import Company from "../components/component_2/Company";
import Content from "../components/component_2/Content";
import Jobs from "../components/component_2/Jobs";
import NavBar_2 from "../components/component_2/NavBar_2";
import News from "../components/component_2/News";
import Subscribe from "../components/component_2/Subscribe";
import Footer from "../components/Footer";

const Secondpage = () => {
  return (
    <div>
      <Hero_Sec />
      <NavBar_2 />
      <Category />
      <Company />
      <Content />
      <Jobs />
      <News />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Secondpage;
