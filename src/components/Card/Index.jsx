import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Formulario from "../Formulario/Index";

export const Card = ({ produto, titulo }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <Container>
      <h2>{titulo}</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        loop={true}
        pagination={{ enabled: true, dynamicBullets: true }}
        breakpoints={{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {produto.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.urlImage} alt={`Tattoo ${item.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={() => setShowForm(true)}>Agendar um horário</button>
      {showForm && (
        <Modal>
          <div className="modal-content">
            <button
              className="btn-fechar"
              aria-label="Fechar"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <Formulario />
          </div>
        </Modal>
      )}
    </Container>
  );
};

import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(2px);

  .modal-content {
    position: relative;
    background: #18181b;
    border-radius: 20px;
    padding: 24px;
    min-width: 320px;
    max-width: 100vw;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
  }

  .btn-fechar {
    position: absolute;
    top: -5px;
    right: 10px;
    background: #ffffff;
    color: #0b0b0b;
    border: none;
    text-align: center;
    align-content: center;
    width: 32px;
    height: 32px;
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  .btn-fechar:hover {
    background: #fff;
    color: #ff0055;
    border: 2px solid #ff0055;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: 24px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h2 {
    text-align: start;
    margin-left: 32px;
    color: #fafafa;
    margin-bottom: 24px;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  }

  .swiper {
    width: 100%;
    max-width: 1000px;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
  }

  .swiper-slide img {
    width: 100%;
    max-width: 300px;
    border-radius: 18px;
    aspect-ratio: 1/1;
    object-fit: cover;
    background: #222;
    margin: 0 auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

    &::selection {
      background-color: transparent;
    }

    @media (max-width: 478px) {
      max-width: 275px;
    }
  }

  .swiper-pagination {
    bottom: 10px !important;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #ffffff;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }

  button {
    width: 200px;
    height: 40px;
    margin-top: 20px;
    text-transform: uppercase;
    cursor: pointer;
    background: #fafafa;
    border: none;
    color: #0b0b0b;
    border-radius: 8px;
    padding: 8px 16px;
    margin-bottom: 20px;
  }
`;
