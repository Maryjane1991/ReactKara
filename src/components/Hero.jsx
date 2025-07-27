import React from "react";
import Button from "./mini-components/Button";

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "hero_pattern.svg" }}
      className="min-h-screen lg:px-[213px] md:px-20 px-4 grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-[150px]md:gap-20 gap-10  mt-20"
    >
      <div>
        <h1 className="font-bold text-5xl leading-[58px]">
          Make your business powerful with Shade.
        </h1>
        <p className="mt-4">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next consultancy website within few minutes.
        </p>
        <button className="w-[200px] h-[59px] w-[100%] mt-8">{`Get A Free Quote`}</button>
      
        <span className="text-sm font-bold block lg:mt-7 md:mt-7 mt-4 text-center">
          Watch how we can help
        </span>
      </div>

      <div>
        <img src="/woman.svg" alt="Hero img" />
      </div>
    </section>
  );
};

export default Hero;
