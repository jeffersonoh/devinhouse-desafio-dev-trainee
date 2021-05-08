import {
  Paper,
  IconButton,
  Box,
} from "@material-ui/core";

import {
  Close as CloseIcon,
} from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";


export const SPaper = withStyles(theme => ({
  root: {
    position: "relative",
    padding: theme.spacing(2, 5, 2, 9),
  }
}))(Paper);

const CloseButton = (props) => (
    <IconButton {...props}>
    <CloseIcon/>
    </IconButton>
);

export const STopRightCloseButton = withStyles(theme => ({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    
    "&:hover": {
      backgroundColor: "transparent",
    },
  }
}))(CloseButton);

export const STopLeftBox = withStyles(theme => ({
  root: {
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
  },
}))(Box);
