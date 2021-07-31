import React from "react";

import { Container, LogoImage, Divider, WineImage, ShopButton } from "./styles";

interface ShopCardProps {
  data: {
    shopImage: string;
    wineImage: string;
    name: string;
    percentDiscount: number;
    linkToShop: string;
  };
}

const ShopCard: React.FC = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <LogoImage
        src="https://superon.lifeapps.com.br/images/logos/commerce/b9ed2691-61aa-4b9c-8276-8ef38a11f54d"
        alt="Casa"
      />

      <Divider />
      <WineImage
        src="https://prod-superon-public-media.s3-sa-east-1.amazonaws.com/shared/product-image/64580eb5-1da7-45c0-b995-bd8535545fb2.jpg"
        alt="Terraza Reserva"
      />
      <Divider />

      <span>Linha Terrazas Reserva</span>
      <strong>10% OFF</strong>

      <ShopButton href="" target="_blank">
        Comprar
      </ShopButton>
    </Container>
  );
};

export default ShopCard;
