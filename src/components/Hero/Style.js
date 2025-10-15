import styled from "styled-components";
import Montanha from "../../assets/Montanha.webp";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: url(${Montanha}) center/contain no-repeat;
  overflow: hidden;
  position: relative;

  .sombra {
    position: absolute;
    z-index: 10;
    height: 200px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(to top, #000 0%, transparent 100%);
  }

  img {
    position: absolute;
    width: auto;
    z-index: 1;
    height: 350px;
    overflow-x: hidden;

    @media (max-width: 768px) {
      height: 350px;
      width: auto;
    }
  }
`;
