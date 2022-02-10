import React, { useState } from "react";
import Content from "../components/content";
import { Grid } from "@mui/material";
import Title from "../components/title";
import Input from "../components/Input"; //criar
import Button from "../components/button";
import DataPicker from "../components/datapicker";  //criar
import history from "../services/history";
import api from "../services/api";
import { useSnackbar } from "notistack";

const AddPatient = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: null,
    birth_date: null,
    cpf: null,
    sex: null,
    status: true
  });

  const { enqueueSnackbar } = useSnackbar();

  const savePatient = async (ev) => {
    ev.preventDefault();
    setLoading(true);

    try {
      await api.post("/patients", data);
      setLoading(false);
      history.push("/patients");
      enqueueSnackbar("Paciente adicionado com sucesso", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        preventDuplicate: true,
        autoHideDuration: 3000,
      });
    } catch (e) {
      setLoading(false);
      enqueueSnackbar("Algo deu errado no registro do paciente, tente novamente!", {
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
        title="Adicionar Paciente"
      />
      {!loading && (
        <form onSubmit={savePatient}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <Input
                label="Nome completo"
                placeholder="Maria Fritz"
                required={true}
                value={data.name}
                onChange={(ev) => setData({ ...data, name: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Input
                label="CPF"
                required={true}
                placeholder="00.000.000-0"
                type="tel"
                value={data.cpf}
                onChange={(ev) => setData({ ...data, cpf: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Input
                label="Sexo"
                placeholder="F ou M"
                required={true}
                type="text"
                value={data.sex}
                onChange={(ev) => setData({ ...data, sex: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Input
                label="RG"
                placeholder="00.000.000-0"
                type="tel"
                value={data.rg}
                onChange={(ev) => setData({ ...data, rg: ev.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <DataPicker
                label="Data de Nascimento"
                value={data.birth_date}
                onChange={(ev) => setData({ ...data, birth_date: ev })}
              />
            </Grid>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item xs={1} md={1} lg={1}>
                  <Button
                    text="Cancelar"
                    color="error"
                    onClick={() => history.push("/patients")}
                  />
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                  <Button text="Salvar" type="submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      )}
    </Content>
  );
};

export default AddPatient;