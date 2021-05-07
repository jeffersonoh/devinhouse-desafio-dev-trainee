import React, { Fragment, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import moment from 'moment';
import { useStyles } from 'style/Style';
import { useAuth } from 'providers/auth';

const AgendaExcluir = () => {
    const { linhaSelecionadaAgenda, setIndex, setChamadoHTTP } = useAuth();
    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.control}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="Nome"
                        className={classes.textField}
                        name="pacienteNome"
                        value={linhaSelecionadaAgenda.pacienteNome}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        label="CPF"
                        className={classes.textField}
                        name="cpf"
                        value={linhaSelecionadaAgenda.cpf}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        name="data"
                        label="Data do exame"
                        type="date"
                        className={classes.textField}
                        value={linhaSelecionadaAgenda.data}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        name="hora"
                        label="Hora do exame"
                        className={classes.textField}
                        value={linhaSelecionadaAgenda.hora}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        name="exame"
                        label="Exames ofertados"
                        className={classes.textField}
                        value={linhaSelecionadaAgenda.exame}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setChamadoHTTP("DELETE_AGENDA")}>
                        Excluir
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => { setIndex(1) }}>
                        Cancelar
                    </Button>
                </form>
            </Paper>
        </Fragment>
    );
}

export default AgendaExcluir;