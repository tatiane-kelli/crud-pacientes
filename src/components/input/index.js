import React from "react";
import { Input } from "./styles";

const InputComponent = ({
  value, 
  onChange,
  type, 
  required,
  placeholder,
  label
}) => {
  return (
    <Input 
      variant="outlined"
      value={value}
      onChange={onChange}
      type={type}
      required={required}
      placeholder={placeholder}
      label={label}
    />
  )
}

export default InputComponent;