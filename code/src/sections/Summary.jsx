const Summary = () => {
  return (
    <section
      id="summary"
      className="flex flex-col min-h-screen bg-[#212529] text-white"
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
          <div className="md:text-[calc(1rem+1vw)] text-white/50 container text-center my-8 px-6">
            <p className="mb-8">
              I help you build brand for your business at an affordable price.
              Thousands of clients{" "}
              <a className="under__line">
                have procured exceptional results while working
              </a>{" "}
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
    </section>
  );
};

export default Summary;
