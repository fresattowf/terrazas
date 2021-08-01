import styled from "styled-components";

export const Container = styled.div``;

export const Mobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Desktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

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
