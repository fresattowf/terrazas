import styled from "styled-components";
import BGVideo from "../../../images/bg-video.png";

import TerrazasImage from "../../../images/terrazas.png";

export const Container = styled.div`
  padding: 30px 0;
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
`;

export const TerrazasLogo = styled.img.attrs({ src: TerrazasImage })`
  width: 200px;

  display: block;
  margin: 40px auto 20px;
`;

export const Paragraph = styled.p`
  font-family: "Merriweather";
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #404040;

  margin-bottom: 35px;
`;

export const SubTitle = styled.h4`
  font-family: "Merriweather";
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #000;

  margin-bottom: 15px;
`;
