import styled from "styled-components";

export const Container = styled.div`
  border-top: 8px solid var(--wine);
  background-color: #000;

  > img {
    width: 100%;
  }

  > div {
    padding: 14px 44px;

    font-family: "Merriweather", serif;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #fff;

    p {
      /* Remove after lkogo */
      margin-bottom: 20px;

      font-style: italic;
      font-size: 12px;
      font-weight: 100;
    }

    img {
      width: 168px;
    }
  }

  @media (min-width: 768px) {
    > div p {
      font-size: 15px;
    }
  }
`;
