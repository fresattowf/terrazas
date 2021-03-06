import styled from "styled-components";
import ContentContainer from "../../components/ContentContainer";

import HeaderBGMobile from "../../images/header-bg-mobile.png";
import HeaderBG from "../../images/header-bg.png";
import BGStripes from "../../images/big-bg-stripes.png";

export const Container = styled.div``;

export const Header = styled.header`
  height: 600px;

  background-image: url(${HeaderBGMobile});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;

  @media (min-width: 768px) {
    height: 547px;

    background-image: url(${HeaderBG});
    background-size: cover;
    background-position: center;
  }
`;

export const StyledContentContainer = styled(ContentContainer)`
  padding-top: 200px;

  > div {
    > h1,
    > h2 {
      font-family: "Merriweather", serif;
      color: var(--wine);
      text-align: center;
    }

    > h1 {
      font-size: 27px;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    > h2 {
      font-size: 20px;
      font-weight: 400;
      margin-top: 11px;
    }
  }

  @media (min-width: 768px) {
    padding-top: 50px;

    > div {
      width: 420px;

      display: flex;
      flex-direction: column;
      align-items: center;

      > h1 {
        font-size: 34px;
      }

      > h2 {
        width: 343px;
      }
    }
  }

  @media (min-width: 900px) {
    > div {
      margin-left: 70px;
    }
  }

  @media (min-width: 1142px) {
    > div {
      margin-left: 124px;
    }
  }

  @media (min-width: 1292px) {
    > div {
      margin-left: 100px;
    }
  }

  @media (min-width: 1500px) {
    > div {
      margin-left: 0;
    }
  }
`;

export const TerrazasImage = styled.img`
  display: block;
  margin: 0 auto 16px;

  width: 193px;

  @media (min-width: 768px) {
    width: 236px;
    margin: 0 0 16px;
  }
`;

export const WineBoxImage = styled.img`
  margin: 48px 0;
  width: 100%;
`;

export const StripeBG = styled.div`
  background: url(${BGStripes});
  background-position: top center;
  background-size: cover;

  padding-bottom: 55px;
`;
