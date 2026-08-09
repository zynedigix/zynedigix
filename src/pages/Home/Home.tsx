import Hero from "@/scenes/Hero/Hero";
import Identity from "@/scenes/Identity/Identity";
import Services from "@/scenes/Services/Services";
import Portfolio from "@/scenes/Portfolio/Portfolio";
import Process from "@/scenes/Process/Process";
import Contact from "@/scenes/Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Identity />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
};

export default Home;