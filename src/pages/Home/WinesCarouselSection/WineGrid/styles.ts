import styled from "styled-components";
import ContentContainer from "../../../../components/ContentContainer";

export const Container = styled(ContentContainer)`
  display: grid;
  grid-template-columns: repeat(2, 40%);
  grid-row-gap: 50px;
  grid-column-gap: 100px;
  justify-content: center;

  margin: 0 auto;
`;
