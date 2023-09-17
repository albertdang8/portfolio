import { FaPhone } from "react-icons/fa6";
import { AiFillMail, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi"

const Contact = () => {
  return (
    <>
      <section className="min-h-screen bg-[#212529]">
        <div className="flex flex-col justify-center items-center select-none container">
          <h1 className="text-center text-[calc(1.95rem+8.4vw)] text-[#282d31] uppercase font-bold py-12 relative">
            Contact
          </h1>

          <h1 className="text-white absolute text-[calc(1rem+2.4vw)] font-bold ">
            Get in touch
          </h1>
        </div>
        <div className="container flex">
          {/* left contact */}
          <div className="text-[#dee3e4]">
            <h5 className="mb-3 text-lg font-semibold text-white uppercase">Address</h5>
            <address className="mb-4 leading-8">
              649 W Wilshire Ave <br />
              Fullerton CA 92832
            </address>
            <p className="mb-2"><FaPhone className="inline text-[#00df9a] mr-4"/>(714) 423 6830</p>
            <p className="mb-6"><AiFillMail className="inline text-[#00df9a] mr-4"/>albertdang8@gmail.com</p>
            <div>
            <h5 className="mb-3 text-lg font-semibold text-white uppercase">follow me</h5>
              <ul className="flex gap-4 text-gray-400">
                <li><a href=""><BiLogoFacebook size={20} /></a></li>
                <li><a href=""><AiFillInstagram size={20} /></a></li>
                <li><a href=""><BiLogoLinkedin size={20} /></a></li>
                <li><a href=""><AiFillGithub size={20} /></a></li>
              </ul>
              {/* https://www.facebook.com/albert.dang.7/ */}
            </div>
          </div>

          {/* right contact */}
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Contact;
