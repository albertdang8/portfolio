import { FaChevronDown } from "react-icons/fa6";
import TechStack from "./TechStack";

const Summary = () => {
  return (
    <section
      id="summary"
      className="text flex flex-col min-h-screen bg-[#212529] text-white"
    >
      <div className="flex flex-col justify-center items-center select-none">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#282d31] uppercase font-bold py-12 relative">
          About Me
        </h1>

        <h1 className="text-white absolute text-xl md:text-[calc(1rem+2.4vw)] font-bold">
          Know Me More
        </h1>
      </div>

      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col flex-2">
          <h2 className="text-white text-center font-semibold text-[calc(1rem+2.4vw)]">
            {`I'm `}
            <span className="text-[#00DF9A] lowercase">Albert Dang</span>, a Web
            Developer
          </h2>

          <div
            className="h-64 w-64 rounded-full mx-auto mt-4 shadow-lg shadow-[#00df981e]"
            style={{
              backgroundImage: `url('/saintme.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {" "}
          </div>

          <TechStack />

          <div className="md:text-[calc(1rem+1vw)] text-white/50 container text-center my-8 px-6">
            <p className="mb-8 text-center max-w-[1000px] mx-auto">
              By choosing to work with me, {`you're`} not just hiring a web
              developer; {`you're`} incorporating an adaptable learner who is
              constantly driven to{" "}
              <span className="underline italic">actualize potentiality</span>.
              I bring not only the technical expertise to create functional
              websites, but also the ability to transform ideas and visions into
              tangible digital realities.{" "}
              <a className="under__line">
                My passion for knowledge and unwavering commitment
              </a>{" "}
              to personal and professional growth ensure that {`I'm`} not merely
              building websites; {`I'm`} actively cultivating our success
              through and in every project. Plus {`I'm`} really funny and quirky
              once hired.
            </p>
            <p className="max-w-[1000px]">
              When {`I'm`} not coding, {`you'll`} often find me cycling,
              bowling, playing chess, or building model kits.
            </p>
          </div>
        </div>

        <div className="text-xl p-12 flex-1 w-full mb-[100px]">
          <ul className="flex flex-col gap-4">
            <li className="border-b pb-4">
              <strong>Name:</strong>
              {` albert dang`}
            </li>
            <li className="border-b pb-4">
              <strong>Email</strong>:{" "}
              <a
                href="mailto: albertdang8@gmail.com"
                className="text-[#00DF9A]"
              >
                albertdang8@gmail.com
              </a>
            </li>
            <li className="border-b pb-4">
              <strong>Age:</strong>
              {` 32`}
            </li>
            <li className="flex">
              <strong>From:</strong>
              <div className="hover:animate-bounce duration-1000 pl-2 mr-[-3px]">
                🍊
              </div>
              range County, California
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#services"
        className="cursor-pointer animate-bounce w-full flex justify-center items-center text-white mt-24 pb-8"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Summary;
