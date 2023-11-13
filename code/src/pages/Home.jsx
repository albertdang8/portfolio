import Contact from "../sections/Contact"
import Hero from "../sections/Hero"
import Portfolio from "../sections/Portfolio"
import Qualifications from "../sections/Qualifications"
import Resume from "../sections/Resume"
import Summary from "../sections/Summary"

const Home = () => {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Summary />
      <Qualifications />
      <Resume />
      <Contact />
      {/* <TechStack /> */}
    </div>
  )
}

export default Home