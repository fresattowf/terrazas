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
      >
        <p>AUSHUDHAS</p>
        <p>AUSHUDHAS</p>
      </Carousel>

      <ContentContainer>
        {wines.map((wine) => (
          <WineDetails key={wine.name} data={wine} />
        ))}
      </ContentContainer>
    </Container>
  );
};

export { WinesCarouselSection };
