import React from "react";

import TemaCores from '../CustomTheme/TemaCores';
import { Button} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

export default function Botao(props) {
  const { text, variante, cor, tamanho, onclick } = props;
  return (
    <ThemeProvider theme={TemaCores}>
      <Button variant={variante} size={tamanho} color={cor} onClick = {onclick}>
        {text}
      </Button>
    </ThemeProvider>
  );
}
