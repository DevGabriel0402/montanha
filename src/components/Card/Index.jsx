import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Card = ({ produto, titulo }) => {
  return (
    <Container>
      <h2>{titulo}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        loop={true}
        pagination={{ enabled: true, dynamicBullets: true }}
        navigation={true}
        breakpoints={{
          500: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {produto.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.urlImage} alt={`Tattoo ${item.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button>Agendar um horário</button>
    </Container>
  );
};

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  border-radius: 24px;
  display: flex;
  gap: 12px;
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
  }
`;
