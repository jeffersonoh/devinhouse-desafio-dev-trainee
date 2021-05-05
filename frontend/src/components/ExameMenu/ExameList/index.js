import {
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useState, useEffect } from "react";

import ExameAPI from "../../../service/exameAPI";

const useStyle = makeStyles((theme) => ({
  item: {
    width: 400,
  },
}));

export default function ExameList() {
  const classes = useStyle();
  const [exames, setExames] = useState([]);
  useEffect(() => {
    const recuperarLista = async () => {
      const examesLista = await ExameAPI.buscarTodosExame();
      setExames(examesLista);
    };
    recuperarLista();
  }, []);

  return (
      <List>
        {exames?.map((exames) => (
          <ListItem
            className={classes.item}
            key={exames.idExame}
            divider
            button
          >
            <ListItemText
              disableTypography
              primary={<Typography variant="h4"> {exames.idExame}: {exames.nome} </Typography>}
            />
          </ListItem>
        ))}
      </List>
  );
}
