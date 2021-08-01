import React from "react";
import { shops } from "./carouselData";
import { Container, MobileCarousel, StyledShopCard, Footer } from "./styles";
import DesktopCarousel from "./DesktopCarousel";

const BuyYourTerrazas: React.FC = () => {
  return (
    <Container>
      <h1>
        Compre seu Terrazas Reserva com um preço especial nas lojas abaixo.
      </h1>

      <MobileCarousel
        showArrows={false}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        interval={5000000}
        showThumbs={false}
      >
        {shops.map((shop) => (
          <StyledShopCard key={shop.name} data={shop} />
        ))}
      </MobileCarousel>

      <DesktopCarousel />

      <Footer>
        Powered by
        <div />
        Intellibrand
      </Footer>
    </Container>
  );
};

export { BuyYourTerrazas };
