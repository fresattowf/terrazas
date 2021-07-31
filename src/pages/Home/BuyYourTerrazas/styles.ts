import styled from "styled-components";

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

  > div {
    height: 22px;
    width: 1px;
    background-color: #fff;
    margin: 0 25px;
  }
`;
