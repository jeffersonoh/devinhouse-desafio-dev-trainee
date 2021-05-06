import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import RequestBackendExame from "../../services/ExameRequest";
import RequestBackendAgendamento from "../../services/AgendamentoRequest";
import { DropdownExames } from "./DropdownExames";
import theme from "./Agendamento.style";
import { InputText } from "../../components/InputText";
import { DropdownHorario } from "./DropdownHorario";
import { Botao } from "../../components/Button";

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
  const {
    titulo,
    valueIdAgendamento,
    valueExame,
    valueData,
    valueHorario,
    labelExame,
    labelData,
    labelHorario,
    agendamentoPut,
    showEditButton,
    closePostModal,
    closePutModal,
  } = props;
  const classes = useStyles();
  const [stateIdAgendamento, setstateIdAgendamento] = useState("");
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
    if (nomeExame !== "" && dataAgendamento !== "") {
      const handleListaHorariosIndisponiveis = async () => {
        const listaHorarios = await RequestBackendAgendamento.getAgendamentosIndisponiveis(
          nomeExame,
          dataAgendamento
        );
        setListaHorariosIndisponiveis(listaHorarios);
      };
      handleListaHorariosIndisponiveis();
    }
  }, [nomeExame, dataAgendamento]);

  const handlePost = async () => {
    await RequestBackendAgendamento.postAgendamento({
      cliente: {
        cpf: "555",
      },
      exame: {
        nome: nomeExame,
      },
      data: dataAgendamento,
      horario: horarioAgendamento,
    });
    setNomeExame("");
    setDataAgendamento("");
    setHorarioAgendamento("");
    closePostModal();
  };

  const handlePut = async () => {
    await RequestBackendAgendamento.putAgendamento(stateIdAgendamento, {
      cliente: {
        cpf: "555",
      },
      exame: {
        nome: nomeExame,
      },
      data: dataAgendamento,
      horario: horarioAgendamento,
    });
    closePutModal();
  };

  useEffect(() => {
    if (valueIdAgendamento !== undefined) {
      setstateIdAgendamento(valueIdAgendamento);
    }

    if (valueExame !== undefined) {
      setNomeExame(valueExame);
    }

    if (valueData !== undefined) {
      setDataAgendamento(valueData);
    }

    if (!valueHorario !== undefined) {
      setHorarioAgendamento(valueHorario);
    }
  }, [valueIdAgendamento, valueExame, valueData, valueHorario]);

  return (
    <Box className={classes.boxExterior}>
      <Paper className={classes.boxPaper}>
        <Box className={classes.boxTitle}>
          <Typography variant="h6">{titulo}</Typography>
          <Box className={classes.boxInterior}>
            <Box>
              {agendamentoPut === false && (
                <>
                  <Typography variant="body1" style={{ marginBottom: "1rem" }}>
                    {labelExame}
                  </Typography>
                  <DropdownExames
                    listaExames={listaExames}
                    value={nomeExame}
                    onchange={(e) => setNomeExame(e.target.value)}
                  />
                </>
              )}
            </Box>

            <Box>
              <Typography variant="body1">{labelData}</Typography>
              <InputText
                type="date"
                handlefunction={(e) => setDataAgendamento(e.target.value)}
                value={dataAgendamento}
              />
            </Box>

            <Box>
              <Typography variant="body1" style={{ marginBottom: "1rem" }}>
                {labelHorario}
              </Typography>
              <DropdownHorario
                listaHorario={listaHorariosIndisponiveis}
                value={horarioAgendamento}
                onchange={(e) => setHorarioAgendamento(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box className={classes.buttonAgendamento}>
          {showEditButton === true ? (
            <Botao text="Editar Agendamento" onclick={() => handlePut()} />
          ) : (
            <Botao text="Realizar Agendamento" onclick={() => handlePost()} />
          )}
        </Box>
      </Paper>
    </Box>
  );
}
