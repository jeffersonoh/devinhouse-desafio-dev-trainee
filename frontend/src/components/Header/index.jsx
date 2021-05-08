import { IconButton, Toolbar, Typography } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx"
import { Link } from "react-router-dom";

export default function Header({ handleDrawerOpen, open, theme, classes }) {
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <Link to="/">SOFT - Consultas e Exames</Link>
      </Typography>
      </Toolbar>
    </AppBar>
  )
}

