import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero-mid"
        heroImg="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
        title="Service"
        btnClass="hide"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Service;
