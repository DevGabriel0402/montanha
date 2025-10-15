import Maquina from "../../assets/maquina.webp";
import Piercing from "../../assets/piercing.webp";
import { Container } from "./Style";

export const Hero = () => {
  return (
    <Container>
      <div className="sombra"></div>
      <div className="container-foto">
        <img
          className="montanha"
          src="https://res.cloudinary.com/dsqtianpj/image/upload/v1760548632/Montanha-Mobile_11zon_1_mi61ll.jpg"
          alt="foto"
        />
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
