import React from "react";

import HealingIcon from "@material-ui/icons/Healing";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoBackground: {
    backgroundColor: theme.colors.corDeFundo,
    color: theme.colors.corDaLetra,
    "&:hover": {
      "& .MuiButton-startIcon": {
        color: "red",
      },
    },
    
  }
});

export default function BotaoLogo() {
  const classes = useStyles();

  return (
    <Button className={classes.botaoBackground} startIcon={<HealingIcon />} component={Paper}
      variant="contained" size="medium"
    >
      <Typography variant="body1">Sua Saúde</Typography>
    </Button>
  );
}
