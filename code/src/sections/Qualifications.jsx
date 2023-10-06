const Qualifications = () => {
  return (
    <section className="min-h-screen bg-[#343a40] pb-16">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#3e444a] uppercase font-bold py-12 relative">
          Services
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          What I Bring
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-white container">
        <div className="flex max-md:flex-col justify-center items-center gap-6">
          <div className="max-w-md">
            <h3 className="font-semibold p-2 text-[1.3125rem] capitalize text-center">
              Continuous Learning
            </h3>
            <p className="text-center font-semibold text-[rgba(255,255,255,0.5)]">
              I am dedicated to staying updated with the latest front-end
              development technologies and best practices, ensuring that I can
              deliver high-quality solutions for your digital projects.
            </p>
          </div>
          <div className="max-w-md">
            <h3 className="font-semibold p-2 text-[1.3125rem] capitalize text-center">
              Passion for Front-End Development
            </h3>
            <p className="text-center font-semibold text-[rgba(255,255,255,0.5)]">
              Front-end web development is not just my profession; {`it's`} my
              passion. I excel in creating user-centric web interfaces that
              captivate and engage users. {`Let's`} collaborate to bring your
              digital vision to life.
            </p>
          </div>
        </div>

        <div className="flex max-md:flex-col max-md:pt-12 justify-center items-center gap-6">
          <div className="max-w-md">
            <h3 className="font-semibold p-4 text-[1.3125rem] capitalize text-center">
              Key Skills
            </h3>
            <ul className="font-semibold text-[rgba(255,255,255,0.5)] list-disc flex flex-col gap-4">
              <li>
                Front-End Development: Proficient in HTML, CSS, and JavaScript
                to create visually captivating user interfaces.
              </li>
              <li>
                Frameworks and Libraries: Skilled in using various front-end
                frameworks and libraries to enhance web applications, including
                React, Angular, and others.
              </li>
              <li>
                UI/UX Design: Committed to following design principles to create
                intuitive and visually engaging web layouts.
              </li>
              <li>
                Problem Solving: Thrive on solving complex challenges and
                finding creative solutions within the front-end development
                space.
              </li>
            </ul>
          </div>

          <div className="max-w-md">
            <h3 className="font-semibold p-4 text-[1.3125rem] capitalize text-center">
              The <span className="text-[#00DF9A]">intangibles</span>
            </h3>
            <p className="font-semibold text-[rgba(255,255,255,0.5)]">
              By choosing to work with me, {`you're`} not just hiring a web
              developer; {`you're`} gaining a developer who is constantly driven
              to actualize potentiality. I bring not only the technical
              expertise to create functional websites but also the ability to
              transform ideas and visions into tangible digital realities. My
              passion for knowledge and unwavering commitment to personal and
              professional growth ensure that {`I'm`} not merely building
              websites; {`I'm`} actively cultivating our success through and in
              every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
