import React from "react";
import { Box, FormControl, InputLabel, NativeSelect, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import theme from './ExamesDropDownArea.style';
import Botao from "../../../components/Button/Botao"

const useStyles = makeStyles({
    boxCenter: {
        ...theme.boxSpacing
    },
    boxDropDown: {
        ...theme.boxDropDown
    },
    dropDowncenter: {
        ...theme.dropDownSpacing
    },
  })

  
export default function ExamesDropdownArea(props) {
    const {listaExames} = props
    const classes = useStyles();
    return (
        <Box className={classes.boxCenter}>
            <Typography variant="h4">
                Agende seu exame agora mesmo.
            </Typography>
            <Box className={classes.boxDropDown}>
            <FormControl className={classes.dropDowncenter}>
                <InputLabel shrink={true}>Selecione um exame</InputLabel>
                <NativeSelect className={classes.select}>
                    {listaExames?.map((listaExames) => (
                        <option key={listaExames.idExame}>{listaExames.nome}</option>
                    ))} 
{/*                     <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                    <option>Opção 4</option> */}
                </NativeSelect> 
            </FormControl>
            <Botao text="Buscar" variante="contained" tamanho="small"/>
            </Box>
        </Box>
    )
}
