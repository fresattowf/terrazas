import React from "react";

import FooterBG from "../../images/footer-bg.png";
import LogoFooter from "../../images/footer-logo.png";

import { Container } from "./styles";

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={FooterBG} alt="Footer BG" />

      <div>
        <p>moethennessy.com todos os direitos reservados.</p>
        <img src={LogoFooter} alt="Logo footer" />
      </div>
    </Container>
  );
};

export { Footer };
