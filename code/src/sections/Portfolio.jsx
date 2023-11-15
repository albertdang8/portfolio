import { FaChevronDown } from "react-icons/fa6";

const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-[#343a40]">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#3e444a] uppercase font-bold py-12 relative">
          Portfolio
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          My Work
        </h1>
      </div>

      <div
        id="card-container"
        className="flex flex-wrap justify-center items-start gap-12"
      >
        {/* card1 */}
        {/* WHITE CARD VERSION:
         <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div
            className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
            style={{ */}
        <div className="relative flex w-80 flex-col rounded-xl bg-clip-border bg-[#212529] text-white/50 shadow-md">
          <div
            className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-[#00df981e]"
            style={{
              backgroundImage: `url('/CineTrail_Img.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="p-6">
            <h5 className="mb-2 text text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              CineTrail
            </h5>
            <p className=" text text-base font-light leading-relaxed text-inherit antialiased">
              A psuedo IMDB-site utilizing TMDB API. Restful API, HTML, CSS, JS,
              React, State Management, Mobile-responsive with dark and light
              mode. Webflow and UX forward.
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-evenly">
            <a
              href="https://github.com/albertdang8/cineTrail/tree/main/code"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Git Code
            </a>
            <a
              href="https://netflips.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Deployment
            </a>
          </div>
        </div>
        {/* card2 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-clip-border bg-[#212529] text-white/50 shadow-md">
          <div
            className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-[#00df981e]"
            style={{
              backgroundImage: `url('/fakeStore.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="p-6">
            <h5 className="mb-2  text text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              fakeStore market
            </h5>
            <p className=" text text-base font-light leading-relaxed text-inherit antialiased">
              A mock e-commerce website utilizing the fakestore API(classic).
              Includes product filtering, functioning cart and checkout screen.
              Context and state management. HTML CSS JS Axios and more.
              Functionality and structure forward.
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-evenly">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Git Code
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Deployment
            </a>
          </div>
        </div>

        {/* card3 */}

        <div className="relative flex w-80 flex-col rounded-xl bg-clip-border bg-[#212529] text-white/50 shadow-md">
          <div
            className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-[#00df981e]"
            style={{
              backgroundImage: `url('/Bocca_Img.png')`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="p-6">
            <h5 className="mb-2  text text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              BoccaBocca Pizza
            </h5>
            <p className=" text text-base font-light leading-relaxed text-inherit antialiased">
              A live small business site. Worked and revised with client for
              ideas and aesthetic. HTML, Tailwind, JS, React. Practicality
              forward.
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-evenly">
            <a
              href="https://github.com/albertdang8/boccaFinal"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Git Code
            </a>
            <a
              href="https://bocca.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Deployment
            </a>
          </div>
        </div>
        {/* card4 */}
        <div className="relative flex w-80 flex-col rounded-xl bg-clip-border bg-[#212529] text-white/50 shadow-md">
          <div
            className="relative mx-4 -mt-6 h-60 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-[#00df981e]"
            style={{
              backgroundImage: `url('/notXanga.png')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="p-6">
            <h5 className="mb-2  text text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              notXanga Blog
            </h5>
            <p className=" text text-base font-light leading-relaxed text-inherit antialiased">
              Utilizing Firebase backend for storage and user log-in for article
              creation and form submission to create a blog site. Includes
              log-in only privileges. Functionality forward.
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-evenly">
            <a
              href="https://github.com/albertdang8/blogApp/tree/main/code"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Git Code
            </a>
            <a
              href="https://notxanga.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Deployment
            </a>
          </div>
        </div>
      </div>

      <a
        href="#summary"
        className="cursor-pointer animate-bounce w-full flex justify-center items-center text-white mt-24 pb-8"
      >
        <FaChevronDown size={24} />
      </a>
    </section>
  );
};

export default Portfolio;
