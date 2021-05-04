import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useLoginContext } from "../../utils/login.context";

const useStyle = makeStyles((theme) => ({
  titulo: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const {
    login: { state },
    logar,
    deslogar,
  } = useLoginContext();
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" className={classes.titulo}>
          DevIn Sistema de Agendamento
        </Typography>
        {state === "waiting" ? (
          <>
            <Button onClick={logar}>Login</Button>
            <Button>Cadastro</Button>
          </>
        ) : (
          <>
            <Button>Alterar Conta</Button>
            <Button onClick={deslogar}>Logout</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
