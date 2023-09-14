
const Portfolio = () => {
  return (
    <section className="min-h-screen bg-[#343a40]">
      <div className="flex flex-col justify-center items-center select-none container">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#3e444a] uppercase font-bold py-12 relative">
          Portfolio
        </h1>

        <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
          My Work
        </h1>
      </div>

      <div className="flex justify-center items-center gap-8">

        <div className="card bg-[url(./CineTrail_Img.png)]">
          <div className="card__body">
            <h2 className="card__title">CineTrail</h2>
            <p>A psuedo IMDB-site utilizing TMDB API</p>
          </div>
        </div>

        <div className="card bg-[url(./Bocca_Img.png)]">
          <div className="card__body">
            <h2 className="card__title">Bocca Bocca Pizza</h2>
            <p>Real-life small business site</p>
          </div>
        </div>

        <div className="card bg-[url(./Shoe_Store.png)]">
          <div className="card__body">
            <h2 className="card__title">Static Shoe Store</h2>
            <p>My first venture into TailWindCSS with some training wheels attached.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
