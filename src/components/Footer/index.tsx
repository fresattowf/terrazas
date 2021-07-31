import React from "react";

import FooterBG from "../../images/footer-bg.png";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={FooterBG} alt="Footer BG" />

      <div>
        <p>moethennessy.com todos os direitos reservados.</p>
        <h1>ADICIONAR O LOGO</h1>
      </div>
    </Container>
  );
};

export { Footer };
