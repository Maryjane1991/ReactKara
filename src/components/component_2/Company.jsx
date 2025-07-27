import React from "react";

const Company = () => {
  return (
    <section className="bg-brainyWaveBlack text-b text-white lg:px-52 px-5 lg:py-20 py-4 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h4 className="font-bold text-[36px] leading-[48px]">
            Jobs by category
          </h4>
          <p className="text-[19px] leading-8 lg:w-[388px] w-[100%] mt-4">
            With lots of unique blocks, you can easily build a page without
            coding.
          </p>
        </div>
        <div className="font-bold text-[17px] mt-5 lg:mt-0 leading-8 text-brainyGreen">
          <button>Explore all categories</button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 space-x-5 text-brainyWaveBlack">
        <div className="bg-brainyWavePurple p-4 mt-20 rounded-[10px] lg:width-[350px] ">
          <h5 className="font-bold tet-[21px] leading-8">Design</h5>
          <p className="text-[15px] leading-[26px] mt-3">47 Jobs</p>
        </div>
        <div className="bg-white p-4 mt-20 rounded-[10px] lg:width-[350px]">
          <h5 className="font-bold tet-[21px] leading-8">Marketing</h5>
          <p className="text-[15px] leading-[26px] mt-3">51 Jobs</p>
        </div>
        <div className="bg-white p-4 mt-20 rounded-[10px] lg:width-[350px]">
          <h5 className="font-bold tet-[21px] leading-8">Engineering</h5>
          <p className="text-[15px] leading-[26px] mt-3">89 Jobs</p>
        </div>
        <div className="bg-white p-4 mt-20 rounded-[10px] lg:width-[350px] hidden lg:block">
          <h5 className="font-bold tet-[21px] leading-8">Management</h5>
          <p className="text-[15px] leading-[26px] mt-3">16 Jobs</p>
        </div>
        <div className="bg-white p-4 mt-20 rounded-[10px] lg:width-[350px] hidden lg:block">
          <h5 className="font-bold tet-[21px] leading-8">Finance</h5>
          <p className="text-[15px] leading-[26px] mt-3">23 Jobs</p>
        </div>
        <div className="bg-white p-4 mt-20 rounded-[10px] lg:width-[350px] hidden lg:block">
          <h5 className="font-bold tet-[21px] leading-8">Customer Support</h5>
          <p className="text-[15px] leading-[26px] mt-3">34 Jobs</p>
        </div>
      </div>
    </section>
  );
};

export default Company;
