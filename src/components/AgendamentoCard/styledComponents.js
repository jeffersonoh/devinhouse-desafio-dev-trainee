import { withStyles } from "@material-ui/core/styles";

import {
  Paper
} from "@material-ui/core";


export const SPaper = withStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(0, 2),
  },
}))(Paper);


