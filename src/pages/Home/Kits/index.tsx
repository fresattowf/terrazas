import React from "react";

import { Container, Wrapper, WineWrapper, ImageWrapper } from "./styles";

const wines = [
  {
    image:
      "https://images.pexels.com/photos/8567136/pexels-photo-8567136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Kit Short Rib com Terrazas Reserva Cabernet Sauvignon",
    description:
      "kit short rib 800g + terrazas reserva cabernet sauvignon 750 ml + saca-rolhas terrazas",
    link: "",
  },
  {
    image:
      "https://images.pexels.com/photos/8567136/pexels-photo-8567136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Kit Carré de Cordeiro com Terrazas Reserva Syrah",
    description:
      "carré de cordeiro 500g + vinho terrazas reserva syrah 750 ml + saca-rolha terrazas",
    link: "",
  },
  {
    image:
      "https://images.pexels.com/photos/8567136/pexels-photo-8567136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Kit Fruit Cake com Terrazas Petit Manseng",
    description:
      "fruit cake tradicional 700g com vinho de sobremesa terrazas petit manseng late harvest 375 ml",
    link: "",
  },
];

const Kits: React.FC = () => {
  return (
    <Container>
      <h2>Kits Experiência Terrazas by Wessel</h2>

      <Wrapper>
        {wines.map(({ image, title, description, link }) => (
          <WineWrapper key={title}>
            <ImageWrapper>
              <img src={image} alt={title} />
            </ImageWrapper>

            <h3>{title}</h3>
            <p>{description}</p>

            <a
              href={link}
              title={`Comprar ${title}`}
              target="_blank"
              rel="noreferrer"
            >
              Comprar
            </a>
          </WineWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export { Kits };
