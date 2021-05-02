import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
}));

const PageHeader = ({ titulo, tituloBotao }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
        <Typography variant="h3" component="h1">
          {titulo}
        </Typography>
        <Button 
          variant="contained"
          color="secondary"
        >
          {tituloBotao}
        </Button>
      </div>
  );
}

export default PageHeader;
