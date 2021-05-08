import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Typography } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import dayjs from "dayjs";

import useStyles from "./useStyles";
import AgendamentoService from "../../services/AgendamentoService";

export default function ModalAgendamento({
  helperText,
  label,
  InputProps,
  title,
  data,
  buscaAgendamentos,
  showToastError,
  showToastSuccess,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState({});
  const [exame, setExame] = useState({});
  const [dataEHoraDoAgendamento, setDataEHoraDoAgendamento] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const dataEHoraFormatada = dayjs(dataEHoraDoAgendamento).format(
    "DD/MM/YYYY HH:mm:ss"
  );

  useEffect(() => {
    if (data) {
      setCliente(data.cliente);
      setExame(data.exame);
      setDataEHoraDoAgendamento(data.dataEHoraDoAgendamento);
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
      clienteCPF: cliente,
      exameNome: exame,
      dataEHoraDoAgendamento: dataEHoraFormatada,
    };
    console.log(dataEHoraFormatada)
    if (editMode) {
      try {
        await AgendamentoService.salvar(obj, data.id);
        handleClose();
        buscaAgendamentos();
        showToastSuccess();
      } catch (error) {
        showToastError(error.response.data.message);
      }
    } else {
      try {
        await AgendamentoService.criar(obj);
        handleClose();
        buscaAgendamentos();
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
        <DialogTitle className={classes.modalHeader} id="form-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <Typography>Informacões do Cliente</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    onChange={(e) => setCliente(e.target.value)}
                    variant="outlined"
                    fullWidth
                    value={cliente.nome}
                    name="nome"
                    label={label}
                    InputProps={InputProps}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDateTimePicker
                      disablePast
                      ampm={false}
                      inputVariant="outlined"
                      fullWidth
                      value={dataEHoraDoAgendamento}
                      onChange={setDataEHoraDoAgendamento}
                      label="Data e hora"
                      minDate={new Date()}
                      format="dd/MM/yyyy HH:mm:ss"
                      helperText={helperText}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid item xs={6}>
                  <TextField
                    onChange={(e) => setExame(e.target.value)}
                    variant="outlined"
                    fullWidth
                    value={exame.nomeDoExame}
                    name="exame"
                    label="Exame"
                    InputProps={InputProps}
                  />
                </Grid>
              </Grid>
            </Grid>
          </form>
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
