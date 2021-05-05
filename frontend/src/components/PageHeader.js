import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
}));

const PageHeader = ({ titulo, tituloBotao, endpoint, abreNovo }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
        <Typography variant="h3" component="h1">
          {titulo}
        </Typography>
        {endpoint === "clientes" || endpoint === "exames"
          ? (
            <Button 
              variant="contained"
              color="secondary"
              onClick={abreNovo}
            >
              {tituloBotao}
            </Button>
          )
          : (
            <Button 
              variant="contained"
              color="secondary"
              component={Link}
              to={{
                pathname: `${endpoint}/criar`,
              }}
            >
              {tituloBotao}
            </Button>
          )
        }
        
      </div>
  );
}

export default PageHeader;
