import React from "react";

const Subscribe = () => {
  return (
    <section className="min-h-[80vh] lg:py-20 py-4 lg:px-52 px-5 text-brainyWaveBlack lg:flex flex-row lg:flex-col items-center justify-center">
      <img src="/subscribe_icon.svg" alt="subscribe" />
      <h6 className="font-bold text-[36px] leading-[48px] mt-10 text-center">
        Get our latest updates
      </h6>
      <p className="text-[19px] leading-8 text-center mt-3">
        With lots of unique blocks, you can easily build a page without coding.
        Build your next landing page.
      </p>
      <form>
        <div className="flex flex-col lg:flex-row mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-[1px] border-brainyServiceBG rounded-lg p-3"
          />
          <button className="bg-brainyWavePurple px-3 py-2 font-bold text-[17px] leading-8 rounded-lg lg:ml-3 mt-5 lg:mt-0">
            Subscribe
          </button>
        </div>
        <p className="text-[15px] leading-[26px] text-center mt-5">
          We’ll never share your details with third parties.
        </p>
        <p className="text-[15px] leading-[26px] text-center">
          View our Privacy Policy for more info.
        </p>
      </form>
    </section>
  );
};

export default Subscribe;
