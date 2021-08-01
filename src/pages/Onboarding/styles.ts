import styled from "styled-components";
import BG from "../../images/onboarding-bg.jpg";

export const Container = styled.div`
  padding: 30px 20px;

  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  height: 100%;

  font-family: "Weiss-Regular", serif;

  > img {
    display: block;
    width: 140px;
    height: 70px;
    margin: 0 auto 20px;
  }

  > h1 {
    font-size: 0.8775em;
    text-align: center;
    margin-bottom: 14px;
    font-weight: 100;
  }

  > p {
    text-align: center;
    font-size: 0.875em;
    line-height: 1.2em;
    color: gray;
    margin-bottom: 14px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;

  font-family: "Weiss-Regular", serif;

  span {
    font-size: 0.8775em;
    text-align: center;
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  font-family: "Weiss-Regular", serif;
  padding: 10px 0;
  cursor: pointer;
  touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  color: #c89500;
  background-color: transparent;

  font-size: 1.125em;
  line-height: 1.5em;
  text-align: center;

  border: 1px solid #c89500;

  opacity: 0.5;
  transition: 200ms;

  margin: 30px auto;

  width: 95px;
  display: block;

  &:hover {
    opacity: 1;
  }
`;

export const Footer = styled.footer`
  p {
    text-transform: uppercase;
    color: gray;
    font-size: 0.625em;
    font-family: "Interstate-Regular";
    line-height: 1.6em;
    text-align: center;

    a {
      color: #b3b3b3;
      text-decoration: underline;
    }
  }

  > div {
    display: flex;
    justify-content: center;

    margin-top: 15px;

    a {
      font-family: "Interstate-Regular";
      text-transform: uppercase;
      font-size: 0.625em;
      line-height: 1.6em;
      color: #c89500;
      text-decoration: none;
    }
  }
`;
