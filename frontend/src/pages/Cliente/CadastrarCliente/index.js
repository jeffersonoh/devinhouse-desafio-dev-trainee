import {
  Typography,
  Paper,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import {useHistory} from "react-router-dom";

import ClienteAPI from "../../../service/clienteAPI";

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
}));

const cadastrar = async (cliente) => {
    await ClienteAPI.cadastrarCliente(cliente);
};

export default function CadastrarCliente() {
  const classes = useStyle();
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
      dataDeNascimento: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        cadastrar({
            "cpf": values.cpf,
            "nome": values.nome,
            "dataDeNascimento": values.dataDeNascimento
        });
        voltarParaHome();
        },
    });
  function voltarParaHome() {
    history.replace("/");
  }
  return (
    <div className={classes.flex}>
      <Typography  className={classes.margin} variant="h3">Cadastrar um novo Cliente:</Typography>
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
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Cadastrar
          </Button>
        </form>
      </Paper>
    </div>
  );
}
