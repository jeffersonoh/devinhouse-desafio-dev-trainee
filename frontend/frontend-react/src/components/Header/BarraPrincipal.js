import React, {useState} from "react";
import BotaoLogo from "./BotoesHeader/BotaoLogo";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';

import Botao from "./BotoesHeader/Botao";
import theme from "./BarraPrincipal.style";

const useStyles = makeStyles({
  buttonBackground: {
    backgroundColor: theme.colors.corDeFundo,
  },
  logoButton: {
    flexGrow: 1
  }
})

export default function BarraPrincipal(props) {
  const {drawyerEvent} = props;
  const classes = useStyles();

  const [dropDown, setDropDown] = useState(null);
  const handleOpenMenu = (event) => {
    setDropDown(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setDropDown(null);
  };

  return (
      <AppBar className={classes.buttonBackground} position="static">
        <Toolbar variant="regular">

        <Box className={classes.logoButton}>
          <BotaoLogo />
        </Box>

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
            <MenuItem>Realizar Login</MenuItem>
            <MenuItem>Cadastrar</MenuItem>
          </Menu>
          <Box>
          <Botao icone={<MenuIcon />} tamanho="medium" variante="contained" onclick={drawyerEvent}/>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
