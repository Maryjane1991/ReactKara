import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Jobs = () => {
  return (
    <section className="text-brainyWaveBlack min-h-[70vh] lg:px-[120px] px-5 lg:py-32 py-4">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        <div>
          <h4 className="font-bold text-[36px] leading-[48px] text-center">
            Featured jobs
          </h4>
          <p className="text-[19px] leading-8 lg:w-[50%] w-[100%]">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <button className="bg-[#F4F7FA] rounded-[10px] mt-7 lg:mt-0 width-[20%] flex gap-5 px-5 py-2">
          <GoArrowLeft />
          <GoArrowRight />
        </button>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 items-center justify-center gap-4">
        <div className="rounded-[10px] border-solid border-[1px] border-brainyServiceBG p-5 h-[260px] items-start justify-center">
          <span className="font-bold text-[13px] leading-[100%] uppercase text-brainyGreen">
            Full-time
          </span>
          <h6 className="font-bold text-[21px] leading-8 uppercase">
            Senior Software Engineer
          </h6>
          <p className="text-[15px] leading-[26px]">New York, USA</p>
          <div className="mt-10 gap-3 flex">
            <img src="/Logo.svg" alt="user" />
            <h5 className="font-bold text-[19px] leading-8">Dorfus</h5>
          </div>
        </div>
        <div className="rounded-[10px] border-solid border-[1px] border-brainyServiceBG p-5 h-[260px] items-start justify-center hidden md:block lg:block">
          <span className="font-bold text-[13px] leading-[100%] uppercase text-brainyWavePurple">
            Remote
          </span>
          <h6 className="font-bold text-[21px] leading-8 uppercase">
            Product Designer
          </h6>
          <p className="text-[15px] leading-[26px]">Lake Colby, UK</p>
          <div className="mt-10 gap-3 flex">
            <img src="/hand.svg" alt="user" />
            <h5 className="font-bold text-[19px] leading-8">Coworks</h5>
          </div>
        </div>
        <div className="rounded-[10px] border-solid border-[1px] border-brainyServiceBG p-5 h-[260px] items-start justify-center hidden md:block lg:block">
          <span className="font-bold text-[13px] leading-[100%] uppercase text-brainyGreen">
            Full-time
          </span>
          <h6 className="font-bold text-[21px] leading-8 uppercase">
            UX Designer
          </h6>
          <p className="text-[15px] leading-[26px]">California, USA</p>
          <div className="mt-[68px] gap-3 flex">
            <img src="/third.svg" alt="user" />
            <h5 className="font-bold text-[19px] leading-8">Askimat</h5>
          </div>
        </div>
        <div className="rounded-[10px] border-solid border-[1px] border-brainyServiceBG p-5 h-[260px] items-start justify-center hidden md:block lg:block">
          <span className="font-bold text-[13px] leading-[100%] uppercase text-[#F64B4B]">
            Part-time
          </span>
          <h6 className="font-bold text-[21px] leading-8 uppercase">
            Full-stack Web Developer
          </h6>
          <p className="text-[15px] leading-[26px]">Katlynburgh, Sweden</p>
          <div className="mt-10 gap-3 flex">
            <img src="/fourth.svg" alt="user" />
            <h5 className="font-bold text-[19px] leading-8">Greener</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
