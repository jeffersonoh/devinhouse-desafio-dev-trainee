import React, { Fragment, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
import { horaMask } from 'utils/mask';
import moment from 'moment';
import { useStyles } from 'style/Style';
import { useAuth } from 'providers/auth';

const AgendaEditar = () => {
    const {linhaSelecionadaAgenda, setLinhaSelecionadaAgenda, 
        dataAgenda, setDataAgenda, setIndex, setChamadoHTTP} = useAuth();
    const classes = useStyles();

    useEffect(()=>{
        setDataAgenda({...dataAgenda, data: moment(linhaSelecionadaAgenda.data).format("yyyy-MM-DD"), hora: moment(linhaSelecionadaAgenda.data).format("HH:mm")});
    },[])

    useEffect(()=>{
        setLinhaSelecionadaAgenda({ ...linhaSelecionadaAgenda, data: dataAgenda.data + "T" + dataAgenda.hora});
    },[dataAgenda])

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
                        maxLength='14'
                        value={linhaSelecionadaAgenda.cpf}
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
                        value={dataAgenda.data}
                        onChange={(e) => { setDataAgenda({ ...dataAgenda, data: e.target.value })}}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        name="hora"
                        label="Hora do exame"
                        maxLength='5'
                        className={classes.textField}
                        value={dataAgenda.hora}
                        onChange={(e) => { setDataAgenda({ ...dataAgenda, hora: horaMask(e.target.value) })}}
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
                    <Button variant="contained" color="secondary" className={classes.button} onClick={() => setIndex(1)}>
                        Cancelar
                    </Button>
            </form>
        </Paper>
    </Fragment>
  );
}

export default AgendaEditar;