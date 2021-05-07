import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { useAuth } from 'providers/auth';
import { useStyles } from 'style/Style';

const ClienteExcluir = () => {
    const { linhaSelecionadaCliente, setIndex, setChamadoHTTP } = useAuth();
    const classes = useStyles();

  return (
    <Fragment>
        <Paper className={classes.control}>
        <form className={classes.form} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic"
                    label="Nome"
                    className={classes.textField}
                    name="nome"
                    value={linhaSelecionadaCliente.nome}
                    InputProps={{
                        readOnly: true,
                      }}
                />
                <TextField 
                    label="CPF" 
                    className={classes.textField}
                    name="cpf"
                    maxLength='14'
                    value={linhaSelecionadaCliente.cpf}
                    InputProps={{
                        readOnly: true,
                      }}
                />
                <TextField
                    name="ddn"
                    label="Data de nacimento"
                    type="date"
                    maxLength='10'
                    defaultValue={new Date()}
                    className={classes.textField}
                    value={linhaSelecionadaCliente.ddn}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    InputProps={{
                        readOnly: true,
                      }}
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={() => setChamadoHTTP("DELETE_CLIENTE")}>
                    Excluir
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => setIndex(1)}>
                    Cancelar
                </Button>
          </form>
        </Paper>
    </Fragment>
  );
}

export default ClienteExcluir;