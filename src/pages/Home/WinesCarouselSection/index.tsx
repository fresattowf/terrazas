import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ContentContainer from "../../../components/ContentContainer";
import { WineDetails } from "../../../components/WineDetails";

import WineColorBackground from "../../../images/wine-texture.jpg";
import YellowColorBackground from "../../../images/yellow-texture.jpg";

import { wines } from "./winesData";

import {
  Container,
  BottleWrapper,
  BottleImage,
  BottleBackground,
} from "./styles";

const WinesCarouselSection: React.FC = () => {
  const [currentWineIndex, setCurrentWineIndex] = useState(0);

  return (
    <Container>
      <Carousel
        showIndicators={false}
        autoPlay={false}
        showArrows={false}
        showStatus={false}
        interval={10000000000}
        showThumbs={false}
        onChange={(index) => {
          setCurrentWineIndex(index);
        }}
      >
        {wines.map((wine) => {
          const shouldHaveAnYellowBg = wine.owner === "gonzalo";

          return (
            <BottleWrapper key={wine.name}>
              <BottleImage src={wine.image} alt={wine.name} />

              <BottleBackground
                src={
                  shouldHaveAnYellowBg
                    ? YellowColorBackground
                    : WineColorBackground
                }
              />
            </BottleWrapper>
          );
        })}
      </Carousel>

      <ContentContainer>
        <WineDetails data={wines[currentWineIndex]} />
      </ContentContainer>
    </Container>
  );
};

export { WinesCarouselSection };
