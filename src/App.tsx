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
      <Classes />
      <Team />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
