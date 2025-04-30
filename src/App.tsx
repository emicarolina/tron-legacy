import About from "./components/About";
import Characters from "./components/Characters";
import Curiosities from "./components/Curiosities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Legacy from "./components/Legacy";
import MusicPlayer from "./components/MusicPlayer";
import Soundtrack from "./components/Soundtrack";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Soundtrack />
      <Characters />
      <Gallery />
      <Curiosities />
      <Legacy />
      <Footer />
      <MusicPlayer />
    </div>
  );
}

export default App;
