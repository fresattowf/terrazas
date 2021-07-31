import React from "react";

import Logo from "../../images/logo.png";

import { StyledContentContainer, TerrazasImage } from "./styles";
import { WineBoxCarousel } from "./WineBoxCarousel";
import { BuyYourTerrazas } from "./BuyYourTerrazas";

const Home: React.FC = () => {
  return (
    <>
      <StyledContentContainer>
        <TerrazasImage src={Logo} alt="Terrazas by wessel" />

        <h1>O melhor presente é um brinde especial.</h1>
        <h2>Neste dia dos Pais surpreenda com Terrazas de los Andes.</h2>
      </StyledContentContainer>

      <WineBoxCarousel />

      <BuyYourTerrazas />
    </>
  );
};

export default Home;