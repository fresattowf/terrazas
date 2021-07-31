import React from "react";

import { Container, LogoImage, Divider, WineImage, ShopButton } from "./styles";

interface ShopCardProps {
  data: {
    shopImage: string;
    name: string;
    percentDiscount: number;
    linkToShop: string;
  };
}

const ShopCard: React.FC<ShopCardProps> = ({ data, ...rest }) => {
  const { shopImage, name, percentDiscount, linkToShop } = data;

  return (
    <Container {...rest}>
      <LogoImage src={shopImage} alt={name} />

      <Divider />
      <WineImage
        src="https://prod-superon-public-media.s3-sa-east-1.amazonaws.com/shared/product-image/64580eb5-1da7-45c0-b995-bd8535545fb2.jpg"
        alt="Terraza Reserva"
      />
      <Divider />

      <span>Linha Terrazas Reserva</span>
      <strong>{percentDiscount}% OFF</strong>

      <ShopButton href={linkToShop} target="_blank">
        Comprar
      </ShopButton>
    </Container>
  );
};

export default ShopCard;
