import Montanha from "../../assets/foto.webp";
import { Container } from "./Style";

export const Hero = () => {
  return (
    <Container>
      <div className="sombra"></div>
      <img src={Montanha} alt="foto" />
    </Container>
  );
};
