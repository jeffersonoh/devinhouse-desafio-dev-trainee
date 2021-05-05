import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RequestBackendExame from "../../utils/ExameRequest";
import RequestBackendAgendamento from "../../utils/AgendamentoRequest";
import BarraPrincipal from "../../components/Header/BarraPrincipal";
import { DropdownExames } from "./DropdownExames";
import theme from "./Agendamento.style";
import { InputText } from "../../components/InputText";
import { DropdownHorario } from "./DropdownHorario";
import Botao from "../../components/Button/Botao";

const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  boxPaper: {
    ...theme.boxPaper,
  },
  boxTitle: {
    ...theme.boxTitle,
  },
  boxInterior: {
    ...theme.boxInterior,
  },
  buttonAgendamento: {
    ...theme.buttonAgendamento,
  },
});

export function Agendamento(props) {
  const {titulo} = props
  const classes = useStyles();
  const [nomeExame, setNomeExame] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [horarioAgendamento, setHorarioAgendamento] = useState("");

  const [listaExames, setListaExames] = useState([]);
  useEffect(() => {
    const handleListaExames = async () => {
      const listaExames = await RequestBackendExame.getTodosExames();
      setListaExames(listaExames);
    };
    handleListaExames();
  }, []);

  const [listaHorariosIndisponiveis, setListaHorariosIndisponiveis] = useState(
    []
  );
  useEffect(() => {
    const handleListaHorariosIndisponiveis = async () => {
      const listaHorarios = await RequestBackendAgendamento.getAgendamentosIndisponiveis(
        nomeExame,
        dataAgendamento
      );
      setListaHorariosIndisponiveis(listaHorarios);
    };
    handleListaHorariosIndisponiveis();
  }, [dataAgendamento]);

  const handleData = (e) => {
    const { value } = e.target;
    const [ano, mes, dia] = value.split("-");
    const data = `${dia}/${mes}/${ano}`;
    setDataAgendamento(data);
  };

  const handlePost = () => {
    RequestBackendAgendamento.postAgendamento({
      cliente: {
        cpf: "555"
      },
      exame: {
        nome: nomeExame
      },
      data: dataAgendamento,
      horario: horarioAgendamento
    })
  }

  return (
      <Box className={classes.boxExterior}>
        <Paper className={classes.boxPaper}>
          <Box className={classes.boxTitle}>
            <Typography variant="h6">Realizar Agendamento</Typography>
            <Box className={classes.boxInterior}>
              <Box>
                <Typography variant="body1" style={{ marginBottom: "1rem" }}>
                  Selecione um exame
                </Typography>
                <DropdownExames
                  listaExames={listaExames}
                  onchange={(e) => setNomeExame(e.target.value)}
                />
              </Box>

              <Box>
                <Typography variant="body1">Selecione uma data</Typography>
                <InputText type="date" handlefunction={(e) => handleData(e)} />
              </Box>

              <Box>
                <Typography variant="body1" style={{ marginBottom: "1rem" }}>
                  Selecione um horário disponível
                </Typography>
                <DropdownHorario
                  listaHorario={listaHorariosIndisponiveis}
                  onchange={(e) => setHorarioAgendamento(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
          <Box className={classes.buttonAgendamento}>
            <Botao text="Realizar Agendamento" onclick={() => handlePost()}/>
          </Box>
        </Paper>
      </Box>
  );
}
