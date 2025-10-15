import Montanha from "../../assets/foto.webp";
import Maquina from "../../assets/maquina.webp";
import Piercing from "../../assets/piercing.webp";
import { Container } from "./Style";

export const Hero = () => {
  return (
    <Container>
      <div className="sombra"></div>
      <div className="container-foto">
        <img className="montanha" src={Montanha} alt="foto" />
        <img
          className="maquina"
          style={{ width: 100, height: "auto" }}
          src={Maquina}
          alt="foto"
        />
        <img
          className="piercing"
          style={{ width: 100, height: "auto" }}
          src={Piercing}
          alt="foto"
        />
      </div>
    </Container>
  );
};
