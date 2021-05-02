import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { cpfMask, horaMask } from 'utils/mask';

const useStyles = makeStyles((theme) => ({
    control: {
        padding: theme.spacing(2)
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

const INITIAL_DATAHORA = {
    data: "",
    hora: ""
}

const AgendaEditar = ({ setValue, agendaSelected }) => {
    const classes = useStyles();
    const [editar, setEditar] = useState(agendaSelected);
    const [dataHora, setDataHora] = useState(INITIAL_DATAHORA)

    useEffect(()=>{
        const splitStringTotal = editar.data.split("T");
        setDataHora({data: splitStringTotal[0], hora: splitStringTotal[1]});
    },[])

    useEffect(()=>{
        setEditar({ ...editar, data: dataHora.data + "T" + dataHora.hora});
    },[dataHora])

    const onClickEditar = () => {
        const validarHora = dataHora.hora.split(":");
        if (dataHora.data.length !== 10) {return alert("Faltou data")}
        if (dataHora.hora.length !== 5) {return alert("Faltou hora")}
        if (validarHora[0] >= 24 || validarHora[0] < 0) {return alert("verifique as horas informada")}
        if (validarHora[1] >= 60 || validarHora[1] < 0) {return alert("verifique os minutos informada")}
        alert("PUT")
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
                        name="pacienteNome"
                        value={editar.pacienteNome}
                        InputProps={{
                            readOnly: true,
                          }}
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
                        name="data"
                        label="Data do exame"
                        type="date"
                        maxLength='10'
                        defaultValue={new Date}
                        className={classes.textField}
                        value={dataHora.data}
                        onChange={(e) => { setDataHora({ ...dataHora, data: e.target.value })}}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        name="hora"
                        label="Hora do exame"
                        maxLength='5'
                        className={classes.textField}
                        value={dataHora.hora}
                        onChange={(e) => { setDataHora({ ...dataHora, hora: horaMask(e.target.value) })}}
                    />
                     <TextField
                        name="exame"
                        label="Exames ofertados"
                        className={classes.textField}
                        value={editar.exame}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={onClickEditar}>
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

export default AgendaEditar;