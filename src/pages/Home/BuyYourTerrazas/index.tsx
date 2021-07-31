import React from "react";
import { Carousel } from "react-responsive-carousel";

import { Container, StyledShopCard, Footer } from "./styles";

const BuyYourTerrazas: React.FC = () => {
  return (
    <Container>
      <h1>
        Compre seu Terrazas Reserva com um preço especial nas lojas abaixo.
      </h1>

      <Carousel
        showArrows={false}
        autoPlay={true}
        showStatus={false}
        interval={5000000}
      >
        <StyledShopCard />
        <StyledShopCard />
        <StyledShopCard />
      </Carousel>

      <Footer>
        Powered by
        <div />
        Intellibrand
      </Footer>
    </Container>
  );
};

export { BuyYourTerrazas };
