import styled from "styled-components";

export const Container = styled.div``;

export const Mobile = styled.div`
  .carousel.carousel-slider {
    padding-bottom: 20px;
  }

  .control-dots {
    display: flex;
    justify-content: center;
    bottom: 8px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

interface StyledDotProps {
  isSelected: boolean;
}

export const StyledDot = styled.button<StyledDotProps>`
  border: 0;
  background-color: transparent;
  margin: 0 5px;

  span {
    width: 8px;
    height: 8px;
    background-color: ${(props) => (props.isSelected ? "#000" : "#a09f9f")};
    display: block;

    border-radius: 50%;
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
