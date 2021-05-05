import React from 'react'
import { TextField } from '@material-ui/core';

export function InputText(props) {
    const {label, handlefunction, value, type, disable} = props;
    return (
        <TextField 
            variant="standard"
            label={label}
            margin="normal"
            value={value}
            type={type}
            InputLabelProps={{
                shrink: true,
              }}
            onChange={handlefunction}
            disabled={disable}
            style={{color: "black"}}
        />
    )
}
