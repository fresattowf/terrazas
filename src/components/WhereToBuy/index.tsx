import React from "react";
import { Container, Divider, Wrapper, ShopButton } from "./styles";

interface Place {
  placeName: string;
  available: boolean;
  price: number;
  shopLink: string;
  image: string;
}

interface WhereToBuyProps {
  placeData: Place;
}

export const WhereToBuy: React.FC<WhereToBuyProps> = ({ placeData }) => {
  const { image, shopLink } = placeData;

  return (
    <Container>
      <img src={image} alt="Rappi" />

      <Divider />

      <Wrapper>
        <div>
          <span>Disponível</span>
        </div>

        <ShopButton href={shopLink} target="_blank">
          Comprar
        </ShopButton>
      </Wrapper>
    </Container>
  );
};
