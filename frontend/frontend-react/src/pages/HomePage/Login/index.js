import React, { useState } from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";

import { cpfMask } from "../../../utils/cpfMask";
import { InputText } from "../../../components/InputText";
import Botao from "../../../components/Button/Botao";
import theme from "./Login.style";

const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  boxInterior: {
    ...theme.boxInterior,
  },
  boxMargin: {
    ...theme.boxMargin
  }
});

export const Login = (props) => {
  const classes = useStyles();
  const { titulo } = props;

  const [stateCpf, setStateCpf] = useState("");
  const handleCpf = (e) => {
    const { value } = e.target;
    setStateCpf(cpfMask(value));
  };

  return (
    <Box className={classes.boxExterior}>
      <Box component={Paper} className={classes.boxInterior}>
        <Box className={classes.boxMargin}>
          <Typography variant="h6">{titulo}</Typography>
          <InputText
            label="Digite seu CPF"
            value={stateCpf}
            handlefunction={(e) => handleCpf(e)}
          />
          </Box>
          <Botao text="Login" />
      </Box>
    </Box>
  );
};
