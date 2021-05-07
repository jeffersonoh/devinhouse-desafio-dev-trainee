import { Grid, makeStyles, MenuItem, TextField, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  input: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#FFF",
    },
  },
  content: {
    marginBottom: 10,
  }
}));

const FiltroHome = ({ onFilter }) => {
  const [filtro, setFiltro] = useState('hoje');
  const classes = useStyles();

  return (
    <>
      
      <Grid
        container
        spacing={2}
        className={classes.content}
        justify="flex-end"
      >
        <Grid item xs={4} md={2}>
          <TextField
            className={classes.input}
            size="small"
            id="filtro-data"
            select
            value={filtro}
            onChange={(e,) => {
              setFiltro(e.target.value);

              onFilter(e.target.value);
            }}
            variant="outlined"
            fullWidth
          >
            <MenuItem value='hoje'>
              Hoje
            </MenuItem>
            <MenuItem value='amanha'>
              Amanhã
            </MenuItem>
            <MenuItem value='15'>
              15 dias
            </MenuItem>
            <MenuItem value='mes'>
              Este mês
            </MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </>
  );
};

export default FiltroHome;