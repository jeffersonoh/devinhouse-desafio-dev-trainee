// fazer aqui a estilização da area de dropdown
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    droDown: {
      marginRight: theme.spacing()
    },
    button: {
      flexGrow: 1,
    },
  }));

  export default useStyles;