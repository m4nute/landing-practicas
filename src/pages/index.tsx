import { type NextPage } from "next";
import Footer from "~/components/Footer";
import Intro from "~/components/Intro";
import Navbar from "~/components/Navbar";
import About from "~/components/About";
import Empresas from "~/components/Empresas";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Empresas />
      <Footer />
    </>
  );
};

export default Home;
