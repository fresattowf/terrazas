import React from "react";

import NudasImage from "../../images/nudas.svg";
import GonzaloImage from "../../images/gonzalo.svg";
import EyeImage from "../../images/eye.svg";
import MouthImage from "../../images/mouth.svg";
import LocationImage from "../../images/location.svg";
import NoseImage from "../../images/nose.svg";
import ServeFoodImage from "../../images/serve-food.svg";
import ServeWineImage from "../../images/serve-wine.svg";
import BarrelImage from "../../images/barrel.svg";

import { Container, Left, Right, SpecificationWrapper } from "./styles";

interface Data {
  description: string | null;
  owner: string | null;
  name: string;
  ripeningLocale: string;
  ripeningTime: string;
  flavor: string;
  taste: string;
  color: string;
  harmony: string;
  service: string;
}
interface WineDetailsProps {
  data: Data;
}

const WineDetails: React.FC<WineDetailsProps> = ({ data }) => {
  const {
    description,
    owner,
    name,
    ripeningLocale,
    ripeningTime,
    flavor,
    taste,
    color,
    harmony,
    service,
  } = data;
  return (
    <Container>
      {description && owner && (
        <Left>
          <p>{description}</p>

          <img
            src={owner === "gonzalo" ? GonzaloImage : NudasImage}
            alt={owner === "gonzalo" ? "Gonzalo" : "Nudas"}
          />
        </Left>
      )}

      <Right>
        <span>Reserva</span>
        <strong>{name}</strong>

        <SpecificationWrapper>
          <img src={LocationImage} alt="Amadurecimento" />

          <div>
            <strong>Amadurecimento</strong>
            <p>{ripeningLocale}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={BarrelImage} alt="Amadurecimento" />

          <div>
            <strong>Amadurecimento</strong>
            <p>{ripeningTime}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={NoseImage} alt="Aroma" />

          <div>
            <strong>Aroma</strong>
            <p>{flavor}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={MouthImage} alt="Paladar" />

          <div>
            <strong>Paladar</strong>
            <p>{taste}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={EyeImage} alt="Cor" />

          <div>
            <strong>Cor</strong>
            <p>{color}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={ServeFoodImage} alt="Harmonização" />

          <div>
            <strong>Harmonização</strong>
            <p>{harmony}</p>
          </div>
        </SpecificationWrapper>

        <SpecificationWrapper marginTop>
          <img src={ServeWineImage} alt="Serviço perfeito" />

          <div>
            <strong>Serviço perfeito</strong>
            <p>{service}</p>
          </div>
        </SpecificationWrapper>
      </Right>
    </Container>
  );
};

export { WineDetails };
