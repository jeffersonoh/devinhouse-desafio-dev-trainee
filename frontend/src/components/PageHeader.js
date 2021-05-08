import { Button, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      flexWrap: "wrap",
    },
  },
  titulo: {
    [theme.breakpoints.down('md')]: {
      fontSize: "2.5rem",
      width: "100%"
    }
  }
}));

const PageHeader = ({ titulo, tituloBotao, endpoint, abreNovo }) => {
  const classes = useStyles();
  const { width } = useWindowDimensions();

  return (
    <div className={classes.header}>
        <Typography
          variant="h3"
          component="h1"
          paragraph={width <= 575 ? true : false}
          className={classes.titulo}
        >
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
