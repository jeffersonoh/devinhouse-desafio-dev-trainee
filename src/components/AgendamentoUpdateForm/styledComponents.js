import { withStyles } from "@material-ui/core/styles";

import {
  Paper,
  IconButton,
} from "@material-ui/core";

import {
  Close as CloseIcon,
} from "@material-ui/icons";

export const SPaper = withStyles(theme => ({
  root: {
    position: "absolute",
    top: theme.spacing(5),
    right: 0,
    left: 0,
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "600px",
    maxHeight: "280px",
  },
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
  },
}))(CloseButton);
