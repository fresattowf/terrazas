import styled from "styled-components";

export const Container = styled.div`
  height: 56px;

  display: flex;
  align-items: center;

  background-color: #fff;
  padding: 16px;

  img {
    width: 64px;
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
`;
