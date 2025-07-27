import React from "react";

const Services = () => {
  return (
    <section className="px-5 md:px-20 my-10 lg:my-0">
      <div className="items-center justify-center lg:px-[300px]">
        <h2 className="font-bold text-4xl leading-[48px] text-center">
          Services we offer for you
        </h2>
        <p className="items-center justify-center text-[19px] leading-[32px] lg:w-[580px] w-[100%] text-center">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 w-[100%] lg:w-[60%] mx-auto lg:mt-14 mt-4 gap-10 md:items-center md:justify-center">
        <div>
          <h3 className="font-bold text-[21px] leading-[32px]">
            Digital Marketing
          </h3>
          <img src="/phone.svg" alt="" />
          <p className="text-[17px] leading-[29px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="font-bold text-[17px] leading-[32px] text-brainyWavePurple">
            Learn more
          </button>
        </div>
        <div>
          <h3 className="font-bold text-[21px] leading-[32px]">
            Business Growth
          </h3>
          <img src="/flower.svg" alt="" />
          <p className="text-[17px] leading-[29px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="font-bold text-[17px] leading-[32px] text-brainyWavePurple">
            Learn more
          </button>
        </div>
        <div>
          <h3 className="font-bold text-[21px] leading-[32px]">
            Content Marketing
          </h3>
          <img src="/class.svg" alt="" />
          <p className="text-[17px] leading-[29px]">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
          <button className="font-bold text-[17px] leading-[32px] text-brainyWavePurple">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
