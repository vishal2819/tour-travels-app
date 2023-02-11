import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
        title="About"
        btnClass="hide"
        url="/"
      />
    </>
  );
};

export default About;
