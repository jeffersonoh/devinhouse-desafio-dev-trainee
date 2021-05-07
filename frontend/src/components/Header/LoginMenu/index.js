import {
  Typography,
  Button,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { useLoginContext } from "../../../utils/login.context";

const validationSchema = yup.object({
  cpf: yup
    .string("Digite um CPF")
    .length(10, "Digite um CPF com 10 digitos")
    .required("CPF é obrigatorio nessa opção"),
});

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "flex-direction": "column",
    padding: 10,
    margin: 10,
    "width": "100%",
    "align-items": "center",
  },
  flexPaper: {
    display: "flex",
    "flex-direction": "column",
    padding: 10,
    margin: 10,
    "width": "50%",
  },
  marginText: {
    margin: 10,
    "font-weight": 700,
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

export default function LoginMenu(props) {
  const { fecharModal } = props;
  let history = useHistory();
  const { conectar } = useLoginContext();
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {
      cpf: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      conectar(values.cpf);
      fecharModal();
    },
  });

  function listarClientes() {
    history.replace("/lista-cliente");
    fecharModal();
  }

  return (
    <div className={classes.flex}>
      <Paper elevation={5} className={classes.flexPaper}>
        <Typography className={classes.marginText}>
          Efetue o login por CPF ou entre na lista de clientes:
        </Typography>
        <form className={classes.row} onSubmit={formik.handleSubmit}>
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
          <Button
            className={classes.margin}
            color="primary"
            variant="contained"
            type="submit"
          >
            Buscar CPF
          </Button>
        </form>

        <Button
          className={classes.margin}
          color="primary"
          variant="contained"
          onClick={listarClientes}
        >
          Listar Clientes Cadastrados
        </Button>
      </Paper>
    </div>
  );
}
