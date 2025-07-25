import React from "react";
import { CiPlay1 } from "react-icons/ci";

const CTA = () => {
  return (
    <section className="items-center justify-center text-center lg:px-[300px] md:px-20 px-4 lg:py-28 py-16 bg-cover max-h-max bg-black text-white">
      <button className="border-transparent rounded-full bg-white w-[70px]">
        <CiPlay1 className="text-brainywavepurple" />
      </button>
      <h4 className="font-bold text-[36px] leading-[48px]">
        How do we help you to grow?
      </h4>
      <p className="font-bold text-[19px] leading-[32px]">
        With lots of unique blocks, you can easily build a page without. coding
        Build your next landing page.
      </p>
    </section>
  );
};

export default CTA;
