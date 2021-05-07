import React, { useState } from "react";
import { Box, makeStyles, Paper, Typography } from "@material-ui/core";

import { useContextLogin } from "../../../utils/contextLogin";
import { cpfMask } from "../../../utils/cpfMask";
import { InputText } from "../../../components/InputText";
import { Botao } from "../../../components/Button";
import {errorClienteGet} from "../../../utils/alertas"
import theme from "./Login.style";

const useStyles = makeStyles({
  boxExterior: {
    ...theme.boxExterior,
  },
  boxInterior: {
    ...theme.boxInterior,
  },
  boxMargin: {
    ...theme.boxMargin,
  }
});

export const Login = (props) => {
  const { login, loginAdmin } = useContextLogin();
  const classes = useStyles();
  const { titulo } = props;

  const [stateCpf, setStateCpf] = useState("");

  const handleCpf = async (e) => {
    const { value } = e.target;
    const cpf = cpfMask(value);
    await setStateCpf(cpf);
  };

  const realizarLogin = (cpf) => {
    if(cpf === "111.111.111-11") {
      return loginAdmin(cpf)
    } else if (cpf === "") {
      return errorClienteGet();
    }
    login(cpf);
    setStateCpf(cpf);
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
        <Botao text="Login" onclick={() => realizarLogin(stateCpf)}/>
      </Box>
    </Box>
  );
};
