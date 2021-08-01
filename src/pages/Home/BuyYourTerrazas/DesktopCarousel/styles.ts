import styled from "styled-components";
import LeftSvg from "../../../../images/left-arrow.svg";
import RightSvg from "../../../../images/right-arrow.svg";
import ShopCard from "../../../../components/ShopCard";

export const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const StyledShopCard = styled(ShopCard)`
  margin: 0 auto;

  @media (min-width: 768px) {
    width: calc(100% - 10px);
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const LeftArrow = styled.img.attrs({
  src: LeftSvg,
})`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  transition: 200ms;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const RightArrow = styled.img.attrs({
  src: RightSvg,
})`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  transition: 200ms;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
