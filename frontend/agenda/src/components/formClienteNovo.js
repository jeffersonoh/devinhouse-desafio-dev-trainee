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

function FormClienteNovo() {
  const classes = useStyles();
  const history = useHistory();
  const [cliente, setCliente] = useState({ cpf: "", name: "", birth: "" });

  const salvarCliente = async (cliente) => {
    await AgendaService.inserirCliente(cliente);
    history.push("/listagem/clientes");
  };

  const handleChange = (novoCliente) => {
    setCliente({ ...cliente, ...novoCliente });
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
          // value={cliente.birth}
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
        onClick={() => salvarCliente(cliente)}
      >
        SALVAR
      </Button>
    </Grid>
  );
}
export default FormClienteNovo;
