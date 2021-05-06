import React from "react";

import { FormControl, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./DropdownHorario.style";
import horariosPossiveis from "./horariosPossiveis";

const useStyles = makeStyles({
  dropDownwidth: {
    ...theme.dropDownwidth,
  },
});
const handleDisponivel = (horariosIndisponiveis, horarioPossivel) => {
  let disponibilidade = false;
  horariosIndisponiveis?.map((horariosIndisponiveis) => {
    if (horarioPossivel === horariosIndisponiveis) {
      return disponibilidade = true;
    }
  });
  return disponibilidade;
};
export function DropdownHorario(props) {
  const classes = useStyles();
  const { listaHorario, onchange, value } = props;
  return (
    <FormControl className={classes.dropDownwidth}>
      <NativeSelect onChange={onchange} value={value}>
        {horariosPossiveis.map((horarioPossivel) => (
          <option
            disabled={handleDisponivel(listaHorario, horarioPossivel)}
            key={horarioPossivel}
          >
            {horarioPossivel}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
