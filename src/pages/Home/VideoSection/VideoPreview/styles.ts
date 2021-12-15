import styled from "styled-components";

interface ContainerProps {
  image: string;
}

export const Container = styled.a<ContainerProps>`
  display: flex;
  flex-direction: column;

  height: 260px;
  padding: 0 60px 18px;

  background-image: linear-gradient(
      0deg,
      rgb(0, 0, 0) 5%,
      rgba(0, 0, 0, 0.1) 30%
    ),
    url(${(props) => props.image});
  background-size: cover;

  text-decoration: none;

  img {
    display: block;
    margin: 70px auto 0;
    width: 48px;
    height: 48px;
  }

  strong {
    display: block;

    color: #fff;
    text-align: center;

    margin-top: 16px;
  }

  p,
  strong {
    color: #fff;
    text-align: center;
  }

  > p {
    font-family: "Merriweather";
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;

    margin-top: auto;
  }

  @media (min-width: 768px) {
    padding: 52px 60px;

    > img {
      margin-top: 105px;
    }

    img {
      width: 71px;
      height: 71px;
    }

    p {
      font-size: 21px;
      line-height: 26px;
      font-weight: 500;
    }
  }
`;
