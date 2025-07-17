import React, { useEffect, useState } from "react";

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

  if (!testimonialData || testimonialData.length === 0) {
    return (
      <div className="font-bold text-3xl text-red-500 capitalize min-h-50 flex items-center">
        No testimonials available
      </div>
    );
  }

  return (
    <section className="min-h-screen">
      <div>
        <h2 className="text-[36px] font-bold leading-6">
          What people say about us
        </h2>
        <p className="font-light text-[19px]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {testimonialData.map(({ id, userImg, quote, userName, userJD }) => (
          <div key={id} className="p-4 border rounded">
            <img src={userImg} alt={userName} className="mb-2" />
            <p className="mb-2">{quote}</p>
            <div>
              <span className="font-semibold">{userName}</span>
              <span className="block text-sm text-gray-500">{userJD}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


