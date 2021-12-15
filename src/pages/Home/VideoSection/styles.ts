import styled, { css } from "styled-components";
import ContentContainer from "../../../components/ContentContainer";
import TerrazasImage from "../../../images/terrazas.png";

import VideoPreview from "./VideoPreview";

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

export const Videos = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 459px;

    border-radius: 12px;
    overflow: hidden;
  }
`;

export const StyledVideoPreview = styled(VideoPreview)`
  border-radius: 12px;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    border-radius: 0;

    background-position: unset;
    background-size: unset;
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
