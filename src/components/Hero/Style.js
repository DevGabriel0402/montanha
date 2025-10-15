import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  position: relative;

  .container-foto {
    width: 100%;
    max-width: 400px;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .sombra {
    position: absolute;
    z-index: 10;
    height: 200px;
    width: 100%;
    bottom: 0;
    background: linear-gradient(to top, #000 0%, transparent 100%);
  }

  .montanha {
    position: absolute;
    width: auto;
    z-index: 5;
    height: 400px;
    overflow-x: hidden;

    @media (max-width: 768px) {
      height: 450px;
      width: auto;
    }
  }

  .maquina,
  .piercing {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .maquina {
    transform: translateY(-60px) translateX(40px);
    filter: blur(2px);
    z-index: 10;
    width: 140px !important;
  }

  .piercing {
    transform: translateY(-210px) translateX(240px);
    width: 55px !important;
    filter: blur(1px);
    z-index: 10;
  }
`;
