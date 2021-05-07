import React from 'react';

import { Alert } from '@material-ui/lab';
import { Modal, Typography } from '@material-ui/core';
export const Alerta = (props) => {
    const {text, severidade, variante} = props;
    return (
        <Alert severity={severidade} variant={variante}>
            <Typography variant="body1" style={{fontWeight: "bold"}}>{text}</Typography>
        </Alert>
    );
}
