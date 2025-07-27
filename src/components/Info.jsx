import React from "react";
import Button from "./mini-components/Button";

const Info = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-3 grid-cols-1 items-center justify-center lg:px-[240px] px-4 lg:gap-x-12 py-10">
      <div>
        <h3 className="font-bold text-[32px] leading-[44px]">
          Experienced experts are giving advices.
        </h3>
        <p className="text-[19px] leading-[32px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <button className="lg:w-[200px] w-[100%] h-[50px] mt-4 rounded-md">"Learn how we work"
          </button>
      </div>
      <div className="mt-5 lg:mt-0 md:items-center md:mx-auto">
        <img src="/man.svg" alt="" />
      </div>
      <div>
        <div className="md:text-center">
          <h3 className="font-bold text-[32px] leading-[44px]">1M+</h3>
          <p className="text-[19px] leading-[32px]">
            Satisfaction rate comes from our awesome customers.
          </p>
        </div>
        <div className="md:text-center">
          <h3 className="font-bold text-[32px] leading-[44px]">92%</h3>
          <p className="text-[19px] leading-[32px]">
            Satisfaction rate comes from our awesome customers.
          </p>
        </div>
        <div className="md:text-center">
          <h3 className="font-bold text-[32px] leading-[44px]">4.9/5.0</h3>
          <p className="text-[19px] leading-[32px]">
            Average customer ratings we have got all over internet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
