import React from "react";
import Modal from "../components/modal";
import Button from "../components/button";
import api from "../services/api";
import { useSnackbar } from "notistack";
import {
  TitleDelete,
  ButtontnDelete,
  BodyBtn,
  Space,
} from "./styles";

export const DeletePatient = ({ open, close, id }) => {
  const { enqueueSnackbar } = useSnackbar();

  const deleteAPatient = async () => {
    try {
      await api.delete(`/patients/${id}`);
      enqueueSnackbar("Paciente excluido com sucesso", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
      close();
    } catch (e) {
      enqueueSnackbar(
        "Aconteceu algo de errado, tente deletar o paciente mais tarde",
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          preventDuplicate: true,
          autoHideDuration: 3000,
        }
      );
    }
  };

  return (
    <Modal open={open} close={close} width="50%">
      <TitleDelete>
        Você tem certeza que deseja remover esse paciente?
      </TitleDelete>
      <ButtontnDelete>
        <BodyBtn>
          <Button text="Cancelar" onClick={() => close()} />
        </BodyBtn>
        <Space />
        <BodyBtn>
          <Button
            text="Remover"
            color="error"
            onClick={() => deleteAPatient()}
          />
        </BodyBtn>
      </ButtontnDelete>
    </Modal>
  );
};

export default DeletePatient;