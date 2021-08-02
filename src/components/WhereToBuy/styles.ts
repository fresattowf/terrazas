import styled from "styled-components";

export const Container = styled.div`
  height: 56px;

  display: flex;
  align-items: center;

  background-color: #fff;
  padding: 16px;

  margin-bottom: 10px;

  box-shadow: 0px 0px 9px #00000015;

  img {
    width: 64px;
  }

  @media (min-width: 768px) {
    height: 80px;
    margin-bottom: 16px;

    img {
      width: 88px;
    }
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 100%;

  background-color: #d0d0d0;

  margin: 0 20px 0 35px;
`;

export const Wrapper = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-family: "Roboto", sans-serif;
      font-size: 15px;

      color: var(--wine);
    }

    span {
      font-family: "Montserrat";
      font-size: 10px;
      color: #3f7e00;

      margin-top: 2px;
    }
  }

  @media (min-width: 768px) {
    > div {
      strong {
        font-size: 20px;
      }

      span {
        font-size: 12px;
      }
    }
  }
`;

export const ShopButton = styled.a`
  display: block;
  background-color: #000;
  padding: 8px 20px;

  color: #fff;
  font-size: 9px;
  text-align: center;

  text-decoration: none;

  border-radius: 2px;

  @media (min-width: 768px) {
    font-size: 15px;
    padding: 12px 20px;
  }
`;
