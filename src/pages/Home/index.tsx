import React from "react";

import Logo from "../../images/logo.png";

import { Container, TerrazasImage } from "./styles";
import { WineBoxCarousel } from "./WineBoxCarousel";

const Home: React.FC = () => {
  return (
    <Container>
      <TerrazasImage src={Logo} alt="Terrazas by wessel" />

      <h1>O melhor presente é um brinde especial.</h1>
      <h2>Neste dia dos Pais surpreenda com Terrazas de los Andes.</h2>

      <WineBoxCarousel />
    </Container>
  );
};

export default Home;
