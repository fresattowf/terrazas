import styled, { CSSObject } from "styled-components";
import Modal from "react-modal";
import Select from "react-select";

export const SideBySideWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;

  margin-bottom: 20px;
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

export const CheckBoxWrapper = styled.div`
  display: flex;
  margin: 20px 0;

  input {
    margin-top: 3px;
    margin-right: 10px;
  }

  p {
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
`;

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
      padding: "40px",
      maxWidth: 603,
      width: "100%",
    },
  },
}))`
  .input-wrapper {
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
