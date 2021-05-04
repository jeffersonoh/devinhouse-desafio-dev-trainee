import { Typography, makeStyles} from "@material-ui/core";
import { useLoginContext } from "../../utils/login.context";

import ExameList from "../../components/ExameList";


const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    "align-items": "center",
    "flex-direction": "column",
  },
}));

const HomePage = ({}) => {
  const classes = useStyle();
  const {
    login: { state },
  } = useLoginContext();
  return (
    <div className={classes.flex}>
      { state === "waiting" ?
      <Typography variant="h4">
        Bem Vindo, efetue o Login ou Cadastro para continuar.
      </Typography>
      :
        <ExameList/>
      }
    </div>
  );
};

export default HomePage;
