import { useRef, useEffect } from "react";
import { OptionTypeBase, Props as SelectProps } from "react-select";
import { useField } from "@unform/core";

import { Container, StyledSelect } from "./styles";

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label?: string;
}

export default function Select({ name, label, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return "";
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      {label && <label>{label}</label>}
      <StyledSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        error={error}
        {...rest}
      />
    </Container>
  );
}
