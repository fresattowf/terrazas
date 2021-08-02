import React from "react";

import WineBoxOpened from "../../../images/wine-box-opened.png";
import WineBoxClosed from "../../../images/wine-box-closed.png";
import RappiImage from "../../../images/rappi.png";
import IFoodImage from "../../../images/ifood.png";
import IguatemiImage from "../../../images/iguatemi.png";
import WesselImage from "../../../images/wessel.png";

import {
  Container,
  StyledContentContainer,
  MobileCarousel,
  DesktopCarousel,
  CarouselItemWrapper,
  WineBoxImage,
  Title,
  SubTitle,
  Description,
  WhereToBuyWrapper,
} from "./styles";
import { WhereToBuy } from "../../../components/WhereToBuy";

const placesToBuy = [
  {
    placeName: "rappi",
    price: 319,
    available: true,
    shopLink: "https://rappi.app.link/QatSH2rWoib",
    image: RappiImage,
  },
  {
    placeName: "ifood",
    price: 319,
    available: true,
    shopLink:
      "https://www.ifood.com.br/delivery/sao-paulo-sp/chandon---loja-oficial-vila-madalena/d7b0386d-b6d2-4b27-b5b2-29da90ff2aea?item=9fdd53da-7ca9-4a81-aaa8-4b50879e46e4",
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
    shopLink:
      "https://wessel.com.br/collections/churrasco/products/kit-experiencia-terrazas-de-los-andes-wessel",
    image: WesselImage,
  },
];

const WineBoxCarousel: React.FC = () => {
  return (
    <Container>
      <StyledContentContainer>
        <MobileCarousel
          showArrows={false}
          showIndicators={false}
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
          interval={1000000000}
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
        </MobileCarousel>

        <DesktopCarousel
          showArrows={false}
          showIndicators={false}
          autoPlay={false}
          showStatus={false}
          interval={1000000000}
        >
          <img
            src={WineBoxOpened}
            alt="Wine Box opened"
            className="wine-box-opened"
          />
          <img
            src={WineBoxClosed}
            alt="Wine Box closed"
            className="wine-box-closed"
          />
        </DesktopCarousel>

        <div className="experience-by-wessel-texts">
          <Title>Kit Experiência Terrazas + Wessel</Title>

          <SubTitle>Procure em nossos parceiros</SubTitle>

          <Description>
            Kit Experiência Terrazas de los Andes + Wessel para o Dia dos Pais
            contendo 1 garrafa de Terrazas Reserva Cabernet Sauvignon 750 ml, 1
            Saca-Rolhas Terrazas, 1 Avental para Churrasco e Mini-garras
            aperitivo Terrazas by Wessel.
          </Description>

          <WhereToBuyWrapper>
            {placesToBuy.map((place) => (
              <WhereToBuy key={place.placeName} placeData={place} />
            ))}
          </WhereToBuyWrapper>
        </div>
      </StyledContentContainer>
    </Container>
  );
};

export { WineBoxCarousel };
