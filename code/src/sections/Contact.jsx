import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-[#343a40] text relative flex flex-col justify-between p-4">
      <div>
        <div className="flex flex-col justify-center items-center select-none container">
          <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#3e444a] uppercase font-bold py-12 relative">
            Contact
          </h1>

          <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
            Get in touch
          </h1>
        </div>
        <div className="container flex gap-4 justify-evenly max-md:flex-col-reverse max-md:items-center max-md:mb-16">
          {/* left contact */}
          <div className="text-[#dee3e4] flexn flex-col max-md:items-center max-md:text-center">
            <h5 className="mb-3 text-lg font-semibold text-white uppercase">
              Address
            </h5>
            <address className="mb-4 leading-8">
              West Wilshire Ave <br />
              Fullerton CA 92832
            </address>
            <p className="mb-2">
              <FaPhone className="inline text-[#00df9a] mr-4" />
              (714) 423 6830
            </p>
            <p className="mb-6">
              <AiFillMail className="inline text-[#00df9a] mr-4" />
              albertdang8@gmail
            </p>
            <div className="">
              <h5 className="mb-3 text-lg font-semibold text-white uppercase max-md:text-center">
                follow me
              </h5>
              <ul className="flex gap-4 text-gray-400 max-md:justify-center">
                <li>
                  <a
                    href="https://www.linkedin.com/in/dangalbert/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BiLogoLinkedin size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/albertdang8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* right contact */}
          <div className="">
            <h5 className="mb-3 text-lg font-semibold text-white uppercase">
              send me a note
            </h5>
            <form action="" className="max-w-[60ch] mb-12">
              <div className="flex gap-6 flex-wrap">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className=" w-full shadow-lg px-3 py-2 bg-[#212529] text-white rounded-md focus:border-[#80bdff] focus:shadow-black"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full shadow-lg px-3 py-2 bg-[#212529] text-white rounded-md focus:border-[#80bdff] focus:shadow-black"
                  />
                </div>

                <div className="w-full">
                  <textarea
                    type="text"
                    className="min-h-[60px] w-full shadow-lg px-3 py-2 bg-[#212529] text-white rounded-md focus:border-[#80bdff] focus:shadow-black"
                    placeholder="Say 'hi' or leave a nice message about hiring me..."
                  />
                </div>
                <button className="bg-[#20c997] shadow-lg hover:bg-[#1baa80] transition-all duration-150 font-semibold text-white py-3 px-8 rounded-full m-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p className="mx-auto text-center text-white w-[60ch]">
      I'm dedicated to ensuring a user-friendly experience for everyone. If you encounter any accessibility challenges or have suggestions for improvement, please reach out. Your feedback is crucial, and I'm actively working to enhance accessibility for all users. Encouraging third-party content providers to prioritize accessibility is also a top priority.
      </p>
    </section>
  );
};

export default Contact;
