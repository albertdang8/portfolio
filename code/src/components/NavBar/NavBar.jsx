
const NavBar = () => {

  return (
    <div className="w-full bg-[#4747475f] backdrop-blur-md fixed z-50">
      <nav className="flex justify-between items-center h-24 text-white max-w-[1240px] mx-auto max-md:flex-col">
        <a href="#hero" className="w-full text-md font-bold text-[#00DF9A] max-md:text-center max-md:pt-4 px-4">
          dang.albert(dev)
        </a>
        <ul className="max-md:flex-wrap max-md:justify-evenly flex gap-4 font-semibold max-sm:gap-0 max-sm:text-sm">
          <li className="p-4 nav__link">
            <a href="#portfolio">Projects</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#services">Services</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#resume">Overview</a>
          </li>
          <li className="p-4 nav__link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
      </nav>
    </div>
  );
};

export default NavBar;
