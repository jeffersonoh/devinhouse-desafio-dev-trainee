import { Button, Grid, makeStyles, Typography, TextField as MuiTextField } from "@material-ui/core";
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { Autocomplete } from "formik-material-ui-lab";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup';

import ClienteDialog from "../components/ClienteDialog";
import ExameDialog from "../components/ExameDialog";
import formataCPF from "../helpers/formataCPF";
import apiAgendamento from "../services/apiAgendamento";
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";

const useStyles = makeStyles(() => ({
  input: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFF",
    }
  },
  grid: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
  },
  cancelarButton: {
    marginRight: 10,
  }
}));

const filterOptions = createFilterOptions({
  matchFrom: 'any',
  stringify: (option) => option.cpf ? option.nome + option.cpf : option.nome,
});

const yupSchema = Yup.object().shape({
  data: Yup.string().required('Campo data é obrigatório'),
  horario: Yup.string().required('Campo horário é obrigatório'),
  cliente: Yup.object().nullable().required('Campo cliente é obrigatório'),
  exame: Yup.object().nullable().required('Campo exame é obrigatório'),
});

const NovoAgendamento = () => {
  const [clientes, setClientes] = useState([]);
  const [exames, setExames] = useState([]);
  const [cliente, setCliente] = useState(undefined);
  const [exame, setExame] = useState(undefined);
  const [openNovoCLiente, setOpenNovoCliente] = useState(false);
  const [openNovoExame, setOpenNovoExame] = useState(false);
  const [clienteInputValue, setClienteInputValue] = useState('');
  const [exameInputValue, setExameInputValue] = useState('');
  
  const classes = useStyles();

  let history = useHistory();

  const location = useLocation();

  const handleClose = () => {
    openNovoCLiente && setOpenNovoCliente(false);
    openNovoExame && setOpenNovoExame(false);
  };

  const handleClickOpen = (dialog) => {
    dialog === 'exame' && setOpenNovoExame(true);
    dialog === 'cliente' && setOpenNovoCliente(true);
  };

  const getClientes = async () => {
    const result = await apiCliente.findAllClientes();
  
    setClientes(result);
  };

  const getExames = async () => {
    const result = await apiExame.findAllExames();

    setExames(result);
  };

  useEffect(() => {
    getClientes();
    getExames();
  }, []);

  const handleInitialValues = () => {
    if (location.state?.dados) {
      return {
        id: location.state?.dados.id,
        data: location.state?.dados.data.split('/').reverse().join('-'),
        horario: location.state?.dados.horario,
        cliente: location.state?.dados.cliente,
        exame: location.state?.dados.exame,
      };
    } else {
      return {
        id: 0,
        data: '',
        horario: '',
        cliente: undefined,
        exame: undefined,
      }
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = {
        data: values.data.split('-').reverse().join('/'),
        horario: values.horario,
        clienteId: values.cliente.id,
        exameId: values.exame.id
      }
  
      if (values.id === 0) {
        await apiAgendamento.createAgendamento(data);
      } else {
        data.id = values.id;
        await apiAgendamento.updateAgendamento(data.id, data);
      }
  
      setSubmitting(false);
  
      history.goBack();
      
      toast.success('Agendamento cadastrado com sucesso');
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  }

  const handleCreateCliente = async (cliente) => {
    const data = {
      ...cliente,
      dataNascimento: cliente.dataNascimento.split('-').reverse().join('/')
    };

    if (cliente.id === 0) {
      await apiCliente.createCliente(data);
    } else {
      data.id = cliente.id;
      await apiCliente.updateCliente(data.id, data);
    }

    setOpenNovoCliente(false);

    setCliente(undefined);

    getClientes();
  };

  const handleCreateExame = async (exame) => {
    if (exame.id === 0) {
      await apiExame.createExame(exame);
    } else {
      await apiExame.updateExame(exame.id, exame);
    }

    setOpenNovoExame(false);

    setExame(undefined);

    getExames();
  };

  console.log(clienteInputValue)

  return (
    <>
      <Typography variant="h3" component="h1" paragraph>
        {handleInitialValues().id === 0 ? 'Cadastro de agendamento' : 'Editar agendamento'}
      </Typography>
      <Formik
        initialValues={handleInitialValues()}
        validationSchema={yupSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, setFieldValue, values, errors, touched }) => (
          <Form>
            <Grid container spacing={2} className={classes.grid}>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  className={classes.input}
                  name="data"
                  label="Data"
                  type="date"
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  component={TextField}
                  className={classes.input}
                  name="horario"
                  label="Horário"
                  type="time"
                  color="secondary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={Autocomplete}
                  disabled={handleInitialValues().id !== 0}
                  name="cliente"
                  id="cliente"
                  options={clientes}
                  inputValue={clienteInputValue}
                  onInputChange={(e, value) => {
                    if (value === "Adicionar novo cliente") {
                      setClienteInputValue('');
                    } else {
                      setClienteInputValue(value)
                    }
                  }}
                  getOptionLabel={
                    (option) => option.nome ? option.nome : ""
                  }
                  onChange={(event, newValue) => {
                    if (newValue?.nome === "Adicionar novo cliente") {
                      return handleClickOpen('cliente');
                    } else {
                      setFieldValue("cliente", newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtrado = filterOptions(options, params);
      
                    if (params.inputValue !== '') {
                      filtrado.push({
                        inputValue: params.inputValue,
                        nome: `Adicionar novo cliente`,
                      });
                    }
      
                    return filtrado;
                  }}
                  freeSolo
                  fullWidth
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      error={touched['cliente'] && !!errors['cliente']}
                      helperText={
                        touched['cliente'] 
                          ? errors['cliente']
                          : handleInitialValues().id === 0 && "Busque um cliente por nome ou cpf"
                      }
                      className={classes.input}
                      label="Cliente"
                      variant="outlined"
                      color="secondary"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={Autocomplete}
                  disabled={handleInitialValues().id !== 0}
                  name="exame"
                  id="exame"
                  options={exames}
                  inputValue={exameInputValue}
                  onInputChange={(e, value) => {
                    if (value === "Adicionar novo exame") {
                      setExameInputValue('');
                    } else {
                      setExameInputValue(value)
                    }
                  }}
                  getOptionLabel={(option) => option.nome ? option.nome : ""}
                  onChange={(event, newValue) => {
                    if (newValue?.nome === "Adicionar novo exame") {
                      setExameInputValue('');
                      return handleClickOpen('exame');
                    } else {
                      setFieldValue("exame", newValue);
                    }
                  }}
                  filterOptions={(options, params) => {
                    const filtrado = filterOptions(options, params);
      
                    if (params.inputValue !== '') {
                      filtrado.push({
                        inputValue: params.inputValue,
                        nome: `Adicionar novo exame`,
                      });
                    }
      
                    return filtrado;
                  }}
                  freeSolo
                  fullWidth
                  renderInput={(params) => (
                    <MuiTextField
                      {...params}
                      error={touched['exame'] && !!errors['exame']}
                      helperText={
                        touched['exame'] && errors['exame']
                      }
                      className={classes.input}
                      label="Exame"
                      variant="outlined"
                      color="secondary"
                      margin="normal"
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Typography variant="h5" paragraph>
              Detalhes do cliente
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <MuiTextField
                  label="Nome"
                  value={values.cliente?.nome || ""}
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label="CPF"
                  value={values.cliente?.cpf ? formataCPF(values.cliente.cpf) : ""}
                  variant="outlined"
                  color="secondary"
                  margin="normal"
                  fullWidth
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label="Data de nascimento"
                  value={values.cliente?.dataNascimento?.split('/').reverse().join('-') || ""}
                  color="secondary"
                  variant="outlined"
                  type="date"
                  margin="normal"
                  fullWidth
                  disabled
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-end"
              className={classes.footer}
            >
              <Button
                variant="outlined"
                className={classes.cancelarButton}
                component={Link}
                to="/agendamentos"
              >
                cancelar
              </Button>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                disabled={isSubmitting}
                onClick={submitForm}
              >
                salvar
              </Button>
            </Grid>
            <ClienteDialog
              open={openNovoCLiente}
              onClose={handleClose}
              onSave={handleCreateCliente}
              cliente={cliente}
            />
            <ExameDialog
              open={openNovoExame}
              onClose={handleClose}
              onSave={handleCreateExame}
              exame={exame}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default NovoAgendamento;
