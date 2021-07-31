import React from "react";
import RappiImage from "../../images/rappi.png";
import { Container, Divider, Wrapper } from "./styles";

interface Place {
  placeName: string;
  available: boolean;
  price: number;
  shopLink: string;
}

interface WhereToBuyProps {
  placeData: Place;
}

export const WhereToBuy: React.FC<WhereToBuyProps> = ({ placeData }) => {
  return (
    <Container>
      <img src={RappiImage} alt="Rappi" />

      <Divider />

      <Wrapper>
        <div>
          <strong>R$ 319,00</strong>
          <span>Disponível</span>
        </div>

        <a href="">Comprar</a>
      </Wrapper>
    </Container>
  );
};
