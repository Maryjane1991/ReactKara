import React from "react";

const News = () => {
  return (
    <section className="lg:min-h-screen lg:px-[200px] px-5 text-brainyWaveBlack bg-[#F4F7FA] lg:py-20 py-4">
      <div>
        <h4 className="font-bold text-[36px] leading-[48px] text-center">
          News that helps
        </h4>
        <p className="text-[19px] leading-8">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 h-[450px] mt-20">
        <div>
          <img src="/news_img1.svg" alt="news_img" />
          <div className="bg-white px-5">
            <p className="text-[15px] leading-[26px] mt-5">Career</p>
            <h6 className="font-bold text-[21px] leading-8 lg:w-[80%] w-[100%] mt-3 line-clamp-3">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </h6>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/news_img2.svg" alt="news_img" />
          <div className="bg-white px-5">
            <p className="text-[15px] leading-[26px] mt-5">Lifestyle</p>
            <h6 className="font-bold text-[21px] leading-8 lg:w-[80%] w-[100%] mt-3 line-clamp-3">
              10 ways to reduce your office work depression.
            </h6>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src="/news_img3.svg" alt="news_img" />
          <div className="bg-white px-5">
            <p className="text-[15px] leading-[26px] mt-5">Career</p>
            <h6 className="font-bold text-[21px] leading-8 lg:w-[80%] w-[100%] mt-3 line-clamp-3">
              Why should you work as a team even on small projects.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
