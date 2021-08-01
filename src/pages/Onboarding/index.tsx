import React from "react";
import TerrazasLogo from "../../images/terrazas.png";

import { Container, InputWrapper, Button, Footer } from "./styles";

const Onboarding: React.FC = () => {
  return (
    <Container>
      <img src={TerrazasLogo} alt="Terrazas" />

      <h1>Bem-vindos à Terrazas de los Andes</h1>

      <p>
        Desfrute dos nossos vinhos com responsabilidade Para visitar o site
        www.terrazasdelosandes.com, você precisará ter a idade mínima necessária
        para beber no país onde você mora. Caso esse tipo de lei não exista no
        seu país de residência, você precisará ter mais de 21 anos para acessar
        o nosso site. A Terrazas de los Andes apoia o consumo responsável. O
        abuso do álcool é prejudicial para a saúde.
      </p>

      <InputWrapper>
        <span>Selecione seu país / região</span>

        <select name="country" id="country">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </InputWrapper>

      <InputWrapper>
        <span>Qual é o seu ano de nascimento?</span>

        <select name="country" id="country">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </InputWrapper>

      <Button>Entrar</Button>

      <Footer>
        <p>
          A Terrazas de los Andes apoia o consumo de seus vinhos com
          responsabilidade pela Moët Hennessy, integrante da SpiritEurope (
          <a href="http://www.responsibledrinking.eu" target="_blank">
            www.responsibledrinking.eu
          </a>
          ) e da DISCUS (
          <a href="http://www.discus.org" target="_blank">
            www.discus.org
          </a>
          ).
        </p>

        <div>
          <a href="">Termos e condições</a>
          <a href="">Política de privacidade</a>
        </div>
      </Footer>
    </Container>
  );
};

export default Onboarding;
