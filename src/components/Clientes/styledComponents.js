import {
    Button,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";


export const SButton = withStyles(theme => ({
    root: {
	textTransform: "none",
	textAlign: "inherit",
	padding: 0,
	width: "100%",
    },
}))(Button);
