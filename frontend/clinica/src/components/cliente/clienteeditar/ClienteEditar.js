import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const missing = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

const ClienteEditar = ({ setValue, clienteSelected, setRetorno }) => {
    const classes = useStyles();
    const [editar, setEditar] = useState(clienteSelected);

    const onChangeEditar = (ev) => {
        const { name, value } = ev.target;

        setEditar({ ...editar, [name]: value });
    }

    const onChickEditar = () => {
        if (editar.nome.length === 0) {return missing("Nome do cliente não é valido!");}
        if (editar.cpf.length !== 14) {return missing("CPF do cliente não é valido!");}
        if (editar.ddn.length !== 10) {return missing("Data de nascimento do cliente não é valido!");}
        setRetorno(202);
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
                    value={editar.nome}
                    onChange={onChangeEditar}
                />
                <TextField 
                    label="CPF" 
                    className={classes.textField}
                    name="cpf"
                    maxLength='14'
                    value={editar.cpf}
                    InputProps={{
                        readOnly: true,
                      }}
                />
                <TextField
                    name="ddn"cl
                    label="Data de nacimento"
                    type="date"
                    maxLength='10'
                    defaultValue={new Date()}
                    className={classes.textField}
                    value={editar.ddn}
                    onChange={onChangeEditar}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button variant="contained" color="primary" className={classes.button} onClick={onChickEditar}>
                    Editar
                </Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={() => {setValue(1)}}>
                    Cancelar
                </Button>
          </form>
        </Paper>
    </Fragment>
  );
}

export default ClienteEditar;