import styled from "styled-components";
import ContentContainer from "../../components/ContentContainer";

import HeaderBGMobile from "../../images/header-bg-mobile.png";
import BGStripes from "../../images/bg-stripes-2.png";

export const Container = styled.div``;

export const Header = styled.header`
  height: 600px;

  background-image: url(${HeaderBGMobile});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top;
`;

export const StyledContentContainer = styled(ContentContainer)`
  padding-top: 200px;

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
`;

export const TerrazasImage = styled.img`
  display: block;
  margin: 0 auto 16px;

  width: 193px;
`;

export const WineBoxImage = styled.img`
  margin: 48px 0;
  width: 100%;
`;

export const StripeBG = styled.div`
  background: url(${BGStripes});
  background-position: top center;

  padding-bottom: 55px;
`;
