import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-slate-700	 h-20 px-10 rounded-full items-center font-bold mt-14 max-w-[1440px] fixed z-[2]	w-full">
      <div className="logo text-white cursor-pointer">PORTFOLIO</div>
      <div className="links">
        <span className="text-white mx-10 cursor-pointer">
          <a href="#about">ABOUT</a>
        </span>
        <span className="text-white mx-10 cursor-pointer">
          <a href="#about">PROJECTS</a>
        </span>
        <span className="text-white mx-10 cursor-pointer">
          <a href="#about">SKILLS</a>
        </span>
        <span className="text-white mx-10 cursor-pointer">
          <a href="#about">CONTACT</a>
        </span>
        <span className="py-5 px-6 text-white cursor-pointer">DOWNLOAD CV</span>
      </div>
    </div>
  );
};

export default Navbar;
