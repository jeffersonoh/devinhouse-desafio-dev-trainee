import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";

import useStyles from "./useStyles";
import ClienteService from "../../services/ClienteService";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import dayjs from "dayjs";

export default function ModalCliente({
  title,
  icon,
  data,
  buscaClientes,
  showToastSuccess,
  showToastError,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [dataDeNascimento, setDataDeNascimento] = useState(new Date());
  const dataFormatada = dayjs(dataDeNascimento).format("DD/MM/YYYY");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (data) {
      setNome(data.nome);
      setCpf(data.cpf);
      setDataDeNascimento(data.dataDeNascimento);
      setEditMode(true);
    }
    return () => {
      setEditMode(false);
    };
  }, [data]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const salvar = async () => {
    const obj = {
      nome: nome,
      dataDeNascimento: dataFormatada,
      cpf: cpf,
    };
    if (editMode) {
      try {
        await ClienteService.salvar(obj, data.id);
        handleClose();
        buscaClientes();
        showToastSuccess();
      } catch (error) {
        showToastError(error.response.data.message);
      }
    } else {
      try {
        await ClienteService.criar(obj);
        handleClose();
        buscaClientes();
        showToastSuccess();
      } catch (error) {
        showToastError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        startIcon={icon}
        onClick={handleClickOpen}
      >
        {title}
      </Button>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          style={{ backgroundColor: "#5c5cff", color: "#fff" }}
          id="form-dialog-title"
        >
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Formik>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setNome(e.target.value)}
                      fullWidth
                      required
                      value={nome}
                      name="nome"
                      label="Nome Completo"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        inputVariant="outlined"
                        name
                        clearable
                        placeholder="DD/MM/YYYY"
                        value={dataDeNascimento}
                        onChange={(date) => setDataDeNascimento(date)}
                        format="dd/MM/yyyy"
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      onChange={(e) => setCpf(e.target.value)}
                      fullWidth
                      required
                      value={cpf}
                      name="cpf"
                      label="CPF"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={salvar} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
