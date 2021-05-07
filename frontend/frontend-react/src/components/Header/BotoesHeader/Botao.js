import React from "react";

import { Button, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./Botao.style";

const useStyles = makeStyles({
  botaoMinhaConta: {
    ...theme.botaoMinhaConta,
  }
})

export default function Botao(props) {
  const classes = useStyles();

  const { icone, text, variante, tamanho, onclick } = props;
  return (

      <Button className={classes.botaoMinhaConta} startIcon={icone} variant={variante} size={tamanho} onClick = {onclick}>
        <Typography>
          {text}
        </Typography>
        
      </Button>
  );
}
