import {
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


import { useExameContext } from "../../../utils/exameSelect.context";
import ExameAPI from "../../../service/exameAPI";

const useStyle = makeStyles((theme) => ({
  item: {
    width: 400,
  },
}));

export default function ExameList() {
  let history = useHistory();
  const classes = useStyle();
  const {
    salvar,
  } = useExameContext();
  const [exames, setExames] = useState([]);
  useEffect(() => {
    const recuperarLista = async () => {
      const examesLista = await ExameAPI.buscarTodosExame();
      setExames(examesLista);
    };
    recuperarLista();
  }, []);

  function cadastrarAgendamentoDoExame(exameDado) {
    salvar(exameDado);
    history.replace("/agendar");
  }
  
  return (
    <List>
      {exames?.map((exames) => (
        <ListItem
          className={classes.item}
          key={exames.idExame}
          divider
          button
          onClick={() => {
            cadastrarAgendamentoDoExame({
              idExame: exames.idExame,
              nome: exames.nome,
            });
          }}
        >
          <ListItemText
            disableTypography
            primary={
              <Typography variant="h4">
                {exames.idExame}: {exames.nome}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
