import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { cpfMask } from 'utils/mask';
import { useAuth } from 'providers/auth';
import { useStyles } from 'style/Style';

const ClienteCadastro = () => {
    const { novoCliente, setNovoCliente, setChamadoHTTP, setIndex } = useAuth();
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
                        value={novoCliente.nome}
                        onChange={(e) => { setNovoCliente({ ...novoCliente, nome: e.target.value }) }}
                        autoFocus
                    />
                    <TextField
                        label="CPF"
                        className={classes.textField}
                        name="cpf"
                        maxLength='14'
                        value={novoCliente.cpf}
                        onChange={(e) => { setNovoCliente({ ...novoCliente, cpf: cpfMask(e.target.value) }) }}
                    />
                    <TextField
                        name="ddn"
                        label="Data de nacimento"
                        type="date"
                        maxLength='10'
                        defaultValue={new Date()}
                        className={classes.textField}
                        value={novoCliente.ddn}
                        onChange={(e) => { setNovoCliente({ ...novoCliente, ddn: e.target.value }) }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => setChamadoHTTP("POST_NOVOCLIENTE")}
                    >
                        Cadastrar
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => setIndex(1)}
                    >
                        Cancelar
                    </Button>
                </form>
            </Paper>
        </Fragment>
    );
}

export default ClienteCadastro;