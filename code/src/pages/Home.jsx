import Hero from "../sections/Hero"
import Qualifications from "../sections/Qualifications"
import Resume from "../sections/Resume"
import Summary from "../sections/Summary"
import TechStack from "../sections/TechStack"

const Home = () => {
  return (
    <div>
      <Hero />
      <Summary />
      <Qualifications />
      <Resume />
      {/* <TechStack /> */}
    </div>
  )
}

export default Home