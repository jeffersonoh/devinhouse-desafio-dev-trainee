import React from "react";
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

import theme from "./DropdownExames.style";
const useStyles = makeStyles({
    dropDowncenter: {
        ...theme.dropDownSpacing
    }
})

export function DropdownExames(props) {
  const { listaExames } = props;
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.dropDowncenter}>
        <NativeSelect>
          {listaExames?.map((listaExames) => (
            <option key={listaExames.idExame}>{listaExames.nome}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}
