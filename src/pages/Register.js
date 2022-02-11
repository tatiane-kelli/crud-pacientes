import React, { useState, useMemo } from "react";
import Content from "../components/contentWrap";
import { Grid } from "@mui/material";
import Title from "../components/title";
import Input from "../components/input";
import Button from "../components/button";
import DatePicker from "../components/datepicker";
import history from "../services/history";
import api from "../services/api";
import axios from "axios";
import { useSnackbar } from "notistack";

export const AddPatient = () => {
  const [loading, setLoading] = useState(false);
  const [cpfSituation, setCpfSituation] = useState(null);
  const [validateCpf, setValidateCpf] = useState([]);
  const [cpf, setCpf] = useState(false);
  const [data, setData] = useState({
    name: null,
    birth_date: null,
    cpf: null,
    sex: null,
    status: true
  });

  const { enqueueSnackbar } = useSnackbar();

  const getValidationCpf = async () => {
    try {
      const requireCpfData = await axios.get(
        `https://api.cpfcnpj.com.br/5ae973d7a997af13f0aaf2bf60e65803/8/${cpf}`
      );
      console.log(requireCpfData);
      if (requireCpfData.data.situacao === "Regular") {
        setCpfSituation(true);
        setValidateCpf(requireCpfData.data);
      }
    } catch (e) {
      setCpfSituation(true);
    }
  };
  
  useMemo(() => {
    if (cpf.length === 11) {
      getValidationCpf();
    }
  }, [cpf]);

  useMemo(() => {
    setData({
      name: null,
      birth_date: validateCpf.nascimento,
      cpf: validateCpf.cpf,
      status: validateCpf.status === 1 ? true : false,
    });
  }, [validateCpf]);

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
                placeholder="Maria Soares"
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
              <DatePicker
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