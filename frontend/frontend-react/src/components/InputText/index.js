import React from 'react'
import { TextField } from '@material-ui/core';

export function InputText(props) {
    const {label, handlefunction, value, type, exemplo} = props;
    return (
        <TextField 
            mask="(0)999 999 99 99"
            variant="standard"
            label={label}
            margin="normal"
            value={value}
            type={type}
            placeholder={exemplo}
            InputLabelProps={{
                shrink: true,
              }}
            onChange={handlefunction}
        />
    )
}
