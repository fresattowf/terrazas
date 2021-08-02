import React from "react";

import BottomDistorted from "../../images/bottom-distorted.png";
import BottomDistorted2 from "../../images/bottom-distorted-2.png";

import WineTexture from "../../images/wine-texture.png";
import YellowTexture from "../../images/yellow-texture.png";

import {
  Container,
  BackgroundWrapper,
  BackgroundImage,
  BackgroundDistortionImage,
} from "./styles";

interface BottleImageWithBackgroundProps {
  src: string;
  bgColor: string;
}

const BottleImageWithBackground: React.FC<BottleImageWithBackgroundProps> = ({
  src,
  bgColor,
}) => {
  const backgroundSrc = bgColor === "wine" ? WineTexture : YellowTexture;

  return (
    <Container>
      <img src={src} alt="Wine" />

      <BackgroundWrapper>
        <BackgroundImage src={backgroundSrc} alt="wine background" />

        <BackgroundDistortionImage src={BottomDistorted} alt="Distorted" />
        <BackgroundDistortionImage src={BottomDistorted2} alt="Distorted 2" />
      </BackgroundWrapper>
    </Container>
  );
};

export { BottleImageWithBackground };
