import React, { Fragment, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { horaMask } from 'utils/mask';
import { useStyles } from 'style/Style';
import { useAuth } from 'providers/auth';

const AgendaEditar = () => {
    const { linhaSelecionadaAgenda, setLinhaSelecionadaAgenda, setIndex, setChamadoHTTP } = useAuth();
    const classes = useStyles();

    useEffect(() => {
        if (linhaSelecionadaAgenda.id !== 0) {
            if (linhaSelecionadaAgenda.hora.length === 5) {
                setLinhaSelecionadaAgenda({ ...linhaSelecionadaAgenda, hora: linhaSelecionadaAgenda.hora + ":00" })
            }
        }
    }, [linhaSelecionadaAgenda])

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
                        autoFocus
                        defaultValue={new Date()}
                        className={classes.textField}
                        value={linhaSelecionadaAgenda.data}
                        onChange={(e) => { setLinhaSelecionadaAgenda({ ...linhaSelecionadaAgenda, data: e.target.value }) }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="hora"
                        label="Hora do exame"
                        className={classes.textField}
                        value={linhaSelecionadaAgenda.hora}
                        onChange={(e) => { setLinhaSelecionadaAgenda({ ...linhaSelecionadaAgenda, hora: horaMask(e.target.value) }) }}
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
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setChamadoHTTP("PUT_AGENDA")}>
                        Editar
                    </Button>
                    <Button color="secondary" className={classes.button} onClick={() => setIndex(1)}>
                        Cancelar
                    </Button>
                </form>
            </Paper>
        </Fragment>
    );
}

export default AgendaEditar;