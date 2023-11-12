import { FaChevronDown } from "react-icons/fa6";

const Qualifications = () => {
  return (
    <section id="services" className="min-h-screen bg-[#343a40] text">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#3e444a] uppercase font-bold py-12 relative">
          Services
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          What I Bring
        </h1>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-white container md:text-[calc(1rem+.75vw)] px-12">
        <div className="max-w-6xl">
          <h3 className="text-2xl py-4 md:text-[calc(1rem+1vw)] capitalize text-center">
            Continuous Learning
          </h3>
          <p className="text-center text-lg text-[rgba(255,255,255,0.5)]">
            I am dedicated to staying updated with the latest front-end
            development technologies and best practices, ensuring that I can
            deliver high-quality solutions for your digital projects.
          </p>
        </div>
        <div className="max-w-6xl">
          <h3 className="text-2xl py-4 md:text-[calc(1rem+1vw)] capitalize text-center">
            Passion for Front-End Development
          </h3>
          <p className="text-center text-lg text-[rgba(255,255,255,0.5)]">
            Front-end web development is not just my profession; {`it's`} my
            passion. I excel in creating user-centric web interfaces that
            captivate and engage users. {`Let's`} collaborate to bring your
            digital vision to life.
          </p>
        </div>

        <div className="max-w-6xl flex flex-col justify-center items-center pl-5">
          <h3 className="text-2xl py-4 md:text-[calc(1rem+1vw)] capitalize text-center">
            Key Skills
          </h3>
          <ul className="text-lg text-[rgba(255,255,255,0.5)] list-disc flex flex-col gap-4">
            <li>
              <span className="text-[#00DF9A]">
                {`Front-End Development: `}
              </span>
              Proficient in HTML, CSS, and JavaScript to create visually
              captivating user interfaces.
            </li>
            <li>
              <span className="text-[#00DF9A]">
                {`Frameworks and Libraries: `}
              </span>
              Skilled in using various frameworks and libraries to enhance web
              applications, including React, Next, and others.
            </li>
            <li>
              <span className="text-[#00DF9A]">{`UI/UX Design: `}</span>
              Committed to following design principles to create intuitive and
              visually engaging web layouts.
            </li>
            <li>
              <span className="text-[#00DF9A]">{"Problem Solving: "}</span>
              Thrive on solving complex challenges and finding creative
              solutions within the front-end development space.
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#resume"
        className="cursor-pointer animate-bounce w-full flex justify-center items-center text-white mt-24 pb-8"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Qualifications;
