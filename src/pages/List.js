/* eslint-disable no-undef */
import React, { useMemo, useState } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Content from "../components/contentWrap";
import Title from "../components/title";
import history from "../services/history";
import Moment from "react-moment";
import Modal from "./Delete";
import {
  Grid,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";
import {
  Actions,
  Flex,
  IconRemove,
  IconEdit,
} from "./styles";

export const ListPatients = () => {
  const [remove, setRemove] = useState(false);
  const [idPatient, setIdPatient] = useState(null);
  const [search, setSearch] = useState('');

  const editPatient = (id) => {
    history.push({
      pathname: "/patients/update",
      state: id,
    });
  };

  const deletePatient = (id) => {
    setRemove(true);
    setIdPatient(id);
  };

  const filteredSearch = useMemo(() => {
    return patients.filter((patient) => patient.toLowerCase().includes(search.toLocaleLowerCase()));
  }, [search])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={1} lg={1}>
          <Button
            text="Adicionar"
            onClick={() => history.push("/patients/create")}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Input 
            label="Pesquisar" 
            placeholder="Digite o nome do paciente" 
            value={search}
            onChange = {(ev) => setSearch(ev.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Content>
            <Title
              title="Pacientes"
            />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nome</TableCell>
                      <TableCell>CPF</TableCell>
                      <TableCell>Sexo</TableCell>
                      <TableCell>Data de Nascimento</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        A????es
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredSearch.map((patient) => {
                      <TableRow key={i}>
                        <TableCell>{patient.name}</TableCell>
                        <TableCell>{patient.cpf}</TableCell>
                        <TableCell>{patient.sex}</TableCell>
                        <TableCell>
                          {patient.birth_date ? (
                            <Moment format="DD/MM/YYYY">
                              {patient.birth_date}
                            </Moment>
                          ) : null}
                        </TableCell>
                        <TableCell
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                        <Flex>
                          <Actions
                            edit
                            onClick={() => editPatient(patient.id)}
                          >
                            <IconEdit />
                          </Actions>
                          <Actions
                            removePatient
                            onClick={() => deletePatient(patient.id)}
                          >
                            <IconRemove />
                          </Actions>
                        </Flex>
                      </TableCell>
                    </TableRow>
                    }
                    
                    )}
                    {patients && patients.data && patients.data.length
                      ? (patients.data
                        ).map((row, i) => (
                          <TableRow key={i}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.cpf}</TableCell>
                            <TableCell>{row.sex}</TableCell>
                            <TableCell>
                              {row.birth_date ? (
                                <Moment format="DD/MM/YYYY">
                                  {row.birth_date}
                                </Moment>
                              ) : null}
                            </TableCell>
                            <TableCell
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Flex>
                                <Actions
                                  edit
                                  onClick={() => editPatient(row.id)}
                                >
                                  <IconEdit />
                                </Actions>
                                <Actions
                                  removePatient
                                  onClick={() => deletePatient(row.id)}
                                >
                                  <IconRemove />
                                </Actions>
                              </Flex>
                            </TableCell>
                          </TableRow>
                        ))
                      : null}
                  </TableBody>
                </Table>
              </TableContainer>
          </Content>
        </Grid>
      </Grid>
      {remove && (
        <Modal open={remove} close={() => setRemove(false)} id={idPatient} />
      )}
    </>
  );
};

export default ListPatients;