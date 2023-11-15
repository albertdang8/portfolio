import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "n adaptable",
        "&nbsp;dedicated",
        "&nbsp;motivated",
        "&nbsp;goal-driven",
        "&nbsp;worthwhile",
      ],
      startDelay: 2000,
      typeSpeed: 100,
      backDelay: 1500,
      backSpeed: 100,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="text-white text bg-fixed max-md:bg-local"
      style={{
        backgroundImage: `url('/desktop.jpg')`,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: "-1",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-10 h-full"></div>
      <div className="max-w-[800px] w-full h-screen mx-auto px-4 text-center flex flex-col justify-center relative z-20">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 capitalize">
          Deconstructing the{" "}
          <span className="text-[#00df9894] text-mono">Digital</span> Landscape
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-mono md:text-4xl sm:text-3xl text-xl font-bold py-4">
            I am a<span ref={el} />
            professional
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-[#dfa700]">
          based in California
        </p>
        <button className="border-solid border-2 border-[#00DF9A] text-[#00DF9A] hover:bg-[#00DF9A] hover:text-white transition-all ease-in duration-150 w-[200px] rounded-md my-6 mx-auto py-3 font-semibold">
          Hire Me
        </button>
      </div>
      <a
        href="#portfolio"
        className="cursor-pointer animate-bounce w-full flex justify-center items-center absolute bottom-4 z-30"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
