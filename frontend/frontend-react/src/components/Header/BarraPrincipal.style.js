import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    iconButton: {
      marginRight: theme.spacing(125),
      marginLeft: theme.spacing(1)
    },
    button: {
      marginRight: theme.spacing(1),
    },
  }));

  export default useStyles;