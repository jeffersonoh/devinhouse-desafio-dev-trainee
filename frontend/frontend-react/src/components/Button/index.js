import React from "react";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoBackground: {
    backgroundColor: theme.colors.corDeFundo,
    color: theme.colors.corDaLetra,
    "&:hover": {
      backgroundColor: "#e1f5fe",
      color: "#000"
    },
  },
  menuLateral: {
    backgroundColor: theme.menuLateral.cordDeFundo,
  },
});

export function Botao(props) {
  const classes = useStyles();

  const { icone, text, variante, tamanho, onclick, cor, fontsize } = props;
  return (
    <Button
      className={
        cor === "menuLateral" ? classes.menuLateral : classes.botaoBackground
      }
      startIcon={icone}
      variant={variante}
      size={tamanho}
      onClick={onclick}
    >
      <Typography style={{ fontSize: fontsize }}>{text}</Typography>
    </Button>
  );
}
