import React, { useState, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles, SubmitHandler } from "@unform/core";
import * as Yup from "yup";

import Input from "../../../components/Input";
import Select from "../../../components/Select";

import { countries } from "../../../data/countries";
import { days } from "../../../data/days";
import { languages } from "../../../data/languages";
import { months } from "../../../data/months";
import { years } from "../../../data/years";

import {
  AgreementConfirmationWrapper,
  CheckBoxWrapper,
  Container,
  SideBySideWrapper,
  SubmitButton,
} from "./styles";

const SignUpModal: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [termsIsChecked, setTermsIsChecked] = useState(false);
  const [termsHasError, setTermsHasError] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }

  const handleSubmit: SubmitHandler = async (data, _, event) => {
    event?.preventDefault();

    try {
      formRef.current?.setErrors({});

      if (!termsIsChecked) {
        setTermsHasError(true);
        throw new Error("Terms is required");
      }

      const schema = Yup.object().shape({
        country: Yup.string().required(),
        day: Yup.string().required(),
        email: Yup.string().required(),
        firstName: Yup.string().required(),
        language: Yup.string().required(),
        lastName: Yup.string().required(),
        month: Yup.string().required(),
        year: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors: { [e: string]: string } = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message;
          }
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      // style={customStyles}
    >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <Input
              label="Primeiro nome *"
              name="firstName"
              placeholder="Primeiro nome"
            />
          </div>
          <div className="input-wrapper">
            <Input
              label="Sobrenome *"
              name="lastName"
              placeholder="Sobrenome"
            />
          </div>
        </SideBySideWrapper>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <label htmlFor="">Local de residência *</label>
            <Select
              name="country"
              options={countries}
              isSearchable={false}
              placeholder="Local de residência"
              onChange={() => {}}
            />
          </div>
        </SideBySideWrapper>
        <SideBySideWrapper>
          <div className="input-wrapper">
            <label htmlFor="">Data de nascimento* </label>
            <div className="birthday-wrapper">
              <Select
                name="day"
                options={days}
                isSearchable={false}
                placeholder="Dia"
                onChange={() => {}}
              />
              <Select
                name="month"
                options={months}
                isSearchable={false}
                placeholder="Mês"
                onChange={() => {}}
              />
              <Select
                name="year"
                options={years}
                isSearchable={false}
                placeholder="Ano"
                onChange={() => {}}
              />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="">Preferência de idioma *</label>
            <Select
              name="language"
              options={languages}
              isSearchable={false}
              placeholder="Preferência de idioma"
              onChange={() => {}}
            />
          </div>
        </SideBySideWrapper>
        <div className="input-wrapper">
          <Input label="Email *" name="email" placeholder="email@exemplo.com" />
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

        <CheckBoxWrapper error={termsHasError}>
          <input
            type="checkbox"
            name="agree"
            id="agree"
            onChange={(e) => {
              setTermsHasError(false);
              setTermsIsChecked(!termsIsChecked);
            }}
            checked={termsIsChecked}
          />

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

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </Container>
  );
};

export { SignUpModal };
