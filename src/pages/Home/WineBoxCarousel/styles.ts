import styled, { css } from "styled-components";
import GrayBackground from "../../../images/bg-gray.png";

export const Container = styled.div`
  margin-top: 52px;

  background-image: url(${GrayBackground});
  background-size: cover;
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

interface WineBoxImageInterface {
  wrongSizeImage?: boolean;
}

export const WineBoxImage = styled.img<WineBoxImageInterface>`
  display: block;
  width: 100%;

  ${(props) =>
    props.wrongSizeImage &&
    css`
      margin-left: 22px;
    `}
`;

export const Title = styled.h3`
  font-family: "Merriweather";

  font-size: 44px;
  line-height: 48px;
  color: #000;
  margin-bottom: 16px;
`;

export const SubTitle = styled.p`
  font-family: "Merriweather";

  font-size: 17px;
  line-height: 21px;
  font-weight: bold;
  color: #000;

  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-family: "Helvetica", "Open Sans", sans-serif;

  font-size: 17px;
  line-height: 21px;
  font-weight: 400;
  color: var(--gold);
`;

export const WhereToBuyWrapper = styled.div`
  margin-top: 32px;
`;
