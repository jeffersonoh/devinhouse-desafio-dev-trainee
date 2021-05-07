import {
  Typography,
  Paper,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

import { useLoginContext } from "../../../utils/login.context";
import ClienteAPI from "../../../service/ClienteAPI";

const date = new Date();

const validationSchema = yup.object({
  nome: yup
    .string("Digite seu nome")
    .strict()
    .trim("Remova os espaços no Inicio e Fim!")
    .required("Nome é obrigatorio"),
  cpf: yup
    .string("Digite seu CPF")
    .length(10, "Digite um CPF com 10 digitos")
    .required("CPF é obrigatorio"),
  dataDeNascimento: yup
    .date("Digite sua data de nascimento")
    .max(date, "A Data maxima é o dia de hoje!")
    .required("Data de nascimento é obrigatoria"),
});

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
  formulario: {
    margin: 10,
    minWidth: 450,
    maxWidth: 1000,
    padding: 20,
  },
  margin: {
    margin: 10,
  },
  row: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "row",
  },
}));


const atualizar = async (id, cliente) => {
  await ClienteAPI.atualizarCliente(id, cliente);
};
const deletar = async (id) => {
  await ClienteAPI.deletarCliente(id);
};

export default function AtualizarCliente() {
  const classes = useStyle();
  const {
    login: { payload },
    logar,
    desconectar,
  } = useLoginContext();
  const formik = useFormik({
    initialValues: {
      nome: payload.nome,
      cpf: payload.cpf,
      dataDeNascimento: payload.dataDeNascimento,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      atualizar(payload.idCliente, {
        idCliente: payload.idCliente,
        nome: values.nome,
        dataDeNascimento: values.dataDeNascimento,
        cpf: values.cpf,
      });
      logar({
        idCliente: payload.idCliente,
        nome: values.nome,
        dataDeNascimento: values.dataDeNascimento,
        cpf: values.cpf,
      });
    },
  });
  function deletarCliente() {
    deletar(payload.idCliente);
    desconectar();
  }
  return (
    <div className={classes.flex}>
      <Typography className={classes.margin} variant="h3">
        Dados do Cliente:
      </Typography>
      <Paper elevation={3} className={classes.formulario}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.margin}
            fullWidth
            variant="outlined"
            id="nome"
            name="nome"
            label="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
          />
          <TextField
            className={classes.margin}
            fullWidth
            variant="outlined"
            id="cpf"
            name="cpf"
            label="CPF"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
          />
          <TextField
            className={classes.margin}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            id="dataDeNascimento"
            name="dataDeNascimento"
            label="Data de Nascimento"
            type="date"
            value={formik.values.dataDeNascimento}
            onChange={formik.handleChange}
            error={
              formik.touched.dataDeNascimento &&
              Boolean(formik.errors.dataDeNascimento)
            }
            helperText={
              formik.touched.dataDeNascimento && formik.errors.dataDeNascimento
            }
          />
          <div className={classes.row}>
            <Button
              className={classes.margin}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
            >
              Atualizar Cliente
            </Button>
            <Button
              className={classes.margin}
              color="primary"
              variant="contained"
              fullWidth
              onClick={deletarCliente}
            >
              Deletar Cliente
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}
