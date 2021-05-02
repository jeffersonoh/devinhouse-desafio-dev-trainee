import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { cpfMask } from 'utils/mask';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2),
        height: "350px"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(2),
        width: "100%",
        maxWidth: "400px"
    },
    form: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    button: {
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        width: "150px"
    }
}));

const INITIAL_VALUE = {
    nome: "",
    cpf: "",
    ddn: ""
}

const ClienteCadastro = ({ setValue }) => {
    const classes = useStyles();
    const [cadastro, setCadastro] = useState(INITIAL_VALUE);

    const onChangeCadastro = (ev) => {
        const { name, value } = ev.target;

        setCadastro({ ...cadastro, [name]: value });
    }

    const onChickCadastrar = () => {
        if (cadastro.nome.length === 0) {return alert("Faltou nome")}
        if (cadastro.cpf.length !== 14) {return alert("Faltou cpf")}
        if (cadastro.ddn.length !== 10) {return alert("Faltou data")}
        alert("POST")
        setValue(1)
    }

  return (
    <Fragment>
        <Paper className={classes.control}>
        <form className={classes.form} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic"
                    label="Nome"
                    className={classes.textField}
                    name="nome"
                    value={cadastro.nome}
                    onChange={onChangeCadastro}
                />
                <TextField 
                    label="CPF" 
                    className={classes.textField}
                    name="cpf"
                    maxLength='14'
                    value={cadastro.cpf}
                    onChange={(e) => { setCadastro({ ...cadastro, cpf: cpfMask(e.target.value) }) }}
                />
                <TextField
                    name="ddn"
                    label="Data de nacimento"
                    type="date"
                    maxLength='10'
                    defaultValue={new Date}
                    className={classes.textField}
                    value={cadastro.ddn}
                    onChange={onChangeCadastro}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={onChickCadastrar}>
                    Cadastrar
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => {setValue(1)}}>
                    Cancelar
                </Button>
          </form>
        </Paper>
    </Fragment>
  );
}

export default ClienteCadastro;