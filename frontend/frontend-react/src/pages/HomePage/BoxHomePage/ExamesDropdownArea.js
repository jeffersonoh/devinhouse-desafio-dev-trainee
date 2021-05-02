import { Box, FormControl, InputLabel, NativeSelect, Typography } from '@material-ui/core'
import useStyles from './ExamesDropDownArea.style';
import React from 'react'

export default function ExamesDropdownArea() {
    const classes = useStyles();
    return (
        <Box>
            <Typography>
                Agende seu exame agora mesmo.
            </Typography>
            <FormControl className={classes.droDown}>
                <InputLabel>Selecione um exame</InputLabel>
                <NativeSelect>
                    <option>Opção 1</option>
                    <option>Opção 2</option>
                    <option>Opção 3</option>
                    <option>Opção 4</option>
                </NativeSelect>
            </FormControl>
        </Box>
    )
}
