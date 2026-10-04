import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Banner />
      </main>
    </>
  );
}

export default Home;