import React from "react";

import { Footer } from "../../components/Footer";

import { WineBoxCarousel } from "./WineBoxCarousel";
import { Kits } from "./Kits";
import { BuyYourTerrazas } from "./BuyYourTerrazas";
import { VideoSection } from "./VideoSection";
import { WinesCarouselSection } from "./WinesCarouselSection";
import { SignUpModal } from "./SignUpModal";

import Logo from "../../images/logo.png";

import {
  Container,
  Header,
  StyledContentContainer,
  TerrazasImage,
  StripeBG,
} from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <StyledContentContainer>
            <div>
              <TerrazasImage src={Logo} alt="Terrazas by wessel" />

              <h1>O melhor presente é um brinde especial.</h1>
              <h2>Neste dia dos Pais surpreenda com Terrazas de los Andes.</h2>
            </div>
          </StyledContentContainer>
        </Header>

        <WineBoxCarousel />

        <Kits />

        <BuyYourTerrazas />

        <StripeBG>
          <VideoSection />
          <WinesCarouselSection />
        </StripeBG>

        <Footer />
      </Container>

      <SignUpModal />
    </>
  );
};

export default Home;
