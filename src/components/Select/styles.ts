import styled, { CSSObject } from "styled-components";
import Select from "react-select";

export const Container = styled.div``;

interface StyledSelectProps {
  error?: boolean;
}

export const StyledSelect = styled(Select).attrs<StyledSelectProps>(
  (props) => ({
    styles: {
      control: (base: CSSObject) => ({
        ...base,
        borderRadius: 0,
        height: 40,
        borderColor: props.error ? "red" : "gray !important",
        boxShadow: "none",
        outline: 0,
        backgroundColor: "transparent",
      }),
      indicatorSeparator: () => ({ display: "none" }),
      placeholder: (base: CSSObject) => ({
        ...base,
        color: "gray",
        fontSize: 16,
        top: 20,
      }),
      singleValue: (base: CSSObject) => ({
        ...base,
        color: "#000",
        fontSize: 16,
        top: 20,
      }),
      menu: (base: CSSObject) => ({
        ...base,
        margin: 0,
        border: "1px solid gray",
        borderTop: 0,
        borderRadius: 0,
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }),
    },
  })
)`
  input {
    width: 100%;
    display: block;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid gray;
    height: 40px;
    background: #ffffff;
    -webkit-appearance: none;
    outline: none;
    font-size: 16px;
    font-weight: 100;
    border-radius: 0;
  }
`;
