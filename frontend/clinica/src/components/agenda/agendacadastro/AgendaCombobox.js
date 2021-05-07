/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { cpfMask } from 'utils/mask';
import { useAuth } from 'providers/auth';
import { useStyles } from 'style/Style';
import axios from 'axios';
import { listaClienteInicial } from 'api/apiTeste';

const filter = createFilterOptions();

const AgendaCombobox = () => {
  const { novoCliente, setNovoCliente, clienteCriadoComboBox, setClienteCriadoComboBox,
    novaMarcacao, setNovaMarcacao, setChamadoHTTP } = useAuth();
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);
  const [clientes, setClientes] = useState([listaClienteInicial]);

  useEffect(() => {
    axios.get("http://localhost:8080/clinica-devinhouse/v1/clientes/procurar/todos")
        .then(response => {
            setClientes(response.data);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const handleClose = () => {
    setNovoCliente({
      nome: '',
      cpf: '',
      ddn: ''
    });
    if (clienteCriadoComboBox) { setNovaMarcacao({ ...novaMarcacao, pacienteNome: "", cpf: "" }) }

    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setChamadoHTTP("POST_NOVOCLIENTECOMBOBOX")
    setValue({
      nome: novoCliente.nome,
      cpf: novoCliente.cpf,
      ddn: novoCliente.ddn
    });
    setNovaMarcacao({ ...novaMarcacao, cpf: novoCliente.cpf, pacienteNome: novoCliente.nome });
  };

  useEffect(() => {
    if (!clienteCriadoComboBox) { handleClose(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clienteCriadoComboBox])

  useEffect(() => {
    setClienteCriadoComboBox(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <React.Fragment>
      <Autocomplete
        autoFocus
        className={classes.textField}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setNovoCliente({ ...novoCliente, nome: newValue });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setNovoCliente({ ...novoCliente, nome: newValue.inputValue });
          } else {
            setValue(newValue);
            clientes.map((item) => {
              if (item.id === newValue.id) {
                setNovaMarcacao({ ...novaMarcacao, cpf: item.cpf, pacienteNome: item.nome });
              }
            })
          }
        }}

        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              nome: `Cadastrar "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={clientes}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.nome;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => `${option.nome} ${option.cpf ? "(" + option.cpf + ")" : ""}`}
        freeSolo
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="Cliente" />
        )}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-nome">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-nome">Cadastrar novo novoCliente</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Não localizamos esse novoCliente, gostaria de cadastra-lo?
            </DialogContentText>
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={novoCliente.nome}
                onChange={(event) => setNovoCliente({ ...novoCliente, nome: event.target.value })}
                label="Nome"
                type="text"
                className={classes.textField}
              />
              <TextField
                margin="dense"
                id="name"
                value={novoCliente.cpf}
                onChange={(event) => setNovoCliente({ ...novoCliente, cpf: cpfMask(event.target.value) })}
                label="CPF"
                type="text"
                className={classes.textField}
              />
              <TextField
                name="data"
                label="Data de nascimento"
                type="date"
                defaultValue={new Date()}
                value={novoCliente.ddn}
                onChange={(e) => { setNovoCliente({ ...novoCliente, ddn: e.target.value }) }}
                InputLabelProps={{
                  shrink: true,
                }}
                className={classes.textField}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Cadastrar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

export default AgendaCombobox;