import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="grid lg:grid-cols-5 grid-cols-1 bg-brainyWaveBlack lg:px-20 lg:py-[120px] p-5 lg:gap-x-10 gap-x-5">
      <div className="lg:w-[24%] w-[100%]">
        <Link to="/" className="font-rubik font-bold text-[28px] text-white">
          Brainwave.io
        </Link>
        <p className="text-[15px] text-white leading-[26px] lg:w-[270px] w-[100%]">
          With lots of unique blocks, you can easily build a page without
          coding. Build your next landing page.
        </p>
        <div className="flex items-center gap-5 mt-5">
          <img src="/logo-twitter.svg" alt="socials" />
          <img src="/logo-facebook.svg" alt="" />
          <img src="/logo-instagram.svg" alt="" />
          <img src="/logo-linkedin.svg" alt="" />
        </div>
      </div>
      <div className="w-[160px] hidden lg:block">
        <ul className="text-[17px] leading-10 text-white flex-row">
          <li className=" text-[15px] leading-[26px] mb-5">Company</li>
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Press</Link>
        </ul>
      </div>
      <div className="w-[160px] hidden lg:block">
        <ul className="text-[17px] leading-10 text-white flex-row">
          <li className=" text-[15px] leading-[26px] mb-5">Products</li>
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">News</Link>
          <Link to="/">Help desk</Link>
          <Link to="/">Support</Link>
        </ul>
      </div>
      <div className="w-[160px] hidden lg:block">
        <ul className="text-[17px] leading-10 text-white flex-row">
          <li className=" text-[15px] leading-[26px] mb-5">Services</li>
          <Link to="/">Digital Marketing</Link>
          <Link to="/">Content Writing</Link>
          <Link to="/">SEO For Business</Link>
          <Link to="/">UI Design</Link>
        </ul>
      </div>
      <div className="w-[160px] hidden lg:block">
        <ul className="text-[17px] leading-10 text-white flex-row">
          <li className=" text-[15px] leading-[26px] mb-5">Legal</li>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy Policy</Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
