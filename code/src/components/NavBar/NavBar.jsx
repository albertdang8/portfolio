import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {

  return (
    <>
      <nav className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4 max-md:flex-col">
        <h1 className="w-full text-md font-bold text-[#00DF9A] max-md:text-center max-md:pt-4">
          dang.albert(dev)
        </h1>
        <ul className="flex gap-4 font-semibold">
          <li className="p-4 nav__link">
            <a href="#summary">About</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#">Services</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#">Overview</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#">Projects</a>
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default NavBar;
