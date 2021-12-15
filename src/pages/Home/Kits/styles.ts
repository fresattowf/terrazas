import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import ContentContainer from "../../../components/ContentContainer";

export const Container = styled(ContentContainer)`
  padding: 60px 0 70px;

  h2 {
    font-family: "Charter", serif;
    font-size: 44px;
    line-height: 54px;
    text-align: center;
    color: #404040;

    margin-bottom: 48px;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      text-align: left;
    }
  }
`;

export const WineWrapper = styled.div`
  > h3 {
    font-family: "Charter", serif;

    font-size: 24px;
    text-align: center;
    color: #404040;

    margin-bottom: 8px;
  }

  > p {
    font-family: "Helvetica", serif;

    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #835c12;

    margin-bottom: 34px;
  }

  a {
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: #000;

    font-family: "Arial", sans-serif;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    color: #fff;

    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 768px) {
    a {
      max-width: 216px;
      width: 100%;

      margin: 0 auto;
    }
  }
`;

interface ImageWrapperProps {
  noBorder?: boolean;
}

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 272px;

  border: ${(props) => (props.noBorder ? "none" : "1px solid #ededed")};
  border-radius: 4px;
  margin-bottom: 20px;

  ${(props) =>
    !props.noBorder &&
    css`
      display: flex;
      align-items: center;
    `}

  > img {
    width: ${(props) => (props.noBorder ? "100%" : "95%")};
    height: ${(props) => (props.noBorder ? "100%" : "200px")};

    border-radius: inherit;
  }

  @media (max-width: 768px) {
    max-width: 272px;
    width: 100%;

    margin: 0 auto 21px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 110px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledCarousel = styled(Carousel)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
