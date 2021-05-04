import React, { Fragment, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { horaMask } from 'utils/mask';
import AgendaCombobox from './AgendaCombobox';
import { useAuth } from 'providers/auth';

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

const INITIAL_VALUE = {
    data: "",
    exame: "",
    pacienteNome: "",
    cpf: ""
}

const INITIAL_DATAHORA = {
    data: "",
    hora: ""
}

const AgendaCadastro = ({ setValue, examesOfertados, setRetorno, listaCliente }) => {
    const { setResposta } = useAuth();
    const classes = useStyles();
    const [cadastro, setCadastro] = useState(INITIAL_VALUE);
    const [dataHora, setDataHora] = useState(INITIAL_DATAHORA);
    const [clienteSelecionado, setClienteSelecionado] = useState({});

    const onChangeCadastro = (ev) => {
        const { name, value } = ev.target;

        setCadastro({ ...cadastro, [name]: value });
    }

    useEffect(()=>{
        setCadastro({ ...cadastro, data: dataHora.data + "T" + dataHora.hora});
    },[dataHora])

    const onChickCadastrar = () => {
        const validarHora = dataHora.hora.split(":");
        if (!clienteSelecionado.nome) {return setResposta(901);}
        if (dataHora.data.length !== 10) {return setResposta(902);}
        if (dataHora.hora.length !== 5) {return setResposta(903);}
        if (validarHora[0] >= 24 || validarHora[0] < 0) {return setResposta(904);}
        if (validarHora[1] >= 60 || validarHora[1] < 0) {return setResposta(905);}
        if (cadastro.exame.length === 0) {return setResposta(906);}
        setResposta(201);
        setValue(2)
    }

  return (
    <Fragment>
        <Paper className={classes.control}>
            <form className={classes.form} noValidate autoComplete="off">
                    <AgendaCombobox 
                        listaCliente={listaCliente}
                        setClienteSelecionado={setClienteSelecionado}
                        setRetorno={setRetorno}
                    />
                    <TextField
                        className={classes.textField}
                        name="cpf"
                        maxLength='14'
                        value={clienteSelecionado !== null && clienteSelecionado.cpf 
                            ? clienteSelecionado.cpf 
                            : "000.000.000-00"
                        }
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
                    <FormControl className={classes.textField}>
                        <InputLabel>Exames</InputLabel>
                        <Select
                            name="exame"
                            labelId="Exames ofertados"
                            
                            value={cadastro.exame}
                            onChange={onChangeCadastro}
                        >
                            {examesOfertados.map((e) => (
                                <MenuItem  value={e.exame}>{e.exame}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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

export default AgendaCadastro;