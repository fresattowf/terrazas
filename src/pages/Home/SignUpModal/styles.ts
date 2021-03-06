import styled from "styled-components";
import Modal from "react-modal";

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 16px;

  color: #4b4b4b;

  > div {
    display: flex;
    align-items: center;

    margin-left: 8px;
  }

  .radio-group {
    display: flex;
    align-items: center;

    margin-left: 16px;

    cursor: pointer;

    input {
      margin-right: 8px;
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      flex-direction: column;
      align-items: flex-start;

      margin-left: 0;
      margin-top: 8px;
    }

    .radio-group {
      margin-left: 0;
      margin-bottom: 8px;
    }
  }
`;

export const SideBySideWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;

  margin-bottom: 20px;

  small {
    margin-left: 8px;
  }

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;

    .input-wrapper {
      margin-bottom: 20px;
    }
  }
`;

export const AgreementConfirmationWrapper = styled.div`
  margin-left: 10px;
  margin-top: 23px;

  > p {
    margin: 0;
    font-weight: 100;
    color: #4b4b4b;
    font-size: 11px;
    line-height: 1.5;
    padding: 0 0 0 0px;

    a {
      color: #4b4b4b;
      text-decoration: underline;
    }
  }
`;

interface CheckBoxWrapperProps {
  error?: boolean;
}

export const CheckBoxWrapper = styled.div<CheckBoxWrapperProps>`
  display: flex;
  margin: 20px 0;

  input {
    margin-top: 3px;
    margin-right: 10px;
  }

  p {
    font-weight: 100;
    color: ${(props) => (props.error ? "red" : "#4b4b4b")};
    font-size: 11px;
    line-height: 1.5;
    padding: 0 0 0 0px;

    a {
      color: #4b4b4b;
      text-decoration: underline;
    }
  }
`;

export const SubmitButton = styled.button`
  background: #c7b374;
  color: #ffffff;
  padding: 15px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  -webkit-appearance: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0;

  display: block;
  margin: 0 auto;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.9;
  }
`;

export const Wrapper = styled.div``;

export const Container = styled(Modal).attrs((props) => ({
  style: {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "0 40px 40px",
      maxWidth: 603,
      width: "100%",
    },
  },
}))`
  header {
    height: 110px;
    padding-top: 20px;

    display: flex;
    align-items: baseline;
    justify-content: flex-end;

    > button {
      display: flex;
      align-items: center;

      border: 0;
      background-color: transparent;

      transition: 200ms;

      span {
        margin-right: -45px;
        font-size: 14px;
        font-family: "Roboto";
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 568px) {
    header {
      height: 40px;
      padding-top: 5px;
      justify-content: center;
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      margin: 0 0 3px;
      font-weight: 100;
      color: #4b4b4b;
      font-size: 12px;
      display: block;
    }
  }

  .birthday-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
`;
