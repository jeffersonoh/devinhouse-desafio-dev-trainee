import { Typography, makeStyles} from "@material-ui/core";
import { useLoginContext } from "../../utils/login.context";

import ExameMenu from "../../components/ExameMenu";

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
}));

export default function HomePage() {
  const classes = useStyle();
  const {
    login: {state },
  } = useLoginContext();
  return (
    <div className={classes.flex}>
      { state === "waiting" ?
      <Typography variant="h4">
        Bem Vindo, efetue o Login ou Cadastro para continuar.
      </Typography>
      :
      <>
        <ExameMenu/>
      </>
      }
    </div>
  );
};
