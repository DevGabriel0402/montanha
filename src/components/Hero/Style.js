import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow-x: hidden;

  img {
    width: 100vw;
    height: auto;
    overflow-x: hidden;

    @media (max-width: 768px) {
      height: 350px;
      width: auto;
    }
  }
`;
