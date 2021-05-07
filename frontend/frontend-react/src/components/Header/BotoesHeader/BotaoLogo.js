import React from "react";

import HealingIcon from "@material-ui/icons/Healing";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoStyle: {
    ...theme.botaoStyle,
    "&:hover": {
      "& .MuiButton-startIcon": {
        color: "#AD0A01",
      },
      color: "#AD0A01",
    },
  },
});

export default function BotaoLogo() {
  const classes = useStyles();

  return (
    <Button 
    className={classes.botaoStyle}
    startIcon={<HealingIcon fontSize="large"/>} 
    component={Paper}
    variant="text" 
    size="medium"
    disableElevation
    color="text"
    >
      <Typography variant="body1" style={{fontWeight: "bold"}}>Sua Saúde</Typography>
    </Button>
  );
}
