import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["n adaptable", "&nbsp;dedicated", "&nbsp;motivated", "&nbsp;goal-driven", "&nbsp;thirsty"],
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
    }
  }, []);

  return (
    <section id="hero" className="text-white text" style={{
      // backgroundImage: `url('/me2.jpg')`,
      backgroundPosition: 'left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-[800px] w-full h-screen mx-auto px-4 text-center flex flex-col justify-center">
        <p className="text-[#00DF9A] font-bold p-2">Hire me pretty please</p>
        <h1 className="md:text-xl sm:text-6xl text-xl font-bold md:py-6 capitalize text-[#dfa700]">
          Site is currently under, over, and thru construction. Feel free to browse.
        </h1>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 capitalize">
          Develop my career
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            I am a<span ref={el} /> professional
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Hi, I finished my bootcamp not long ago. Hire me so that {`I'm`} not a
          statistic. Be ahead of the curve.
        </p>
        <button className="border-solid border-2 border-[#00DF9A] text-[#00DF9A] hover:bg-[#00DF9A] hover:text-white transition-all ease-in duration-150 w-[200px] rounded-md my-6 mx-auto py-3 font-semibold">
          Hire Me
        </button>

      </div>
        <a href="#portfolio" className="cursor-pointer animate-bounce w-full flex justify-center items-center pb-8">
            <FaChevronDown size={24}/>
        </a>
    </section>
  );
};

export default Hero;
