import React from "react";

const Summary = () => {
  return (
    <section
      id="summary"
      className="flex flex-col h-screen bg-[#212529] text-white"
    >
      <div className="relative">
        <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#282d31] uppercase font-bold py-12">
          About Me
        </h1>
        <div className="absolute left-1/2 top-[120px] transform -translate-x-1/2 text-[calc(1rem+2.4vw)] font-bold">
          Know Me More
        </div>
      </div>

      <div className="container">
        <h2 className="text-white text-center font-semibold text-[calc(1rem+2.4vw)]">
          {`I'm `}<span className="text-[#00DF9A] lowercase">Albert Dang</span>, a
          Web Developer
        </h2>
        <div className="text-[calc(1rem+1vw)] text-white/50 container text-center my-8 px-6">
          <p className="mb-8">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p>
            {`Delivering work within time and budget which meets client's
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.`}
          </p>


        </div>
      </div>
    </section>
  );
};

export default Summary;
