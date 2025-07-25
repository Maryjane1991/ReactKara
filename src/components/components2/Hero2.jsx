import React from "react";

const Hero_Sec = () => {
  return (
    <section className="min-h-screen px-5 lg:px-[113px] grid grid-cols-1 lg:grid-cols-2 items-center gap-[100px] mt-20 text-brainyWaveBlack bg-brainyGreen/10">
      <div className="">
        <div>
          <h1 className="font-bold text-[60px] leading-[65px]">
            Find a dream job that changes life.
          </h1>
          <p className="mt-4 max-w-max lg:w-[518px] text-[19px] leading-8 mb-10">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next job website.
          </p>
        </div>
        <form className="flex flex-col lg:flex-row gap-10 bg-brainyWavePurple rounded-[10px] w-auto p-5 ">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="border-solid border-brainyServiceBG rounded-lg p-4"
          />
          <input
            type="text"
            placeholder="City"
            className="border-solid border-brainyServiceBG rounded-lg p-4"
          />
          <button className="bg-brainyWaveBlack rounded-lg px-8 py-2 text-white">
            Search
          </button>
        </form>
        <p className="text-[15px] leading-[26px] mt-10">
          Try Product Designer, Software Engineer etc.
        </p>
      </div>
      <div>
        <img src="/hero_2_img.svg" alt="hero_img" />
      </div>
    </section>
  );
};

export default Hero_Sec;
