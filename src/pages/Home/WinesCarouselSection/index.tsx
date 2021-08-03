import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ContentContainer from "../../../components/ContentContainer";
import { WineDetails } from "../../../components/WineDetails";

import WineColorBackground from "../../../images/wine-texture.png";
import YellowColorBackground from "../../../images/yellow-texture.png";

import { WineGrid } from "./WineGrid";
import { wines } from "./winesData";

import {
  Container,
  Mobile,
  Desktop,
  BottleWrapper,
  BottleImage,
  BottleBackground,
  StyledDot,
} from "./styles";

const WinesCarouselSection: React.FC = () => {
  const [currentWineIndex, setCurrentWineIndex] = useState(0);

  return (
    <Container>
      <Mobile>
        <Carousel
          showIndicators
          autoPlay={false}
          showArrows={false}
          showStatus={false}
          interval={10000000000}
          showThumbs={false}
          renderIndicator={(clickHandler, isSelected, index) => {
            return (
              <StyledDot onClick={clickHandler} isSelected={isSelected}>
                <span />
              </StyledDot>
            );
          }}
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
      </Mobile>

      <Desktop>
        <WineGrid />
      </Desktop>
    </Container>
  );
};

export { WinesCarouselSection };
