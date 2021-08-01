import styled from "styled-components";

export const Container = styled.div`
  width: 180px;
  border-radius: 2px;
  background-color: #fff;

  padding: 22px;

  span {
    display: block;

    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }

  strong {
    display: block;

    color: var(--wine);
    margin-top: 8px;
  }

  @media (min-width: 768px) {
    span,
    strong {
      text-align: center;
    }
  }
`;

export const LogoWrapper = styled.div`
  @media (min-width: 768px) {
    height: 64px;
    display: flex;
    align-items: center;
  }
`;

export const LogoImage = styled.img`
  max-width: 80px;
  width: 100%;

  @media (min-width: 768px) {
    margin: 0 auto;

    &.entre-vinhos {
      max-width: 129px;
    }

    &.brava {
      max-width: 136px;
      height: 67px;
    }

    &.vinho-br {
      max-width: 137px;
      height: 67px;
    }

    &.bocatti {
      max-width: 147px;
    }

    &.bebidas-do-sul {
      max-width: 160px;
    }
  }
`;

export const WineImage = styled.img`
  margin: 5px 0;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  width: 62px;
  height: 1px;
  background-color: #d0d0d0;

  margin: 10px auto;
`;

export const ShopButton = styled.a`
  display: block;
  width: 100%;
  background-color: #000;
  padding: 8px;

  color: #fff;
  font-size: 11px;
  text-align: center;

  text-decoration: none;

  border-radius: 2px;

  margin-top: 13px;
`;
