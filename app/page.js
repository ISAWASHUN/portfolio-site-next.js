import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import TopButton from "./components/TopButton";

export default function Home() {
  return (
    <div>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    <Footer />
    <TopButton />
    </div>
  );
}
