import { withStyles } from "@material-ui/core/styles";

import {
  ListItem,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@material-ui/core";

import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Face as FaceIcon,
  Schedule as ScheduleIcon,
  Healing as HealingIcon,
} from "@material-ui/icons";

// the +/- 2's are because of unitary padding
export const closedDrawerWidth = 6;
export const openDrawerWidth = 22;
export const headerHeight = closedDrawerWidth + 2;


const iconStyles = (theme) => ({
  root: {
    padding: theme.spacing(0, 1),
    height: theme.spacing(closedDrawerWidth - 2),
    width: theme.spacing(closedDrawerWidth - 2),
  },
});

export const SMenuIcon = withStyles(iconStyles)(MenuIcon);
export const SChevronLeftIcon = withStyles(iconStyles)(ChevronLeftIcon);
export const SFaceIcon = withStyles(iconStyles)(FaceIcon);
export const SScheduleIcon = withStyles(iconStyles)(ScheduleIcon);
export const SHealingIcon = withStyles(iconStyles)(HealingIcon);

export const SNavbarListItem = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 0),
  },
}))(ListItem);

export const SDrawer = withStyles(theme => ({
  paper: {
    width: "inherit",
    overflow: "hidden",
  },
}))(Drawer);

export const SIconButton = withStyles(theme => ({
  root: {
    padding: 0,
  },
}))(IconButton);

export const SToolbar = withStyles(theme => ({
  root: {
    height: theme.spacing(headerHeight),
  },
}))(Toolbar);

const Main = ({ classes, ...props}) => (
    <main className={classes.root} {...props}/>
);

export const SMain = withStyles(theme => ({
  root: {
    marginTop: theme.spacing(headerHeight + 2),
    marginLeft: theme.spacing(closedDrawerWidth + 1),
  },
}))(Main);

export const SHeaderTallBox = withStyles(theme => ({
  root: {
    height: theme.spacing(headerHeight),
  },
}))(Box);

export const STitle = withStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
  },
}))(Typography);
