import { Typography, makeStyles, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import ExameList from "./ExameList";

const useStyle = makeStyles((theme) => ({
  margin: {
    margin: 10,
  },
  flex: {
    display: "flex",
    "flex-direction": "column",
    width: '450px',
  },
}));

export default function ExameMenu() {
  let history = useHistory();
  const classes = useStyle();
  function listarAgendamentos() {
    history.replace("/agendamentos");
  }
  return (
    <div className={classes.flex}>
      <Typography className={classes.margin} variant="h3">
        {" "}
        Escolha um tipo de exame:{" "}
      </Typography>
      <ExameList />
      <Button 
        className={classes.margin} 
        variant="contained" 
        color="primary"
        onClick={listarAgendamentos}
        >
        Listar Agendamentos
      </Button>
    </div>
  );
}
