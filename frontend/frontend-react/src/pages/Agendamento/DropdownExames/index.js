import React from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import theme from "./DropdownExames.style";
const useStyles = makeStyles({
  dropDownwidth: {
    ...theme.dropDownwidth,
  },
});

export function DropdownExames(props) {
  const { listaExames, onchange } = props;
  const classes = useStyles();
  return (
    <FormControl className={classes.dropDownwidth}>
      <NativeSelect onChange={onchange}>
      <option key="0"> </option>
        {listaExames?.map((listaExames) => (
          <option key={listaExames.idExame}>{listaExames.nome}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
