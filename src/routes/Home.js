import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cNmae="hero"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        btnClass="show"
        url="/"
        btnText="Travel Plan"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
