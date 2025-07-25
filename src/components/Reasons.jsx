import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Reasons = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2 gid-cols-1 items-center justify-center px-4 lg:px-[240px] md:px-20 lg:gap-x-12 mt-10">
      <div>
        <img src="/man standing.svg" alt="man standing.svg" />
      </div>
      <div>
        <h3 className="font-bold text-[36px] leading-[48px] mt-5">
          Reasons you should choose us to grow today.
        </h3>
        <p className=" text-[19px] leading-[32px] mt-3">
          We share common trends and strategies for improving your rental income
          and making sure you stay in high demand.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-14 md:mt-10 mt-4 lg:gap-5 md:px-10 md:py-5">
          <div>
            <h4 className="flex font-bold text-[19px] leading-[32px] w-[400px]">
              <IoMdCheckmark className="text-brainyWavePurple mr-3" />
              Fully Responsive
            </h4>
            <h4 className="flex font-bold text-[19px] leading-[32px] w-[400px]">
              <IoMdCheckmark className="text-brainyWavePurple mr-3" />
              Easy to Edit
            </h4>
          </div>
          <div>
            <h4 className="flex font-bold text-[19px] leading-[32px] w-[400px]">
              <IoMdCheckmark className="text-brainyWavePurple mr-3" />
              Beautiful Layouts
            </h4>
            <h4 className="flex font-bold text-[19px] leading-[32px] w-[400px]">
              <IoMdCheckmark className="text-brainyWavePurple mr-3" />
              Google Font Included
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
