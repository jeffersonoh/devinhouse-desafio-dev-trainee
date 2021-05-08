import {
  Typography,
  Card,
  Button,
  Paper,
  TextField,
  makeStyles,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

import { useLoginContext } from "../../utils/login.context";
import { useExameContext } from "../../utils/exameSelect.context";
import AgendamentoAPI from "../../service/agendamentoAPI";
import {alertaCPFeHora} from "../../utils/toastAlertas";
import horarios from "./horarios";

const useStyle = makeStyles((theme) => ({
  flex: {
    margin: 10,
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
  justifyContent: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
  },
  margin: {
    margin: 10,
  },
  marginText: {
    margin: 10,
    "font-weight": 700,
  },
  item: {
    width: 600,
    margin: 10,
  },
}));

const listarHorariosDisponivel = (
  horariosIndisponiveis,
  horariosParaAgendar
) => {
  let listaHorariosDisponiveis = [];
  let existeHora = false;
  horariosParaAgendar.forEach((horariosParaAgendar) => {
    horariosIndisponiveis.forEach((horariosIndisponiveis) => {
      if (horariosIndisponiveis === horariosParaAgendar) {
        existeHora = true;
      }
    });
    if (existeHora === false) {
      listaHorariosDisponiveis.push(horariosParaAgendar);
    } else {
      existeHora = false;
    }
  });
  return listaHorariosDisponiveis;
};

export default function AgendamentoMenu(props) {
  const { idAtualizar, atualizar, fecharModal } = props;
  const classes = useStyle();
  let history = useHistory();
  const horariosDeAgendamento = horarios;
  const {
    login: { payload },
  } = useLoginContext();
  const {
    exame: { exameDados },
  } = useExameContext();
  const [dataAge, setDataAge] = useState("");
  const [listaHorasDisponivel, setListaHorasDisponiveis] = useState([]);
  const [horaSelecionada, setHoraSelecionada] = useState("");
  useEffect(() => {
    const recuperarListaAgendamentos = async () => {
      const listaHorarariosAgendados = await AgendamentoAPI.buscarHorariosAgendadosNaDataDoExame(
        exameDados.idExame,
        dataAge
      );
      setListaHorasDisponiveis(
        listarHorariosDisponivel(
          listaHorarariosAgendados,
          horariosDeAgendamento
        )
      );
    };
    recuperarListaAgendamentos();
  }, [payload, exameDados, dataAge, horariosDeAgendamento]);

  const aoMudarData = (event) => {
    setDataAge(event.target.value);
  };
  const aoSelecionarHora = (event) => {
    setHoraSelecionada(event.target.value);
  };

  const onClick = () => {
    if(horaSelecionada && dataAge){
      if (atualizar === true) {
        atualizarAgendamento(idAtualizar, {
          cliente: {
            idCliente: payload.idCliente,
            nome: payload.nome,
            dataDeNascimento: payload.dataDeNascimento,
            cpf: payload.cpf,
          },
          exame: {
            idExame: exameDados.idExame,
            nome: exameDados.nome,
          },
          data: dataAge,
          hora: horaSelecionada,
        });
      } else {
        cadastrarAgendamento({
          cliente: {
            idCliente: payload.idCliente,
            nome: payload.nome,
            dataDeNascimento: payload.dataDeNascimento,
            cpf: payload.cpf,
          },
          exame: {
            idExame: exameDados.idExame,
            nome: exameDados.nome,
          },
          data: dataAge,
          hora: horaSelecionada,
        });
      }
    } else {
      alertaCPFeHora("Escolha uma Data e um Hora para o Agendamento!");
    }
  };

  async function atualizarAgendamento(id, novoAgendamento) {
    await AgendamentoAPI.atualizarAgendamento(id, novoAgendamento);
    fecharModal();
  }

  async function cadastrarAgendamento(novoAgendamento) {
    await AgendamentoAPI.cadastrarAgendamento(novoAgendamento);
    history.replace("/agendamentos");
  }

  return (
    <div className={classes.flex}>
      <Paper elevation={5} className={classes.item}>
        <div className={classes.justifyContent}>
          <Card variant="outlined" elevation={0} className={classes.margin}>
            <Typography className={classes.marginText}>Cliente:</Typography>
            <Typography className={classes.margin}>
              <b>Nome:</b> {payload.nome}
            </Typography>
            <Typography className={classes.margin}>
              <b>CPF:</b> {payload.cpf}
            </Typography>
            <Typography className={classes.margin}>
              <b>Data de Nascimento:</b> {payload.dataDeNascimento}
            </Typography>
          </Card>
          <Card variant="outlined" elevation={0} className={classes.margin}>
            <Typography className={classes.margin}>
              <b>Exame:</b> {exameDados.nome}
            </Typography>
          </Card>
        </div>
        <Card
          variant="outlined"
          elevation={0}
          className={classes.justifyContent}
        >
          <TextField
            className={classes.margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            id="data"
            name="data"
            label="Data para agendar"
            type="date"
            onChange={aoMudarData}
          />
          <TextField
            className={classes.margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            id="horario"
            name="horario"
            label="Horario para agendar"
            select
            value={horaSelecionada}
            onChange={aoSelecionarHora}
          >
            {listaHorasDisponivel?.map((listaHorasDisponivel) => (
              <MenuItem key={listaHorasDisponivel} value={listaHorasDisponivel}>
                {listaHorasDisponivel}
              </MenuItem>
            ))}
          </TextField>
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            onClick={onClick}
          >
            Enviar
          </Button>
        </Card>
      </Paper>
    </div>
  );
}
