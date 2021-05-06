import {
    List,
    ListItem,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";


export const SList = withStyles(theme => ({
    root: {
	padding: 0,
    },
}))(List);

export const SListItem = withStyles(theme => ({
    root: {
	padding: theme.spacing(0.5, 0),
    },
}))(ListItem);
