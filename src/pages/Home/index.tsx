import React from "react";

import { Footer } from "../../components/Footer";

import { WineBoxCarousel } from "./WineBoxCarousel";
import { BuyYourTerrazas } from "./BuyYourTerrazas";
import { VideoSection } from "./VideoSection";
import { WinesCarouselSection } from "./WinesCarouselSection";

import Logo from "../../images/logo.png";

import {
  Container,
  StyledContentContainer,
  TerrazasImage,
  StripeBG,
} from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <StyledContentContainer>
        <TerrazasImage src={Logo} alt="Terrazas by wessel" />

        <h1>O melhor presente é um brinde especial.</h1>
        <h2>Neste dia dos Pais surpreenda com Terrazas de los Andes.</h2>
      </StyledContentContainer>

      <WineBoxCarousel />

      <BuyYourTerrazas />

      <StripeBG>
        <VideoSection />
        <WinesCarouselSection />
      </StripeBG>

      <Footer />
    </Container>
  );
};

export default Home;
