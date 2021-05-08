import { makeStyles } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";

import MenuIcon from "@material-ui/icons/Menu";

import { ReactComponent as IzyLogo } from "../assets/images/logo_izy.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
}));

const Header = ({ onToggleMenu }) => {
  const classes = useStyles();

  const handleToggleMenu = () => {
    onToggleMenu();
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {onToggleMenu && (
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            data-testid="menu-toggler"
            edge="start"
            onClick={handleToggleMenu}
          >
            <MenuIcon />
          </IconButton>
        )}
        <div className={classes.logo}>
          <IzyLogo width={120} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
