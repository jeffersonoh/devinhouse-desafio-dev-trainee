import React, { useEffect, useState } from "react";
import AgendaService from "../services/AgendaService";
import PageWrapper from "./PageWrapper";
import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListagemAgendamentos() {
  const classes = useStyles();
  const [agendamentosList, setAgendamentos] = useState([]);
  const history = useHistory();
  // eslint-disable-next-line
  let [busca, setBusca] = useState();

  useEffect(() => {
    getAgendamentos();
    // eslint-disable-next-line
  }, []);

  const getAgendamentos = async () => {
    const agendamentos = await AgendaService.buscarAgendamentos(busca);
    setAgendamentos(agendamentos);
  };

  const deleteAgendamento = async (id) => {
    const deleteMessage =
      "Você irá excluir esse agendamento de maneira permanente!";

    if (window.confirm(deleteMessage)) {
      await AgendaService.excluirAgendamento(id);
      getAgendamentos();
    }
  };

  return (
    <PageWrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>"CLIENTE/CPF"</TableCell>
              <TableCell align="right">EXAME</TableCell>
              <TableCell align="right">DIA/hora</TableCell>
              <TableCell align="right">AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agendamentosList.map((agendamento) => (
              <TableRow key={agendamento.id}>
                <TableCell component="th" scope="row">
                  {agendamento.client}
                </TableCell>
                <TableCell align="right">{agendamento.medical_exam}</TableCell>
                <TableCell align="right">
                  {agendamento.scheduled_date_time}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() =>
                      history.push("/agendamento/edicao", [agendamento])
                    }
                  >
                    EDITAR
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteAgendamento(agendamento.id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
}
