import React from "react";
import { Carousel } from "react-responsive-carousel";

import WineBoxOpened from "../../../images/wine-box-opened.png";
import WineBoxClosed from "../../../images/wine-box-closed.png";
import RappiImage from "../../../images/rappi.png";
import IFoodImage from "../../../images/ifood.png";
import IguatemiImage from "../../../images/iguatemi.png";
import WesselImage from "../../../images/wessel.png";

import {
  Container,
  CarouselItemWrapper,
  WineBoxImage,
  Title,
  SubTitle,
  Description,
  WhereToBuyWrapper,
} from "./styles";
import { WhereToBuy } from "../../../components/WhereToBuy";
import ContentContainer from "../../../components/ContentContainer";

const placesToBuy = [
  {
    placeName: "rappi",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
    image: RappiImage,
  },
  {
    placeName: "ifood",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
    image: IFoodImage,
  },
  {
    placeName: "iguatemi",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
    image: IguatemiImage,
  },
  {
    placeName: "wessel",
    price: 319,
    available: true,
    shopLink: "http://www.google.com",
    image: WesselImage,
  },
];

const WineBoxCarousel: React.FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Carousel
          showArrows={false}
          showIndicators={false}
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
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

        <WhereToBuyWrapper>
          {placesToBuy.map((place) => (
            <WhereToBuy key={place.placeName} placeData={place} />
          ))}
        </WhereToBuyWrapper>
      </ContentContainer>
    </Container>
  );
};

export { WineBoxCarousel };
