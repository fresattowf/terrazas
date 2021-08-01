import React from "react";
import { shops } from "./carouselData";
import { Container, MobileCarousel, StyledShopCard, Footer } from "./styles";

import Slider from "react-slick";
import ContentContainer from "../../../components/ContentContainer";

const BuyYourTerrazas: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

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

      <ContentContainer>
        <Slider {...settings}>
          {shops.map((shop) => (
            <div>
              <StyledShopCard key={shop.name} data={shop} />
            </div>
          ))}
        </Slider>
      </ContentContainer>

      <Footer>
        Powered by
        <div />
        Intellibrand
      </Footer>
    </Container>
  );
};

export { BuyYourTerrazas };
