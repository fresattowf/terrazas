import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";

import ContentContainer from "../../../components/ContentContainer";
import GrayBackground from "../../../images/bg-gray.png";

export const Container = styled.div`
  margin-top: 52px;

  background-image: url(${GrayBackground});
  background-size: cover;

  padding-bottom: 45px;
`;

export const StyledContentContainer = styled(ContentContainer)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 70px 30px;

    > div {
      width: 100%;
      max-width: 477px;
    }
  }
`;

export const MobileCarousel = styled(Carousel)`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopCarousel = styled(Carousel)`
  @media (max-width: 768px) {
    display: none;
  }
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
  max-width: 300px;
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
