import React from "react";

import HealingIcon from "@material-ui/icons/Healing";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useContextLogin } from "../../../utils/contextLogin";
import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoStyle: {
    ...theme.botaoStyle,
    color: "#e1f5fe",
  },
});

export default function BotaoLogo() {
  const classes = useStyles();
  const { logout } = useContextLogin();

  return (
    <Button 
    className={classes.botaoStyle}
    startIcon={<HealingIcon fontSize="large"/>} 
    component={Paper}
    variant="text" 
    size="medium"
    disableElevation
    onClick={() => logout()}
    >
      <Typography variant="body1" style={{fontWeight: "bold"}}>Sistema de saúde DEVinHouse</Typography>
    </Button>
  );
}
