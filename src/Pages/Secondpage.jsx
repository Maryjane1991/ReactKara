import React from "react";
import Category from "../components_2/Category";
import Company from "../components_2/Company";
import Content from "../components_2/Content";
import Jobs from "../components_2/Jobs";
import News from "../components_2/News";
import Subscribe from "../components_2/Subscribe";
import Footer from "../components/Footer";
import Hero_Sec from "../components_2/Hero_Sec";
import NavBar_2 from "../components_2/NavBar_2";

const Secondpage = () => {
  return (
    <div>
      <NavBar_2 />
      <Hero_Sec />
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
