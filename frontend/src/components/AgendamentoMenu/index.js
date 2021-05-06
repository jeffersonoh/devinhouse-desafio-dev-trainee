import {
  Typography,
  Card,
  Button,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";

import horarios from "./horarios";
import { useLoginContext } from "../../utils/login.context";
import { useExameContext } from "../../utils/exameSelect.context";
import AgendamentoAPI from "../../service/agendamentoAPI";

const date = new Date();
const today = date.getFullYear()+ "-"+(date.getMonth()+1)+'-'+date.getDate();

const validationSchema = yup.object({
  data: yup
    .date("Digite uma data")
    .min(date, "A Data minima é o dia de hoje!")
    .required("Data é obrigatoria"),
  horario: yup
    .string("Escolha um Horario")
    .length(5, "Escolha um horario")
    .required("Esse campo é obrigatorio"),
});

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
  row: {
    margin: 10,
    display: "flex",
    "align-items": "center",
    "flex-direction": "row",
  },
  margin: {
    margin: 10,
  },
  item: {
    width: 600,
    margin: 10,
  },
}));

const listarHorariosDisponivel = (lista) => {
  let listaHorariosDisponiveis = [];
  let existeHora = false;
  horarios.map((horarios) => {
    lista.map((lista) => {
      if (lista.hora === horarios) {
        existeHora = true;
      }
    });
    if (existeHora === false) {
      listaHorariosDisponiveis.push(horarios);
    }
  });
  return listaHorariosDisponiveis;
};
export default function AgendamentoMenu() {
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      data: today,
      horario: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const {
    login: { payload },
  } = useLoginContext();
  const {
    exame: { exameDados },
  } = useExameContext();
  const [dataAge, setDataAge] = useState(today);
  const [listaHora, setListaHora] = useState([]);
  const [listaAgendamentos, setListaAgendamento] = useState([]);
  useEffect(() => {
    if (exameDados) {
      const recuperarListaAgendamentos = async () => {
        const agendamentosLista = await AgendamentoAPI.buscarAgendamentoPorExameEData(
          exameDados.idExame,
          dataAge
        );
        setListaAgendamento(agendamentosLista);
        const horasDisponiveis = listarHorariosDisponivel(agendamentosLista);
        setListaHora(horasDisponiveis);
      };
      recuperarListaAgendamentos();
      console.log(dataAge);
      console.log(listaHora);
      console.log(listaAgendamentos);
      console.log(payload);
      console.log(exameDados);


    }
  }, [payload, exameDados, dataAge]);

  return (
    <div className={classes.flex}>
      <Paper elevation={5} className={classes.item}>
        <div className={classes.row}>
          <Card variant="outlined" elevation={0} className={classes.margin}>
            <Typography className={classes.margin}>Placeholder</Typography>
          </Card>
          <Card variant="outlined" elevation={0} className={classes.margin}>
            <Typography className={classes.margin}>Placeholder</Typography>
          </Card>
        </div>
        <Card variant="outlined" elevation={0} className={classes.row}>
          <form onSubmit={formik.handleSubmit}>
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
              value={formik.values.data}
              onChange={formik.handleChange}
              error={formik.touched.data && Boolean(formik.errors.data)}
              helperText={formik.touched.data && formik.errors.data}
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
              value={formik.values.horario}
              onChange={formik.handleChange}
              error={formik.touched.horario && Boolean(formik.errors.horario)}
              helperText={formik.touched.horario && formik.errors.horario}
            >
              {listaHora.map((listaHora) => (
                <option key={listaHora}>{listaHora}</option>
              ))}
            </TextField>
            <Button
              className={classes.margin}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </Card>
      </Paper>
    </div>
  );
}
