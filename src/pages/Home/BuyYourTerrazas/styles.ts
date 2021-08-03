import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

import ShopCard from "../../../components/ShopCard";

export const Container = styled.div`
  padding: 30px 0;
  border-top: 20px solid #000;
  background-color: var(--gold-light);

  > h1 {
    font-family: "Merriweather", serif;

    font-size: 27px;
    text-align: center;
    font-weight: bold;
    color: #fff;

    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    padding: 85px 0;
  }
`;

export const MobileCarousel = styled.div`
  display: flex;
  overflow-x: scroll;
  padding-left: 25px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledShopCard = styled(ShopCard)`
  margin: 0 auto;

  margin-right: 25px;

  @media (min-width: 768px) {
    width: calc(100% - 10px);
    margin-right: 0;
  }
`;

export const Footer = styled.footer`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 16px 0 0;

  > div {
    height: 22px;
    width: 1px;
    background-color: #fff;
    margin: 0 25px;
  }

  @media (min-width: 768px) {
    margin-top: 52px;
  }
`;
