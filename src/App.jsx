import { Card } from "./components/Card/Index";
import { Hero } from "./components/Hero/Index";
import { Tattoo } from "./assets/arquivos";

function App() {
  return (
    <>
      <Hero />
      <Card produto={Tattoo} titulo="Tatuagens" />
    </>
  );
}

export default App;
