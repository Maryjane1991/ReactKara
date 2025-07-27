import React from "react";

const Category = () => {
  return (
    <section className="h-[50vh] justify-center items-center text-center py-10 lg:my-20 px-5 lg:px-0">
      <h2 className="font-bold text-[36px] leading-[48px] text-center">
        Big companies are here
      </h2>
      <p className=" leading-[32px] text-[19px] lg:px-[200px] lg:my-12 my-7 text-left lg:text-center">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next consultancy website within few minutes. You have a
        business to run. Stop worring about cross-browser bugs, designing new
        pages.
      </p>
      
      <div className="flex justify-center items-center gap-5 lg:gap-10 flex-wrap">
        <img src="/makeless.svg" alt="" />
        <img src="/cowork.svg"alt=""/>
      <img src="/greener.svg" alt="" />
      <img src="/osas.svg" alt="" />
      <img src="/dorfus.svg" alt="" />
      <img src="/askimal.svg" alt="" />
      </div>
    </section>
  );
};

export default Category;
