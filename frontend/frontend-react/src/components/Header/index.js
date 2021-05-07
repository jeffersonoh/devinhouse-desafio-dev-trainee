import React, { useState } from "react";

import { AppBar, Toolbar, Menu, MenuItem, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import { useContextLogin } from "../../utils/contextLogin";
import Botao from "./BotoesHeader/Botao";
import BotaoMenu from "./BotoesHeader/BotaoMenu"; 
import BotaoLogo from "./BotoesHeader/BotaoLogo";
import theme from "./BarraPrincipal.style";

const useStyles = makeStyles({
  appBar: {
    ...theme.appBar,
  },
  toolBarPosition: {
    ...theme.toolBarPosition
  }

});

export function BarraPrincipal(props) {
  const { drawyerEvent, clickCadastro, clickLogin, tituloNavBar } = props;
  const classes = useStyles();
  const {
    usuarioState: { loginStatus },
  } = useContextLogin();

  const [dropDown, setDropDown] = useState(null);
  const handleOpenMenu = (event) => {
    setDropDown(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setDropDown(null);
  };

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar variant="regular" className={classes.toolBarPosition}>
        <Box >
          <BotaoLogo />
        </Box>
        <Typography style={{color: "white"}} variant="h5">{tituloNavBar}</Typography>
        {loginStatus === false ? (
          <>
            <Botao
              variante="contained"
              text="Minha Conta"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onclick={handleOpenMenu}
            />
            <Menu
              id="simple-menu"
              open={Boolean(dropDown)}
              onClose={handleCloseMenu}
              anchorEl={dropDown}
            >
              <MenuItem onClick={clickLogin}>Realizar Login</MenuItem>
              <MenuItem onClick={clickCadastro}>Cadastrar</MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <BotaoMenu
              icone={<MenuIcon style={{color: "#e1f5fe"}}/>}
              tamanho="large"
              variante="text"
              onclick={drawyerEvent}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
