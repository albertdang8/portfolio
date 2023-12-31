import { FaChevronDown } from "react-icons/fa6";

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-[#212529] text">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#282d31] uppercase font-bold py-12 relative">
          Summary
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          Resume
        </h1>
      </div>
      <div className="container">
        <div className="flex gap-12 max-md:flex-col max-w-[1000px] mx-auto">
          <div className="flex flex-col l w-1/2 max-md:w-full">
            <h4 className="text-white text-2xl font-semibold mb-6">
              My Education
            </h4>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6 shadow-lg shadow-[#00df981e]">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2022-2023
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                Cert: Web Development
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">Mimo Bootcamp</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Completed an intensive full stack web development program. Used
                Git workflow on all projects, ensuring version control and
                effecient team collaboration. Successfully completed curriculum
                coursework, which included in-depth training in React, Node,
                JavaScript, HTML, and CSS.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2018-2021
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                BA-Philosophy
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">Cal State Fullerton</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Focus on post-modern/existential philosophy and decolonial
                theory and phenomenology
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2010-2017
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                ADT-Philosophy
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">Fullerton JC</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Focus on history and foundations of contemporary philosophy.{" "}
                {`"Analytic && Continental bifurcation"`}
              </p>
            </div>
            
            
          </div>
          <div className="flex flex-col w-1/2  max-md:w-full">
            <h4 className="text-white text-2xl font-semibold mb-6">
              My Experience
            </h4>
            {/* <div className="min-h-[200px] bg-[#343a40] rounded-md p-6 mb-6 shadow-lg shadow-[#00df981e]">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2024++
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                Web/Software Developer
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">${`{YourCompany}`}</p>
              <p className="text-white font-semibold">
                Invest in a growing employee with valuable growth potential in
                himself and your company.
              </p>
            </div> */}
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6 shadow-lg shadow-[#00df981e]">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2023
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                Freelance Web Developer/Pizza Cook
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">Bocca Bocca Pizza</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Cooking pizza for a pop while starting my coding journey by
                making static pages for small businesses.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2021-2023
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                Tasting Room Lead / Bartender
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">Chapman Crafted Brewery</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Poured beer, managed private events, kept POS and website
                current while stopping frat boys with fake IDs.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="bg-[#00DF9A] px-[0.65em] py-[0.25em] text-xl font-semibold rounded-md inline mb-4">
                2014-2020
              </p>
              <h3 className="text-white text-2xl mt-4 font-semibold mb-2">
                FOH Manager
              </h3>
              <p className="text-[#00DF9A] font-extrabold text-xl mb-4">The Cellar Restaurant</p>
              <p className="text-[#888a8c] text-xl font-semibold">
                Humble beginnings as a host. Within 6 years, promoted to
                event-planner, {`Maître d'hôtel`}, runner/expo, and more...
                Personal/professional goal to harmonize BoH and FoH relations
                and improve guest-relations while staying up-to-date with
                food/wine/cocktail trends.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <a
        href="#contact"
        className="cursor-pointer animate-bounce w-full flex justify-center items-center text-white mt-24 pb-8"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Resume;
