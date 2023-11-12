import { FaChevronDown } from "react-icons/fa6";

// create cards without anchors leading to the site themselves, rather display the technologies utilized
// make project section either top banner or within the first action

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

      <div className="flex flex-wrap justify-center items-center gap-8">

        <a
          href="#hero"
          // target="_blank"
          // rel="noopener noreferrer"
          className="bg-none"
        >
          <div className="card bg-[url(./CineTrail_Img.png)]">
            <div className="card__body">
              <h2 className="card__title text-white font-semibold">CineTrail</h2>
              <p className="text-white">A psuedo IMDB-site utilizing TMDB API</p>
            </div>
          </div>
        </a>

        <a
          href="https://boccabocca.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-none"
        >
          <div className="card bg-[url(./Bocca_Img.png)]">
            <div className="card__body">
              <h2 className="card__title text-white font-semibold">Bocca Bocca Pizza</h2>
              <p className="text-white">Real-life small business site</p>
            </div>
          </div>
        </a>
        <a
          href="https://notshoestore.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-none"
        >
          <div className="card bg-[url(./Shoe_Store.png)]">
            <div className="card__body">
              <h2 className="card__title text-white font-semibold">Static Shoe Store</h2>
              <p className="text-white">
                My first venture into TailWindCSS with some training wheels
                attached.
              </p>
            </div>
          </div>
        </a>

        <a
          href="https://notxanga.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-none"
        >
          <div className="card bg-[url(./notXanga.png)]">
            <div className="card__body">
              <h2 className="card__title text-white font-semibold">not Xanga the old blog site</h2>
              <p className="text-white">
                Utilizing Firebase backend for storage and user log-in for article creation and form submission to create
                a blog site.
              </p>
            </div>
          </div>
        </a>
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

export default Portfolio;
