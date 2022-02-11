import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export const ICON = `
  color: inherit !important;
  font-size: 22px;
`;

export const MenuItem = styled.div`
  display: flex;
  padding: 15px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
     color: #2f4cdd !important;
    background-color: #84C4DB;
  `}
  &:hover {
    color: #2f4cdd !important;
    background-color: #84C4DB;
  }
`;

export const TitleMenu = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: inherit !important;
  padding-left: 5px;
  margin-top: -1px;
`;

export const IconArrowRight = styled(AiOutlineRight)`
  ${ICON}
  font-size: 19px;
  margin-top: 5px;
`;

export const Flex = styled.div`
  display: flex;
`;
