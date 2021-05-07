import { Typography, Card, Button, makeStyles, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

import { useLoginContext } from "../../../utils/login.context";
import ClienteAPI from "../../../service/ClienteAPI";

const useStyle = makeStyles((theme) => ({
  margin: {
    margin: 10,
  },
  marginText: {
    margin: 10,
    "font-weight": 700,
  },
  item: {
    width: 500,
    margin: 10,
    "background-color": "#89B0EC",
  },
  row: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "row",
  },
}));

export default function ListarAgendamento() {
  const classes = useStyle();
  const { logar } = useLoginContext();
  const [listaClientes, setListaCliente] = useState([]);
  useEffect(() => {
    const recuperarListaClientes = async () => {
      const clientesLista = await ClienteAPI.buscarTodosClientes();
      setListaCliente(clientesLista);
    };
    recuperarListaClientes();
  }, [listaClientes]);
  async function deletarCliente(id) {
    await ClienteAPI.deletarCliente(id);
    setListaCliente(listaClientes);
  }
  return (
    <Grid
      className={classes.margin}
      container
      item
      xs={12}
      spacing={3}
      direction="row"
      justify='center'
      alignItems='flex-start'
    >
      {listaClientes.length === 0 ? (
        <Typography variant="h4" className={classes.margin}>
          Não existe Clientes Cadastrados.
        </Typography>
      ) : (
        listaClientes.map((listaClientes) => (
          <Grid
            item
            xs={4}
            className={classes.item}
            component={Card}
            variant="outlined"
            key={listaClientes.idCliente}
          >
            <Typography className={classes.marginText}>
              Nome: {listaClientes.nome}
            </Typography>
            <Typography className={classes.marginText}>
              CPF: {listaClientes.cpf}
            </Typography>
            <Typography className={classes.marginText}>
              Data de Nascimento: {listaClientes.dataDeNascimento}
            </Typography>
            <div className={classes.row}>
              <Button
                className={classes.margin}
                color="primary"
                variant="contained"
                fullWidth
                onClick={() =>
                  logar({
                    idCliente: listaClientes.idCliente,
                    nome: listaClientes.nome,
                    dataDeNascimento: listaClientes.dataDeNascimento,
                    cpf: listaClientes.cpf,
                  })
                }
              >
                Conectar
              </Button>
              <Button
                className={classes.margin}
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => deletarCliente(listaClientes.idCliente)}
              >
                Deletar
              </Button>
            </div>
          </Grid>
        ))
      )}
    </Grid>
  );
}
