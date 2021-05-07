import { Button, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  input: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFF",
    }
  },
  content: {
    marginBottom: 40,
  }
}));

const filterOptions = createFilterOptions({
  matchFrom: 'any',
  stringify: (option) => option.cpf ? option.nome + option.cpf : option.nome,
});

const FiltroAgendamentos = ({ clientes, exames, onFilter }) => {
  const [cliente, setCliente] = useState({});
  const [exame, setExame] = useState({});
  const classes = useStyles();

  return (
    <>
      <Typography display="block" gutterBottom>
        Filtrar agendamentos
      </Typography>
      <Grid
        container
        spacing={2}
        className={classes.content}
        alignItems="center"
      >
        <Grid item xs={4} md={3}>
          <Autocomplete
            className={classes.input}
            id="filtro-cliente"
            options={clientes}
            getOptionLabel={(option) => option.nome ? option.nome : ""}
            filterOptions={filterOptions}
            value={cliente}
            onChange={(e, value) => setCliente(value)}
            renderInput={(params) => <TextField {...params} label="Cliente" variant="outlined" />}
            noOptionsText="Nenhum cliente"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} md={3}>
          <Autocomplete
            className={classes.input}
            id="filtro-exame"
            options={exames}
            getOptionLabel={(option) => option.nome ? option.nome : ""}
            filterOptions={filterOptions}
            value={exame}
            onChange={(e, value) => setExame(value)}
            renderInput={(params) => <TextField {...params} label="Exames" variant="outlined" />}
            noOptionsText="Nenhum exame"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            fullWidth
            onClick={() => onFilter(cliente?.id, exame?.id)}
          >
            filtrar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FiltroAgendamentos;
