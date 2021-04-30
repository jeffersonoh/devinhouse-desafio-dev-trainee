import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

import ListItemLink from "./ListItemLink";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  drawerContainer: {
    overflow: "auto",
    height: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const MenuDrawer = ({ open, logoutAction }) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant={open && "permanent"}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItemLink icon={<HomeIcon />} to="/painel" primary="Home" />

          <ListItemLink
            icon={<PictureAsPdfIcon />}
            to="/registros"
            primary="Documentos"
          />

          <ListItemLink
            icon={<PeopleAltIcon />}
            to="/usuarios"
            primary="Usuários"
          />
        </List>
        <Box>
          <Divider />
          <List>
            <ListItem button onClick={logoutAction}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </ListItem>
          </List>
        </Box>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;