import { withStyles } from "@material-ui/core/styles";

import { TextField } from "@material-ui/core";

export const STextField = withStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
  },
}))(TextField);
