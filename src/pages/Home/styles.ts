import styled from "styled-components";
import ContentContainer from "../../components/ContentContainer";

export const Container = styled(ContentContainer)`
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
  }
`;

export const TerrazasImage = styled.img`
  display: block;
  margin: 160px auto 16px;
`;

export const WineBoxImage = styled.img`
  margin: 48px 0;
  width: 100%;
`;
