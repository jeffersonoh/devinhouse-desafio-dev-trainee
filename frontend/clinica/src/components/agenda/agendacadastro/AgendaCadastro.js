import React, { Fragment, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { horaMask } from 'utils/mask';
import AgendaCombobox from './AgendaCombobox';
import { useAuth } from 'providers/auth';
import { useStyles } from 'style/Style';

const AgendaCadastro = () => {
    const { examesOfertados, novaMarcacao, setNovaMarcacao, setChamadoHTTP, setIndex } = useAuth();
    const classes = useStyles();

    useEffect(() => {
        if (novaMarcacao.hora.length === 5){
            setNovaMarcacao({ ...novaMarcacao, hora: novaMarcacao.hora + ":00" })
        }
    }, [novaMarcacao])

    return (
        <Fragment>
            <Paper className={classes.control}>
                <form className={classes.form} noValidate autoComplete="off">
                    <AgendaCombobox />
                    <TextField
                        className={classes.textField}
                        name="cpf"
                        value={novaMarcacao.cpf
                            ? novaMarcacao.cpf
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
                        defaultValue={new Date()}
                        className={classes.textField}
                        value={novaMarcacao.data}
                        onChange={(e) => { setNovaMarcacao({ ...novaMarcacao, data: e.target.value }) }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        name="hora"
                        label="Hora do exame"
                        className={classes.textField}
                        value={novaMarcacao.hora}
                        onChange={(e) => { setNovaMarcacao({ ...novaMarcacao, hora: horaMask(e.target.value) }) }}
                    />
                    <FormControl className={classes.textField}>
                        <InputLabel>Exames</InputLabel>
                        <Select
                            name="exame"
                            labelId="Exames ofertados"
                            value={novaMarcacao.exame}
                            onChange={(e) => { setNovaMarcacao({ ...novaMarcacao, exame: e.target.value }) }}
                        >
                            {examesOfertados.map((e) => (
                                <MenuItem value={e.nome}>{e.nome}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" className={classes.button} onClick={() => setChamadoHTTP("POST_NOVAMARCACAO")}>
                        Cadastrar
                    </Button>
                    <Button color="secondary" className={classes.button} onClick={() => setIndex(1) }>
                        Cancelar
                    </Button>
                </form>
            </Paper>
        </Fragment>
    );
}

export default AgendaCadastro;