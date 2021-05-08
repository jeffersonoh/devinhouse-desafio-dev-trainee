import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import MiniDrawer from '../Drawer';
import Header from '../Header';
import useStyles from './MainStructure-styled';

const MainStructure = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <div className={classes.root}>
      <Header classes={classes} theme={theme} handleDrawerOpen={handleDrawerOpen} open={open} />
      <MiniDrawer classes={classes} handleDrawerClose={handleDrawerClose} open={open} theme={theme} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
          {children}
      </main>
    </div>
  )
}

export default MainStructure
