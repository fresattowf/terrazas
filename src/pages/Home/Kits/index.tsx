import React from "react";

import { Container, Wrapper, WineWrapper, ImageWrapper } from "./styles";

const wines = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0379/5173/3899/products/DiadosPaisWessel_Estatico_5_590x.png?v=1627920434",
    title: "Kit Short Rib com Terrazas Reserva Cabernet Sauvignon",
    description:
      "kit short rib 800g + terrazas reserva cabernet sauvignon 750 ml + saca-rolhas terrazas",
    link: "https://wessel.com.br/collections/kits-natalinos/products/kit-pai-churrasqueiro-terrazas-de-los-andes-wessel",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0379/5173/3899/products/Kit1_590x.png?v=1638801991",
    title: "Kit Carré de Cordeiro com Terrazas Reserva Syrah",
    description:
      "carré de cordeiro 500g + vinho terrazas reserva syrah 750 ml + saca-rolha terrazas",
    link: "https://wessel.com.br/products/kit-carre-de-cordeiro-com-terrazas-syrrah?_pos=1&_sid=09c36b7f0&_ss=r",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0379/5173/3899/products/FOTO_BOLO_590x.jpg?v=1638800659",
    title: "Kit Fruit Cake com Terrazas Petit Manseng",
    description:
      "fruit cake tradicional 700g com vinho de sobremesa terrazas petit manseng late harvest 375 ml",
    link: "https://wessel.com.br/products/kit-fruit-cake-terrazas-petit-mensang?_pos=1&_sid=c003b51a9&_ss=r",
  },
];

const Kits: React.FC = () => {
  return (
    <Container>
      <h2>Kits Experiência Terrazas by Wessel</h2>

      <Wrapper>
        {wines.map(({ image, title, description, link }, i) => (
          <WineWrapper key={title}>
            <ImageWrapper noBorder={i === 2}>
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
