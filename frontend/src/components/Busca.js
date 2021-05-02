import { Box, FormGroup, IconButton, InputAdornment, makeStyles, TextField, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

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

const Busca = ({ titulo, label, id }) => {
  const classes = useStyles();

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
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit" className={classes.iconButton} aria-label="search">
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
