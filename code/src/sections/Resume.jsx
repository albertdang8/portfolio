
const Resume = () => {
  return (
    <section className="min-h-screen bg-[#212529] pb-12">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#282d31] uppercase font-bold py-12 relative">
          Summary
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          Resume
        </h1>
      </div>
      <div className="container">
        <div className="flex gap-12 max-md:flex-col">
          <div className="flex flex-col w-1/2 max-md:w-full">
            <h4 className="text-white text-2xl font-semibold mb-6">
              My Education
            </h4>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2006-2010
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Diploma
              </h3>
              <p className="text-[#00DF9A] mb-4">Brea Olinda HS</p>
              <p className="text-[#888a8c] font-semibold">
                It is high school.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2010-2017
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                ADT-Philosophy
              </h3>
              <p className="text-[#00DF9A] mb-4">Fullerton JC</p>
              <p className="text-[#888a8c] font-semibold">
                Focus on history and foundations of contemporary philosophy.{" "}
                {`"Analytic && Continental bifurcation"`}
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2018-2021
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                BA-Philosophy
              </h3>
              <p className="text-[#00DF9A] mb-4">Cal State Fullerton</p>
              <p className="text-[#888a8c] font-semibold">
                Focus on post-modern/existential philosophy and decolonial
                theory and phenomenology
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2022-2023
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Cert: Web Development
              </h3>
              <p className="text-[#00DF9A] mb-4">Mimo Bootcamp</p>
              <p className="text-[#888a8c] font-semibold">
                Completed an intensive full stack web development program. Used Git workflow on all projects, ensuring version control and effecient team collaboration. Successfully completed curriculum coursework, which included in-depth training in React, Node, JavaScript, HTML, and CSS. 
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/2  max-md:w-full">
            <h4 className="text-white text-2xl font-semibold mb-6">
              My Experience
            </h4>
            {/* <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2010-2014??
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Barista
              </h3>
              <p className="text-[#00DF9A] mb-4">The Night Owl</p>
              <p className="text-[#888a8c] font-semibold">
                Closing manager in a late-night coffee shop in the middle of a downtown college and bar area. I have stories if you interview me.
              </p>
            </div> */}
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2014-2020
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                FOH Manager
              </h3>
              <p className="text-[#00DF9A] mb-4">The Cellar Restaurant</p>
              <p className="text-[#888a8c] font-semibold">
                Humble beginnings as a host. Within 6 years, promoted to event-planner, {`Maître d'hôtel`}, runner/expo, and more... Personal/professional goal to harmonize BoH and FoH relations and improve guest-relations while staying up-to-date with food/wine/cocktail trends.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2021-2023
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Tasting Room Lead / Bartender
              </h3>
              <p className="text-[#00DF9A] mb-4">Chapman Crafted Brewery</p>
              <p className="text-[#888a8c] font-semibold">
               Poured beer, managed private events, kept POS and website current while stopping frat boys with fake IDs. 
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2023
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Pizza Cook/Freelance Web Developer
              </h3>
              <p className="text-[#00DF9A] mb-4">Bocca Bocca Pizza</p>
              <p className="text-[#888a8c] font-semibold">
                Cooking pizza for a pop while starting my coding journey by making static pages for small businesses.
              </p>
            </div>
            <div className="min-h-[200px] bg-[#111418] rounded-md p-6 mb-6">
              <p className="text-white bg-[#00DF9A] px-[0.65em] py-[0.25em] text-[.875rem] font-semibold rounded-md inline mb-4">
                2024++
              </p>
              <h3 className="text-white text-[1.3125rem] mt-4 font-semibold mb-2">
                Web/Software Developer
              </h3>
              <p className="text-[#00DF9A] mb-4">${`{YourCompany}`}</p>
              <p className="text-[#888a8c] font-semibold">
                Invest in a growing employee with valuable growth potential in himself and your company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
