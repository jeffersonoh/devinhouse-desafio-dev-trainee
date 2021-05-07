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
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router";
import theme from "../utils/theme";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
});

export default function ListagemCliente() {
  const classes = useStyles();
  const [clienteList, setClienteList] = useState([]);
  const history = useHistory();
  let [busca, setBusca] = useState();

  useEffect(() => {
    getClientes();
    // eslint-disable-next-line
  }, [busca]);

  const getClientes = async () => {
    const clientes = await AgendaService.buscarClientes(busca);
    setClienteList(clientes);
  };

  const deleteCliente = async (cpf) => {
    const deleteMessage = `Você irá excluir esse Cliente (${cpf}) de maneira permanente!`;
    if (window.confirm(deleteMessage)) {
      await AgendaService.excluirCliente(cpf);
      getClientes();
    }
  };

  return (
    <PageWrapper>
      <div className="txtBusca">
        <TextField
          id="outlined"
          label="Insira um cpf para busca"
          variant="outlined"
          value={busca || ""}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>"CPF"</TableCell>
              <TableCell align="right">NOME</TableCell>
              <TableCell align="right">NASCIMENTO</TableCell>
              <TableCell align="right">AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clienteList.map((cliente) => (
              <TableRow key={cliente.cpf}>
                <TableCell component="th" scope="row">
                  {cliente.cpf}
                </TableCell>
                <TableCell align="right">{cliente.name}</TableCell>
                <TableCell align="right">{cliente.birth}</TableCell>
                <TableCell align="right">
                  {/* <FormEditCliente /> */}
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => history.push("/edicao/cliente", [cliente])}
                  >
                    EDITAR
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => deleteCliente(cliente.cpf)}
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
