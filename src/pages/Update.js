/* eslint-disable no-undef */
import React, { useState } from "react";
import Content from "../components/content";
import { Grid } from "@mui/material";
import Title from "../components/title";
import Input from "../components/input";
import Button from "../components/button";
import DatePicker from "../components/datepicker";
import history from "../services/history";
import api from "../services/api";
import { useSnackbar } from "notistack";

const UpdatePatient = ({ ...props }) => {
  const [data, setData] = useState({
    name: patients.data?.name,
    cpf: patients.data?.cpf,
    status: patients.data?.status,
    birth_date: patients.data?.birth_date,
    sex: patients.data?.sex,
  });

  const { enqueueSnackbar } = useSnackbar();

  const savePatientEdited = async (ev) => {
    ev.preventDefault();

    try {
      await api.put(`/patients/${patients.data.id}`);
      history.push("/");
      enqueueSnackbar("Paciente atualizado com sucesso", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } catch (e) {
      enqueueSnackbar("Não foi possível editar o paciente, tente novamente", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Content>
      <Title
        title="Editar informações do paciente"
      />
        <form onSubmit={savePatientEdited}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <Input
                label="Nome"
                placeholder="Sasha Braus"
                required={true}
                value={data.name}
                onChange={(ev) => setData({ ...data, name: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Input
                label="CPF"
                placeholder="00.000.000-0"
                type="tel"
                value={data.cpf}
                onChange={(ev) => setData({ ...data, cpf: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <DatePicker
                label="Data de Nascimento"
                value={data.birth_date}
                onChange={(ev) => setData({ ...data, birth_date: ev })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Input
                label="Sexo"
                placeholder="F ou M"
                type="text"
                value={data.sex}
                onChange={(ev) => setData({ ...data, sex: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item xs={1} md={1} lg={1}>
                  <Button
                    text="Cancelar"
                    color="error"
                    onClick={() => history.push("/")}
                  />
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                  <Button text="Salvar" type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
    </Content>
  );
};

export default UpdatePatient;