import React from "react";
import { Carousel } from "react-responsive-carousel";

import WineBoxOpened from "../../../images/wine-box-opened.png";
import WineBoxClosed from "../../../images/wine-box-closed.png";
import {
  Container,
  CarouselItemWrapper,
  WineBoxImage,
  Title,
  SubTitle,
  Description,
} from "./styles";
import { WhereToBuy } from "../../../components/WhereToBuy";

const placesToBuy = [
  {
    placeName: "rappi",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
  },
  {
    placeName: "ifood",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
  },
  {
    placeName: "iguatemi",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
  },
  {
    placeName: "wessel",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
  },
];

const WineBoxCarousel: React.FC = () => {
  return (
    <Container>
      <Carousel
        showArrows={false}
        showIndicators={false}
        autoPlay={false}
        showStatus={false}
      >
        <CarouselItemWrapper>
          <WineBoxImage src={WineBoxOpened} alt="Wine Box opened" />
        </CarouselItemWrapper>
        <CarouselItemWrapper>
          <WineBoxImage
            src={WineBoxClosed}
            alt="Wine Box closed"
            wrongSizeImage
          />
        </CarouselItemWrapper>
      </Carousel>

      <Title>Kit Experiência Terrazas by Wessel</Title>

      <SubTitle>Procure em nossos parceiros</SubTitle>

      <Description>
        Kit Experiência Terrazas de los Andes + Wessel para o Dia dos Pais
        contendo 1 garrafa de Terrazas Reserva Cabernet Sauvignon 750 ml, 1
        Saca-Rolhas Terrazas, 1 Avental para Churrasco e Mini-garras aperitivo
        Terrazas by Wessel.
      </Description>

      {placesToBuy.map((place) => (
        <WhereToBuy key={place.placeName} placeData={place} />
      ))}
    </Container>
  );
};

export { WineBoxCarousel };
