import { Typography, makeStyles, Button } from "@material-ui/core";

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
  const classes = useStyle();
  return (
    <div className={classes.flex}>
      <Typography className={classes.margin} variant="h3">
        {" "}
        Escolha um tipo de exame:{" "}
      </Typography>
      <ExameList />
      <Button className={classes.margin} variant="contained" color="primary">
        Listar Agendamentos
      </Button>
    </div>
  );
}
