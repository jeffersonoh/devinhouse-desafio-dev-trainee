import {
  AppBar,
  Button,
  Toolbar,
  Modal,
  Typography,
  makeStyles,
  IconButton,
  Avatar,
} from "@material-ui/core";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import { useLoginContext } from "../../utils/login.context";
import LoginMenu from "./LoginMenu";

const useStyle = makeStyles((theme) => ({
  titulo: {
    flexGrow: 1,
  },
  button: {
    color: "#FFFFFF",
  },
  marginText: {
    margin: 10,
    "font-weight": 700,
  },
}));

export default function Header() {
  let history = useHistory();
  const {
    login: { payload, state },
    desconectar,
  } = useLoginContext();
  const classes = useStyle();
  const [modal, setModal] = useState(false);

  const abrirModal = () => {
    setModal(true);
  };

  const fecharModal = () => {
    setModal(false);
  };

  function cadastrarCliente() {
    history.replace("/cadastro");
  }
  function atualizarCliente() {
    history.replace("/cliente");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/">
          <IconButton>
            <LocalHospitalIcon style={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Link>
        <Typography variant="h4" className={classes.titulo}>
          DevIn Sistema de Agendamento
        </Typography>
        {state === "waiting" ? (
          <>
            <Button className={classes.button} onClick={abrirModal}>
              Login
            </Button>
            <Button className={classes.button} onClick={cadastrarCliente}>
              Cadastro
            </Button>
          </>
        ) : (
          <>
            <Avatar>{payload.nome[0]}</Avatar>
            <Typography className={classes.marginText}>
              Nome: {payload.nome}
            </Typography>
            <Button className={classes.button} onClick={atualizarCliente}>
              Atualizar Conta
            </Button>
            <Button className={classes.button} onClick={desconectar}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
      <Modal
        open={modal}
        onClose={fecharModal}
        aria-labelledby="Login"
        aria-describedby="Modal para controlar login"
        children={
          <div>
            <LoginMenu fecharModal={fecharModal} />
          </div>
        }
      />
    </AppBar>
  );
}
