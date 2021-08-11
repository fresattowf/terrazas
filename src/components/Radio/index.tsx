import React from "react";
import Input from "../Input";
import { Container } from "./styles";

interface RadioProps {
  name: string;
  label?: string;
}

const Radio: React.FC<RadioProps> = ({ name, label }) => {
  return (
    <Container>
      <Input type="radio" name={name} />
      {label && <label>{label}</label>}
    </Container>
  );
};

export default Radio;
