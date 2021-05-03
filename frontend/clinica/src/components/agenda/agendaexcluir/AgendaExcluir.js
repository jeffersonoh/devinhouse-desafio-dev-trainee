import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import moment from 'moment';

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

const AgendaExcluir = ({ setValue, agendaSelected, setRetorno }) => {
    const classes = useStyles();
    const [dataHora, setDataHora] = useState(INITIAL_DATAHORA)

    useEffect(()=>{
        setDataHora({data: moment(agendaSelected.data).format("yyyy-MM-DD"), 
                    hora: moment(agendaSelected.data).format("HH:mm")});
    },[])

    const onClickExcluir = () => {
        setRetorno(203)
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
                        value={agendaSelected.pacienteNome}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField 
                        label="CPF" 
                        className={classes.textField}
                        name="cpf"
                        maxLength='14'
                        value={agendaSelected.cpf}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        name="data"
                        label="Data do exame"
                        type="date"
                        className={classes.textField}
                        value={dataHora.data}
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
                        maxLength='5'
                        className={classes.textField}
                        value={dataHora.hora}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                     <TextField
                        name="exame"
                        label="Exames ofertados"
                        className={classes.textField}
                        value={agendaSelected.exame}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <Button variant="contained" color="primary" className={classes.button} onClick={onClickExcluir}>
                        Excluir
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => {setValue(1)}}>
                        Cancelar
                    </Button>
            </form>
        </Paper>
    </Fragment>
  );
}

export default AgendaExcluir;