import styled from "styled-components";

interface ContainerProps {
  error?: boolean;
}

export const Container = styled.div<ContainerProps>`
  label {
    margin: 0 0 3px;
    font-weight: 100;
    color: #4b4b4b;
    font-size: 12px;
    display: block;
  }

  input {
    width: 100%;
    display: block;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid;
    height: 40px;
    background: #ffffff;
    -webkit-appearance: none;
    outline: none;
    font-size: 16px;
    font-weight: 100;
    border-radius: 0;

    border-color: ${(props) => (props.error ? "red" : "gray")};
  }
`;
