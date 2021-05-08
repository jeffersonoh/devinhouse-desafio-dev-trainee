import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { useAuth } from 'providers/auth';
import { cpfMask } from 'utils/mask';
import { useStyles } from 'style/Style';

const ClienteEditar = () => {
    const { linhaSelecionadaCliente, setLinhaSelecionadaCliente,
        setIndex, setChamadoHTTP } = useAuth();
    const classes = useStyles();

    return (
        <Fragment>
            <Paper className={classes.control}>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                        autoFocus
                        id="outlined-basic"
                        label="Nome"
                        className={classes.textField}
                        name="nome"
                        value={linhaSelecionadaCliente.nome}
                        onChange={(e) => setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, nome: e.target.value })}
                    />
                    <TextField
                        label="CPF"
                        className={classes.textField}
                        name="cpf"
                        value={linhaSelecionadaCliente.cpf}
                        onChange={(e) => { setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, cpf: cpfMask(e.target.value) }) }}
                    />
                    <TextField
                        name="ddn" cl
                        label="Data de nascimento"
                        type="date"
                        defaultValue={new Date()}
                        className={classes.textField}
                        value={linhaSelecionadaCliente.ddn}
                        onChange={(e) => setLinhaSelecionadaCliente({ ...linhaSelecionadaCliente, ddn: e.target.value })}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setChamadoHTTP("PUT_CLIENTE")}>
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

export default ClienteEditar;