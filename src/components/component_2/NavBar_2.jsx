import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavBar2 = () => {
  return (
    <nav className="h-max px-12 py-5 text-brainyWaveBlack flex items-center justify-between bg-brainyGreen/100  fixed top-0 left-0 w-full">
      <div className="font-rubik font-bold text-[28px]">
        <Link to="/">Brainwave.io</Link>
      </div>
      <div className="hidden lg:block">
        <ul className="text-[15px] font-bold space-x-11">
          <Link to="/">Demos</Link>
          <Link to="/second_page">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">contact</Link>
        </ul>
      </div>
      <div className="text-[15px] font-bold space-x-11 hidden lg:block">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <span className="lg:hidden font-rubik font-bold text-[28px]">
        <IoReorderThreeOutline />
      </span>
    </nav>
  );
};

export default NavBar2;
