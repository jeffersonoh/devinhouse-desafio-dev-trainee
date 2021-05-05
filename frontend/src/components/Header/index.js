import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {
  Link,
  useHistory,
} from "react-router-dom";
import { useLoginContext } from "../../utils/login.context";

const useStyle = makeStyles((theme) => ({
  titulo: {
    flexGrow: 1,
  },
  button: {
    color:'#FFFFFF',
  }
}));

export default function Header() {
  let history = useHistory();
  const {
    login: { state },
    logar,
    deslogar,
  } = useLoginContext();
  const classes = useStyle();

  function cadastrarCliente() {
    history.replace("/cadastro");
  }
  function atualizarCliente() {
    history.replace("/cliente");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to= '/'>
          <IconButton>
            <LocalHospitalIcon style={{ fontSize: 40, color: "white" }}/>
          </IconButton>
        </Link>
        <Typography variant="h4" className={classes.titulo}>
          DevIn Sistema de Agendamento
        </Typography>
        {state === "waiting" ? (
          <>
            <Button className={classes.button} onClick={logar}>Login</Button>
            <Button className={classes.button} onClick={cadastrarCliente} >Cadastro</Button>
          </>
        ) : (
          <>
            <Button className={classes.button} onClick={atualizarCliente}>Alterar Conta</Button>
            <Button className={classes.button} onClick={deslogar}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
