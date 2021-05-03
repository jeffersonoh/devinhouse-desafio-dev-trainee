import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyle = makeStyles((theme) =>({
  titulo: {
    flexGrow: 1,
  }
}))

export default function Header() {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.titulo}>Titulo</Typography>
        <Button>Login</Button>
        <Button>Cadastro</Button>
      </Toolbar>
    </AppBar>
  );
}
