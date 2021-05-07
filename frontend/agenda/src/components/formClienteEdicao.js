import { Grid, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AgendaService from "../services/AgendaService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "60ch",
    },
  },
}));

function FormClienteEdicao() {
  const classes = useStyles();
  const history = useHistory();
  const [cliente, setCliente] = useState(history.location.state[0]);

  const salvarAlteracoes = async (cliente) => {
    await AgendaService.atualizarCliente(cliente);
    history.push("/listagem/clientes");
  };

  const handleChange = (alteracoes) => {
    setCliente({ ...cliente, ...alteracoes });
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <div>
        <TextField
          required
          name="name"
          id="nomeClient"
          label="Nome Completo"
          variant="outlined"
          value={cliente.name}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
      </div>
      <div>
        <TextField
          required
          name="cpf"
          id="cpfClient"
          label="CPF"
          variant="outlined"
          value={cliente.cpf}
          onChange={(e) => handleChange({ cpf: e.target.value })}
        />
      </div>
      <div>
        <TextField
          required
          name="birth"
          id="date"
          label="Data de nascimento"
          type="date"
          value={cliente.birth}
          className="dataNsc"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => handleChange({ birth: e.target.value })}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => salvarAlteracoes(cliente)}
      >
        SALVAR ALTERAÇÕES
      </Button>
    </Grid>
  );
}
export default FormClienteEdicao;
