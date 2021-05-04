/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { cpfMask } from 'utils/mask';
import { makeStyles } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const filter = createFilterOptions();

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width: "100%",
    maxWidth: "400px"
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

export default function AgendaCombobox({ listaCliente, setClienteSelecionado, setRetorno }) {
  const classes = useStyles();
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);

  const handleClose = () => {
    setCliente({
      nome: '',
      cpf: '',
      ddn: ''
    });

    toggleOpen(false);
  };

  const [cliente, setCliente] = React.useState({
    nome: '',
    cpf: '',
    ddn: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cliente.nome.length === 0){return missing("Informe o nome do cliente.");}
    if (cliente.cpf.length !== 14){return missing("Informe o CPF do cliente.");}
    if (cliente.ddn.length !== 10){return missing("Informe a data de nascimento do cliente.");}
    setValue({
      nome: cliente.nome,
      cpf: cliente.cpf,
      ddn: cliente.ddn
    });
    setRetorno(204);
    
    handleClose();
  };
  console.log("value", value);
    console.log("cliente", cliente);
  return (
    <React.Fragment>
      <Autocomplete
        className={classes.textField}
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setCliente({
                nome: newValue,
                cpf: '',
                ddn: ''
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setCliente({
              nome: newValue.inputValue,
              cpf: '',
              ddn: ''
            });
          } else {
            setValue(newValue);
            setClienteSelecionado(newValue);
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
        options={listaCliente}
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
        renderInput={(params) => (
          <TextField {...params} label="Cliente" variant="outlined" />
        )}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-nome">
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-nome">Cadastrar novo cliente</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Não localizamos esse cliente, gostaria de cadastra-lo?
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
                value={cliente.nome}
                onChange={(event) => setCliente({ ...cliente, nome: event.target.value })}
                label="Nome"
                type="text"
                className={classes.textField}
              />
              <TextField
                margin="dense"
                id="name"
                value={cliente.cpf}
                onChange={(event) => setCliente({ ...cliente, cpf: cpfMask(event.target.value) })}
                label="CPF"
                type="text"
                className={classes.textField}
              />
              <TextField
                name="data"
                label="Data de nascimento"
                type="date"
                defaultValue={new Date}
                value={cliente.ddn}
                onChange={(e) => { setCliente({ ...cliente, ddn: e.target.value }) }}
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