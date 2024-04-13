import { Classes } from "./components/Classes";
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
    </>
  );
}

export default App;
