import React, { FormEvent, useState } from "react";
import {
  AgreementConfirmationWrapper,
  CheckBoxWrapper,
  Container,
  SideBySideWrapper,
  SubmitButton,
} from "./styles";

const SignUpModal: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <Container
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      // style={customStyles}
    >
      <form onSubmit={handleSubmit}>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <label htmlFor="">Primeiro nome *</label>
            <input type="text" placeholder="Primeiro nome" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Sobrenome *</label>
            <input type="text" placeholder="Sobrenome" />
          </div>
        </SideBySideWrapper>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <label htmlFor="">Primeiro nome *</label>
            <input type="text" placeholder="Primeiro nome" />
          </div>
        </SideBySideWrapper>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <label htmlFor="">Primeiro nome *</label>
            <input type="text" placeholder="Primeiro nome" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Preferência de idioma *</label>
            <input type="text" placeholder="Preferência de idioma" />
          </div>
        </SideBySideWrapper>
        <div className="input-wrapper">
          <label htmlFor="">Email *</label>
          <input type="text" placeholder="email@exemplo.com" />
        </div>

        <AgreementConfirmationWrapper>
          <p>
            Ao clicar em Enviar, concordo em receber notícias eletronicamente
            (informações, convites e ofertas da{" "}
            <a
              href="https://www.terrazasdelosandes.com/pt/terms-and-conditions/"
              target=" _blank"
              rel="noopener"
            >
              Terrazas de los Andes
            </a>
            ) e aceito o uso de tags da web para medir minha interação com o
            conteúdo.
          </p>
        </AgreementConfirmationWrapper>

        <CheckBoxWrapper>
          <input type="checkbox" name="agree" id="agree" />

          <p>
            Estou interessado nas outras marcas do grupo{" "}
            <a
              href="https://legal.moethennessy.com/affiliates/"
              target=" _blank"
              rel="noopener"
            >
              Moët Hennessy
            </a>{" "}
            e também aceito receber informações e ofertas exclusivas sobre essas
            marcas eletronicamente (e aceito o uso de tags da web para medir
            minha interação com o conteúdo). Você pode retirar seu consentimento
            a qualquer momento enviando um email para
            visitor@terrazasdelosandes.com.ar ou através do mecanismo de
            cancelamento de assinatura contido nas comunicações enviadas Se você
            deseja obter mais informações sobre o processamento de seus dados ou
            de seus direitos, consulte nossa{" "}
            <a
              href="https://www.terrazasdelosandes.com/pt/policy/"
              target=" _blank"
              rel="noopener"
            >
              Política de dados pessoais e cookies.
            </a>
          </p>
        </CheckBoxWrapper>

        <SubmitButton type="button">Enviar</SubmitButton>
      </form>
    </Container>
  );
};

export { SignUpModal };
