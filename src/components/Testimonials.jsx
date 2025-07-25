import React from "react";
import Button from "./mini-components/Button";
import Heading from "./mini-components/Heading";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      userImg: "./Oval.svg",
      quote:
        "You made it so simple. My new site is so much faster and easier to work with than my old site.",
      userName: "Isabella Chavez",
      userJD: "Graphic Designer",
    },
    {
      id: 2,
      userImg: "/img3.svg",
      quote:
        "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
      userName: "Curtis Rhodes",
      userJD: "Digital Marketer",
    },
    {
      id: 3,
      userImg: "/Oval (2).svg",
      quote:
        "Must have book for all, who want to be Product Designer or Interaction Designer.",
      userName: "Lucas Mann",
      userJD: "Founder",
    },
  ];

  if (testimonialData.length === 0) {
    return (
      <div className="font-bold text-3xl text-red-500 capitalize min-h-50 flex items-center justify-center">
        No data points in the response
      </div>
    );
  }

  if (!testimonialData) {
    return (
      <div className="font-bold text-3xl text-red-500 capitalize min-h-[50vh] flex items-center justify-center">
        Data did not come
      </div>
    );
  }
  return (
    <section className="text-brainyWaveBlack lg:mt-26 mt-12">
      <div className="px-4 md:px-10 lg:px-0 mb-5 ">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-[36px] font-bold leading-6 mb-4 text-center">
            What people say about us
          </h2>
          <p className="font-light text-[19px] lg:w-[40%] w-[100%] text-center">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-[60%] w-[100%] mx-auto lg:mt-14 mt-10 gap-10">
          {testimonialData.map(({ id, userImg, quote, userName, userJD }) => (
            <div
              key={id}
              className="border-[#E7E9ED] border-[1px] border-solid p-10"
            >
              <img src={userImg} alt={userName} />
              <p className="my-7">{quote}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold">{userName}</span>
                <span>{userJD}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brainyGreen lg:h-[170px] min-h-[20vh] flex lg:flex-row flex-col items-center justify-center text-white lg:mt-26 gap-10">
        <h4 className="font-bold text-[32px] leading-[44px]">
          Ready to get started?
        </h4>
        <button className="font-bold text-[17px] leading-[32px] bg-white lg:w-[200px] w-[80%] text-brainyWaveBlack">
          Get A Free Quote
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
