import React from "react";

const Content = () => {
  return (
    <section className="text-brainyWaveBlack min-h-screen lg:px-24 px-5 lg:py-10 py-4">
      <div className="lg:text-center text-left mb-10">
        <h4 className="font-bold text-[36px] leading-[48px]">
          Find jobs with 3 easy steps
        </h4>
        <p className="text-[19px] leading-8 mt-5">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-x-5 lg:gap-x-40">
        <div>
          <img src="/content_img.svg" alt="Content-img" />
        </div>
        <div>
          <div className="w-[100%] lg:w-[340px] gap-3 flex">
            <p className="rounded-full p-2 bg-brainyWavePurple text-white w-[43px] h-[43px] font-bold text-[17px] leading-[29px] text-center">
              1
            </p>
            <div>
              <h5 className=" font-bold text-[21px] leading-8">
                Search for a job
              </h5>
              <p className="text-[17px] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[340px] gap-3 flex mt-5">
            <p className="rounded-full p-2 bg-brainyWavePurple text-white w-[43px] h-[43px] font-bold text-[17px] leading-[29px] text-center">
              2
            </p>
            <div>
              <h5 className=" font-bold text-[21px] leading-8">
                Apply within our website
              </h5>
              <p className="text-[17px] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:w-[340px] gap-3 flex mt-5">
            <p className="rounded-full p-2 bg-brainyWavePurple text-white w-[43px] h-[43px] font-bold text-[17px] leading-[29px] text-center">
              3
            </p>
            <div>
              <h5 className=" font-bold text-[21px] leading-8">
                Get interview call
              </h5>
              <p className="text-[17px] leading-[29px]">
                With lots of unique blocks, you can easily build a page without
                coding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
