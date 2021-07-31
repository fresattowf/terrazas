import styled from "styled-components";

import WineColorBackground from "../../../images/wine-texture.jpg";
import YellowColorBackground from "../../../images/yellow-texture.jpg";

import BottomDistortionImage from "../../../images/bottom-distorted.png";
import BottomDistortionImage2 from "../../../images/bottom-distorted-2.png";

export const Container = styled.div``;

export const BottleWrapper = styled.div`
  position: relative;

  margin-bottom: 50px;
`;

export const BottleImage = styled.img`
  position: relative;

  height: 350px;
  width: 90px !important;

  z-index: 1005;
`;

export const BottleBackground = styled.img`
  position: absolute;

  width: 160px !important;
  height: 200px !important;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    background-color: green;

    position: relative;
    top: 10px;
  }
`;