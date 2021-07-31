import React from "react";
import { Carousel } from "react-responsive-carousel";
import ContentContainer from "../../../components/ContentContainer";
import { WineDetails } from "../../../components/WineDetails";

import { wines } from "./winesData";

import { Container } from "./styles";

const WinesCarouselSection: React.FC = () => {
  return (
    <Container>
      <Carousel
        showIndicators={false}
        autoPlay={false}
        showArrows={false}
        showStatus={false}
      ></Carousel>

      <ContentContainer>
        <WineDetails data={wines[0]} />
      </ContentContainer>
    </Container>
  );
};

export { WinesCarouselSection };
