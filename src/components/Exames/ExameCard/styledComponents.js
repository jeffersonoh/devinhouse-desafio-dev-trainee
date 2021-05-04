import {
    Paper,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

export const SPaper = withStyles(theme => ({
    root: {
	padding: theme.spacing(1),
    },
}))(Paper);
