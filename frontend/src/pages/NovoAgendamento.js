import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ClienteDialog from "../components/ClienteDialog";
import formataCPF from "../helpers/formataCPF";
import apiAgendamento from "../services/apiAgendamento";
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";

const useStyles = makeStyles(() => ({
  input: {
    backgroundColor: "#FFF",
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

const NovoAgendamento = () => {
  const classes = useStyles();
  const [agendamento, setAgendamento] = useState({});
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({});
  const [exame, setExame] = useState({});
  const [exames, setExames] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);

    setCliente({});
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const location = useLocation();

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
    if (location.state?.dados) {
      setAgendamento(location.state.dados);
      setCliente(location.state.dados.cliente);
      setExame(location.state.dados.exame)
    }
  }, [location]);

  const handleSave = async (agendamento, cliente, exame) => {
    const data = {
      data: agendamento.data,
      horario: agendamento.horario,
      clienteId: cliente.id,
      exameId: exame.id
    }

    if (agendamento.id) {
      data.id = agendamento.id;
      await apiAgendamento.updateAgendamento(data.id, data);
    } else {
      await apiAgendamento.createAgendamento(data);
    }
  };

  return (
    <>
      <Typography variant="h3" component="h1" paragraph>
        Cadastro de agendamento
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.input}
            label="Data"
            value={agendamento?.data?.split('/').reverse().join('-')}
            variant="outlined"
            color="secondary"
            type="date"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.input}
            label="Horário"
            value={agendamento?.horario}
            color="secondary"
            variant="outlined"
            type="time"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Autocomplete
            id="cliente"
            options={clientes}
            getOptionLabel={
              (option) => option.nome ? option.nome : ""
            }
            value={cliente}
            onChange={(event, newValue) => {
              console.log(newValue?.nome)
              if (newValue?.nome === "Adicionar novo cliente") {
                return handleClickOpen();
              } else if (newValue) {
                setCliente(newValue);
              } else {
                setCliente({})
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
              <TextField
                {...params}
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
          <Autocomplete
            id="exame"
            options={exames}
            getOptionLabel={(option) => option.nome ? option.nome : ""}
            value={exame}
            onChange={(event, newValue) => {
              newValue ? setExame(newValue) : setExame({});
            }}
            filterOptions={filterOptions}
            fullWidth
            renderInput={(params) => (
              <TextField
                {...params}
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
          <TextField
            label="Nome"
            value={cliente?.nome || ""}
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
          <TextField
            label="CPF"
            value={cliente?.cpf ? formataCPF(cliente.cpf) : ""}
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
          <TextField
            label="Data de nascimento"
            value={cliente?.dataNascimento?.split('/').reverse().join('-') || ""}
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
          onClick={() => handleSave(agendamento, cliente, exame)}
        >
          salvar
        </Button>
      </Grid>
      <ClienteDialog
        open={open}
        onClose={handleClose}
        //onSave={handleCreate}
        cliente={cliente}
        setCliente={setCliente}
      />
    </>
  );
}

export default NovoAgendamento;
