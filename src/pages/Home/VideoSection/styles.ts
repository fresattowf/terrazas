import styled, { css } from "styled-components";
import ContentContainer from "../../../components/ContentContainer";
import BGVideo from "../../../images/bg-video.png";

import TerrazasImage from "../../../images/terrazas.png";

export const Container = styled.div`
  padding: 30px 0;

  @media (min-width: 768px) {
    padding: 90px 0 30px;
  }
`;

export const StyledContentContainer = styled(ContentContainer)`
  @media (min-width: 768px) {
    max-width: 1479px;
    margin: 0px auto;
    width: 100%;
  }
`;

export const VideoWrapper = styled.a`
  display: block;

  width: 100%;
  height: 260px;

  border-radius: 12px;
  padding-top: 65px;
  padding-bottom: 15px;

  background-image: url(${BGVideo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25%;

  text-decoration: none;

  img {
    display: block;
    margin: 0 auto 12px;
    width: 48px;
    height: 48px;
  }

  strong {
    display: block;

    color: #fff;
    text-align: center;

    margin-top: 16px;
  }

  p {
    font-family: "Merriweather";
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-top: 36px;
  }

  @media (min-width: 768px) {
    height: 555px;
    background-position: center top;
    background-size: cover;

    padding-top: 250px;

    img {
      width: 70px;
      height: 70px;
    }

    strong {
      font-size: 14px;
    }

    p {
      font-size: 24px;
      line-height: 30px;

      max-width: 854px;
      width: 100%;

      margin: 100px auto 0;
    }
  }
`;

export const TerrazasLogo = styled.img.attrs({ src: TerrazasImage })`
  width: 200px;

  display: block;
  margin: 40px auto 20px;

  @media (min-width: 768px) {
    width: 425px;

    margin-top: 54px;
    margin-bottom: 30px;
  }
`;

interface ParagraphProps {
  desktopOnly?: boolean;
  mobileOnly?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-family: "Merriweather";
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #404040;

  margin-bottom: 35px;

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1083px;

    font-size: 21px;
    line-height: 30px;

    margin-left: auto;
    margin-right: auto;
  }

  ${(props) =>
    props.desktopOnly &&
    css`
      @media (max-width: 768px) {
        display: none !important;
      }
    `}

  ${(props) =>
    props.mobileOnly &&
    css`
      @media (min-width: 768px) {
        display: none !important;
      }
    `}
`;

export const SubTitle = styled.h4`
  font-family: "Merriweather";
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #000;

  margin-bottom: 15px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
