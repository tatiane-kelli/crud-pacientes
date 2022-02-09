import React from "react";
import { Button } from "./styles";

const ButtonComponent = ({ onClick, type, text, color }) => {
  return (
    <Button variant="contained" onClick={onClick} type={type} color={color}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
