import { Box, FormGroup, IconButton, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  filter: {
    width: "70%"
  },
  input: {
    backgroundColor: "#FFF",
  },
}));

const Busca = ({ titulo, label, id, onClick }) => {
  const classes = useStyles();
  const [termoBusca, setTermoBusca] = useState('');

  return (
    <>
      <Typography display="block" gutterBottom>
        {titulo}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        mb={6}
      >
        <FormGroup row className={classes.filter}>
          <TextField
            className={classes.input}
            id={id}
            label={label}
            variant="outlined"
            color="secondary"
            value={termoBusca}
            size="small"
            onChange={(e) => setTermoBusca(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={() => onClick(termoBusca)}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </FormGroup>
      </Box>
    </>
  );
}

export default Busca;
