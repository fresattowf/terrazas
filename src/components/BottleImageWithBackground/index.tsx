import React from "react";

import BottomDistorted from "../../images/bottom-distorted.png";
import BottomDistorted2 from "../../images/bottom-distorted-2.png";

import WineTexture from "../../images/wine-texture.jpg";
import YellowTexture from "../../images/yellow-texture.jpg";

import {
  Container,
  BackgroundWrapper,
  BackgroundImage,
  BackgroundDistortionImage,
} from "./styles";

interface BottleImageWithBackgroundProps {
  src: string;
  owner: string;
}

const BottleImageWithBackground: React.FC<BottleImageWithBackgroundProps> = ({
  src,
  owner,
}) => {
  const backgroundSrc = owner === "gonzalo" ? YellowTexture : WineTexture;

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
