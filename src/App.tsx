import { About } from "./components/About";
import { Classes } from "./components/Classes";
import Footer from "./components/Footer";
import { Gallery } from "./components/Gallery";
import Header from "./components/Header";
import { Intro } from "./components/Intro";
import { Team } from "./components/Team";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About id="about" />
      <Classes id="classes" />
      <Team id="team" />
      <Gallery id="gallery" />
      <Footer id="contact" />
    </>
  );
}

export default App;
