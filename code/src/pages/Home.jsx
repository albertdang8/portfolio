import Hero from "../sections/Hero"
import Qualifications from "../sections/Qualifications"
import Summary from "../sections/Summary"
import TechStack from "../sections/TechStack"

const Home = () => {
  return (
    <div>
      <Hero />
      <Summary />
      <Qualifications />
      {/* <TechStack /> */}
    </div>
  )
}

export default Home