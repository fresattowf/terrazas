import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;

  padding: 22px 16px;
  box-shadow: 0 0 21px #00000029;
  background-color: #fff;

  @media (min-width: 768px) {
    background: transparent;
    box-shadow: unset;
  }
`;

export const Left = styled.div`
  width: 40%;
  margin-right: 8px;

  p {
    font-family: "Merriweather", serif;

    font-size: 14px;
    line-height: 17px;
    color: #404040;

    margin-bottom: 20px;
  }

  img {
    width: 72px;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-right: 21px;

    p {
      font-size: 16px;
      margin-top: 20px;
    }

    img {
      width: 125px;
    }
  }
`;

export const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 60%;

  > span {
    font-family: "Roboto", sans-serif;

    font-size: 14px;
    line-height: 19px;
    color: #404040;
  }

  > strong {
    font-family: "Merriweather", serif;

    font-size: 28px;
    font-weight: 500;

    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    width: 50%;

    > span {
      font-size: 24px;
    }

    > strong {
      font-size: 49px;
      margin-top: 10px;
      height: 130px;
    }
  }
`;

interface SpecificationWrapperProps {
  marginTop?: boolean;
}

export const SpecificationWrapper = styled.div<SpecificationWrapperProps>`
  display: flex;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 16px;
    `}

  > img {
    align-self: flex-start;

    width: 18px;
    height: 18px;
  }

  > div {
    flex: 1;
    margin-left: 8px;

    font-family: "Roboto", sans-serif;

    strong {
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
    }

    p {
      margin-top: 5px;

      font-size: 12px;
      line-height: 13px;
      color: #404040;
    }
  }
`;
