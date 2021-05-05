import React from "react";

import { Button, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoBackground: {
    backgroundColor: theme.colors.corDeFundo,
    color: theme.colors.corDaLetra,
  },
  menuLateral: {
    backgroundColor: theme.menuLateral.cordDeFundo
  }
})

export default function Botao(props) {
  const classes = useStyles();

  const { icone, text, variante, tamanho, onclick, cor } = props;
  return (

      <Button className={cor === "menuLateral" ? classes.menuLateral : classes.botaoBackground} 
      startIcon={icone} variant={variante} size={tamanho} onClick = {onclick}>
        <Typography>
          {text}
        </Typography>
      </Button>
  );
}