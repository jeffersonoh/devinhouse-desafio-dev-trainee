import { Button, Grid, makeStyles, TextField } from "@material-ui/core";

import React, { useState } from "react";
import { useHistory } from "react-router";
import AgendaService from "../services/AgendaService";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(5),
      width: "60ch",
    },
  },
}));

function FormAgenda() {
  const classes = useStyles();
  const history = useHistory();
  const [agendamento, setAgendamento] = useState(history.location.state[0]);

  const salvarAlteracoes = async (agendamento) => {
    await AgendaService.atualizarAgendamento(agendamento);
    history.push("/agenda");
  };

  const handleChange = (alteracoes) => {
    setAgendamento({ ...agendamento, ...alteracoes });
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
          id="Client"
          label="Cliente/cpf"
          variant="outlined"
          value={agendamento.client}
          onChange={(e) => handleChange({ client: e.target.value })}
        />
      </div>
      <div>
        <TextField
          id="exame"
          label="Número do exame"
          variant="outlined"
          required
          value={agendamento.medical_exam}
          onChange={(e) => handleChange({ medical_exam: e.target.value })}
        />
      </div>
      <div>
        <TextField
          required
          id="datetime-local"
          label="Dia e hora marcados"
          type="datetime-local"
          value={agendamento.scheduled_date_time}
          className="dataNsc"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) =>
            handleChange({ scheduled_date_time: e.target.value })
          }
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={() => salvarAlteracoes(agendamento)}
      >
        SALVAR ALTERAÇÕES
      </Button>
    </Grid>
  );
}
export default FormAgenda;
