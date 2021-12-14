import styled from "styled-components";
import ContentContainer from "../../../components/ContentContainer";

export const Container = styled(ContentContainer)`
  padding: 60px 0 70px;

  > h2 {
    font-family: "Charter", serif;
    font-size: 44px;
    line-height: 54px;
    text-align: center;
    color: #404040;

    margin-bottom: 48px;
  }
`;

export const WineWrapper = styled.div`
  > h3 {
    font-family: "Charter", serif;

    font-size: 24px;
    text-align: center;
    color: #404040;

    margin-bottom: 8px;
  }

  > p {
    font-family: "Helvetica", serif;

    font-size: 18px;
    line-height: 23px;
    text-align: center;

    color: #835c12;

    margin-bottom: 34px;
  }

  a {
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    background-color: #000;

    font-family: "Arial", sans-serif;
    font-size: 17px;
    line-height: 20px;
    text-decoration: none;
    color: #fff;

    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;

  border: 1px solid #ededed;
  border-radius: 4px;

  > img {
    width: 100%;

    margin-bottom: 20px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 110px;
`;
