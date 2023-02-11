import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
        title="Contact"
        btnClass="hide"
        url="/"
      />
    </>
  );
};

export default Contact;
