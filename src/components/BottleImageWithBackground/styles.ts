import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  > img {
    width: 100px !important;
    z-index: 1005;
    margin-bottom: 30px;
  }
`;

export const BackgroundWrapper = styled.div`
  z-index: 1000;

  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translateX(-50%);

  width: 135px;
  height: 200px;
`;

export const BackgroundImage = styled.img`
  width: 100% !important;
  height: 100% !important;
`;

export const BackgroundDistortionImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100% !important;

  height: 5px;
`;
