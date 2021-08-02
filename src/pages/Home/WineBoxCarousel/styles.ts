import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";

import ContentContainer from "../../../components/ContentContainer";
import GrayBackground from "../../../images/bg-gray.png";

export const Container = styled.div`
  background-image: url(${GrayBackground});
  background-size: cover;

  padding-bottom: 45px;

  .carousel .thumbs-wrapper {
    display: flex !important;
    justify-content: center !important;
  }

  .carousel .thumb {
    background-color: #fff;
    height: 80px;
    width: 80px !important;
    padding: 7px;

    border-radius: 5px;
    border: 1px solid #d9d9d9;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid var(--wine);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 814px;
  }
`;

export const StyledContentContainer = styled(ContentContainer)`
  position: relative;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding: 70px 15px;

    .experience-by-wessel-texts {
      display: flex;
      flex-direction: column;

      width: 100%;
      max-width: 476px;
      margin-left: auto;
    }
  }
`;

export const MobileCarousel = styled(Carousel)`
  transform: translateY(-35px);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopCarousel = styled(Carousel)`
  position: absolute;
  top: -110px;
  left: -160px;
  width: 821px;

  .thumbs-wrapper.axis-vertical {
    margin-top: -16px;
  }

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

  @media (min-width: 768px) {
    order: 1;
  }
`;

export const SubTitle = styled.p`
  font-family: "Merriweather";

  font-size: 17px;
  line-height: 21px;
  font-weight: bold;
  color: #000;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    order: 3;

    font-size: 27px;
    margin-bottom: 22px;
    margin-top: 32px;
  }
`;

export const Description = styled.p`
  font-family: "Helvetica", "Open Sans", sans-serif;

  font-size: 17px;
  line-height: 21px;
  font-weight: 400;
  color: var(--gold);

  @media (min-width: 768px) {
    order: 2;
  }
`;

export const WhereToBuyWrapper = styled.div`
  margin-top: 32px;

  @media (min-width: 768px) {
    order: 4;
    margin-top: 0;
  }
`;
