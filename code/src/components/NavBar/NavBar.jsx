import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="z-50 flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-md font-bold text-[#00DF9A]">
          dang.albert(dev)
        </h1>
        <ul className="md:flex gap-4 hidden">
          <li>
            <Link className="p-4" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="p-4" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="p-4" to="/">
              Projects
            </Link>
          </li>
          <li>
            <Link className="p-4" to="/">
              Tech_Stack
            </Link>
          </li>
          <li>
            <Link className="p-4" to="/">
              Secret
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "z-50 fixed left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#657c69] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-md font-bold text-[#00DF9A] m-4">
            albert.dang(dev)
          </h1>

          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link to="/">Projects</Link>
            </li>
            <li className="p-4 border-b border-gray-300">
              <Link to="/">Tech_Stack</Link>
            </li>
            <li className="p-4 border-gray-300">
              <Link to="/">Secret</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
