import React from "react";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
    botaoMenu: {
      ...theme.botaoMenu
    }
  })

export default function BotaoMenu(props) {
  const { icone, text, variante, tamanho, onclick } = props;
  const classes = useStyles();
  return (
    <Button
      className={classes.botaoMenu}
      startIcon={icone}
      variant={variante}
      size={tamanho}
      onClick={onclick}
    >
      <Typography>{text}</Typography>
    </Button>
  );
}
