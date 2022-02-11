import styled from "styled-components";
import {
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

export const Actions = styled.div`
  padding: 5px 5px 0px 5px;
  cursor: pointer;
  ${({ edit }) =>
    edit &&
    `
    background-color: #313B47;
    color: #989494;
  `}
  ${({ removePatient }) =>
  removePatient &&
    `
    background-color: #7B0503;
    color: #989494;
  `}
`;

export const Flex = styled.div`
  display: flex;
`;

export const IconRemove = styled(AiOutlineDelete)`
  color: inherit;
  font-size: 25px;
`;

export const IconEdit = styled(AiOutlineEdit)`
  color: inherit;
  font-size: 25px;
`;

export const Label = styled.p`
  margin-bottom: 2px;
  margin-top: 0;
`;

export const TitleDelete = styled.p`
  color: #000f3f;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  margin-top: 20px;
`;

export const ButtontnDelete = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const BodyBtn = styled.div`
  width: 120px;
`;

export const Space = styled.div`
  margin-right: 20px;
`;