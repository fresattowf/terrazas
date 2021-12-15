import React from "react";
import Video1 from "../../../images/video-image-1.png";
import Video2 from "../../../images/video-image-2.png";
import Video3 from "../../../images/video-image-3.png";

import {
  Container,
  StyledContentContainer,
  Videos,
  StyledVideoPreview,
  TerrazasLogo,
  Paragraph,
  SubTitle,
} from "./styles";

const VideoSection: React.FC = () => {
  return (
    <Container>
      <StyledContentContainer>
        <h3>Vídeos</h3>
        <Videos>
          <StyledVideoPreview
            image={Video1}
            href="https://youtu.be/x_lgQknWl5s"
            title="Assista o vídeo"
            description="Veja a masterclass “Harmonizando Terrazas com Churrasco” por István
            Wessel e François Hauketeur"
          />
          <StyledVideoPreview
            image={Video2}
            href="https://youtu.be/x_lgQknWl5s"
            title="Assista o vídeo"
            description="Veja a masterclass “Harmonizando Terrazas com Churrasco” por István
            Wessel e François Hauketeur"
          />
          <StyledVideoPreview
            image={Video3}
            href="https://youtu.be/x_lgQknWl5s"
            title="Assista o vídeo"
            description="Veja a masterclass “Harmonizando Terrazas com Churrasco” por István
            Wessel e François Hauketeur"
          />
        </Videos>

        <TerrazasLogo />

        <Paragraph desktopOnly>
          A história de Terrazas de los Andes, começa há três décadas atrás,
          quando um enólogo francês <br /> embarcou em uma jornada que
          redefiniria a vitivinicultura na Argentina. <br /> Munido de um
          altímetro, descobriu aos pés dos Andes o segredo das diferentes
          elevações para <br /> revelar o potencial inexplorado de Mendoza e
          assim criar vinhos respeitados mundialmente.
        </Paragraph>

        <Paragraph mobileOnly>
          A história de Terrazas de los Andes, começa há três décadas atrás,
          quando um enólogo francês embarcou em uma jornada que redefiniria a
          vitivinicultura na Argentina. Munido de um altímetro, descobriu aos
          pés dos Andes o segredo das diferentes elevações para revelar o
          potencial inexplorado de Mendoza e assim criar vinhos respeitados
          mundialmente.
        </Paragraph>

        <SubTitle>Sobre os nossos Reservas</SubTitle>

        <Paragraph desktopOnly>
          O coração de Terrazas de los Andes
          <br />
          Consistente . Diverso .Generoso
          <br />
          Reserva é o estilo característico do Terrazas de los Andes, uma imagem
          panorâmica de
          <br />
          todos os nossos terroirs de altura em Mendoza. É a expressão
          consistente de cada
          <br />
          variedade colhida trás colhida.
        </Paragraph>
        <Paragraph mobileOnly>
          O coração de Terrazas de los Andes Consistente . Diverso .Generoso
          Reserva é o estilo característico do Terrazas de los Andes, uma imagem
          panorâmica de todos os nossos terroirs de altura em Mendoza. É a
          expressão consistente de cada variedade colhida trás colhida.
        </Paragraph>
      </StyledContentContainer>
    </Container>
  );
};

export { VideoSection };
