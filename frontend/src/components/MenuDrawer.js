import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";

import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import ScheduleIcon from "@material-ui/icons/Schedule";

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

const MenuDrawer = ({ open }) => {
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
          <ListItemLink
            icon={<HomeIcon />}
            to="/painel"
            name="Home"
          />

          <ListItemLink
            icon={<DescriptionIcon />}
            to="/exames"
            name="Exames"
          />

          <ListItemLink
            icon={<PeopleAltIcon />}
            to="/clientes"
            name="Clientes"
          />

          <ListItemLink
            icon={<ScheduleIcon />}
            to="/agendamentos"
            name="Agendamentos"
          />
        </List>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;