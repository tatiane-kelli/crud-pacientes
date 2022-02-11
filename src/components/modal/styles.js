import styled from "styled-components";
import { Modal } from "@mui/material";

export const Main = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ModalBody = styled.div`
  background-color: #000f3f;
  padding: 20px;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : "550px")};
`;