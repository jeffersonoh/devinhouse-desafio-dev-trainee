import { Typography, Card, Button, makeStyles, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

import { useLoginContext } from "../../../utils/login.context";
import AgendamentoAPI from "../../../service/agendamentoAPI";

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
  const {
    login: { payload },
  } = useLoginContext();
  const [agendamentos, setAgendamentos] = useState([]);
  useEffect(() => {
    if (payload) {
      const recuperarListaAgendamentos = async () => {
        const agendamentosLista = await AgendamentoAPI.buscarAgendamentoPorCliente(
          payload.idCliente
        );
        setAgendamentos(agendamentosLista);
      };
      recuperarListaAgendamentos();
    }
  }, [payload, agendamentos]);
  async function deletarAgendamento(id) {
    await AgendamentoAPI.deletarAgedamento(id);
    setAgendamentos(agendamentos);
  }
  return (
    <Grid
      className={classes.margin}
      container
      item
      xs={12}
      spacing={3}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      {agendamentos.length === 0 ? (
        <Typography variant="h4" className={classes.margin}>
          Não existe agendamentos feitos.
        </Typography>
      ) : (
        agendamentos.map((agendamentos) => (
          <Grid
            item
            xs={4}
            className={classes.item}
            component={Card}
            variant="outlined"
            key={agendamentos.idAgendamento}
          >
            <Typography className={classes.marginText}>
              Tipo do Exame: {agendamentos.exame.nome}
            </Typography>
            <Typography className={classes.marginText}>
              Data do Exame: {agendamentos.data}
            </Typography>
            <Typography className={classes.marginText}>
              Horário do Exame: {agendamentos.hora}
            </Typography>
            <div className={classes.row}>
              <Button
                className={classes.margin}
                color="primary"
                variant="contained"
                fullWidth
              >
                Atualizar Agendamento
              </Button>
              <Button
                className={classes.margin}
                color="primary"
                variant="contained"
                fullWidth
                onClick={() => deletarAgendamento(agendamentos.idAgendamento)}
              >
                Deletar Agendamento
              </Button>
            </div>
          </Grid>
        ))
      )}
    </Grid>
  );
}
