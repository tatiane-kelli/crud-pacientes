import React from "react";
import { ModalBody, Main } from "./styles";

const Modal = (
  {open,
  close, 
  children, 
  width}
  ) => {
    return (
      <Main open={open} onClose={close}>
        <ModalBody width={width} children={children} />
      </Main>
    ); 
  };

export default Modal;