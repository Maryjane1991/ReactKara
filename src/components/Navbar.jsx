import React from "react";
import { Link } from "react-router-dom";
import Button from "./mini-components/Button";
import { IoReorderThreeOutline } from "react-icons/i05";

const Navbar = () => {
  return (
    <nav className="h-max px-12 py-5 flex items-center justify-between bg-white/10 fixed top-0 left-0 w-full">
      <div className="font-rubik font-bold text-[28px]">
        <Link to="/">Brainwave.io</Link>
      </div>
      <div className="flex items-center justify-between gap-10">
        <ul className="text-[15px] font-bold space-x-11">
          <Link to="/">Demos</Link>
          <Link to="/second_page">Pages</Link>
          <Link to="/">Support</Link>
          <Link to="/">contact</Link>
        </ul>
        <div>
          <Button btnText="Get A Free Quote" className="w-[168px] h-[45px] " />
        </div>
      </div>
      <span className="lg:hidden font-rubik font-bold text-[28px]">
        <IoReorderThreeOutline />
      </span>
    </nav>
  );
};

export default Navbar;
