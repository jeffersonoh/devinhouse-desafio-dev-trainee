import React from "react";

import Botao from "../Button/Botao";
import BotaoLogo from "../Button/BotaoLogo";
import TemaCores from "../CustomTheme/TemaCores";
import useStyles from "./BarraPrincipal.style";
import { AppBar, Toolbar, Menu, MenuItem, Box, Paper } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

export default function BarraPrincipal() {
  //const classes = useStyles();
  const [dropDown, setDropDown] = React.useState(null);

  const handleOpenMenu = (event) => {
    setDropDown(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setDropDown(null);
  };
  return (
    <ThemeProvider theme={useStyles.root}>
      <AppBar position="static">
        <Toolbar variant="regular">
          <Box>
            <BotaoLogo />
          </Box>

          <Box>
            <Botao
              variante="contained"
              cor="primary"
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
              <MenuItem>Login Cliente</MenuItem>
              <MenuItem>Login Funcionário</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
