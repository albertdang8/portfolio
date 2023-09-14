import Typed from "react-typed";
import { Link as ScrollLink } from "react-scroll";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="text-white relative">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00DF9A] font-bold p-2">Hire me pretty please</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 capitalize">
          Develope my career
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            {`I'm a(n) `}
            <Typed
              className="text-[#00DF9A]"
              strings={[
                "breedable",
                "oriental",
                "submissive",
                "ching-chong",
                "simp",
              ]}
              typeSpeed={100}
              backSpeed={140}
              loop
            />
            {` e-boy`}
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400">
          Hi, I finished my bootcamp not long ago. Hire me so that {`I'm`} not a
          statistic. Be ahead of the curve.
        </p>
        <button className="border-solid border-2 border-[#00DF9A] text-[#00DF9A] hover:bg-[#00DF9A] hover:text-white transition-all ease-in duration-150 w-[200px] rounded-md my-6 mx-auto py-3 font-semibold">
          Hire Me
        </button>

        <div className="absolute bottom-[50px] left-[49.259%] transform -translate-x-1/2 cursor-pointer animate-bounce">
          <ScrollLink to="summary" smooth={true} duration={500}>
            <FaChevronDown size={24} />
          </ScrollLink>
        {/* why won't this shit center? */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
