import { useState, useEffect } from "react";
import Maquina from "../../assets/maquina.webp";
import Piercing from "../../assets/piercing.webp";
import { Container } from "./Style";

export const Hero = () => {
  const [tamanho, setTamanho] = useState({ largura: window.innerWidth });

  useEffect(() => {
    const handleResize = (e) => {
      setTamanho({ largura: e.target.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <div className="sombra"></div>
      <div className="container-foto">
        <img
          className="montanha"
          src={
            tamanho.largura > 468
              ? "https://res.cloudinary.com/dsqtianpj/image/upload/v1760549114/Montanha-BG_11zon_b06b4l.jpg"
              : "https://res.cloudinary.com/dsqtianpj/image/upload/v1760548632/Montanha-Mobile_11zon_1_mi61ll.jpg"
          }
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
