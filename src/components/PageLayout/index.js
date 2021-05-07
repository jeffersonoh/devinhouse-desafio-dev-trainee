import { useState } from "react";
import clsx from "clsx";

import {
  AppBar,
  Divider,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";

import {
  openDrawerWidth,
  closedDrawerWidth,
  headerHeight,
  SToolbar,
  STitle,
  SDrawer,
  SHeaderTallBox,
  SNavbarListItem,
  SIconButton,
  SMenuIcon,
  SChevronLeftIcon,
  SFaceIcon,
  SScheduleIcon,
  SHealingIcon,
  SMain,
} from "./styledComponents";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  openDrawer: {
    position: "absolute",
    width: theme.spacing(openDrawerWidth),
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  closedDrawer: {
    width: theme.spacing(closedDrawerWidth),
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  openAppbar: {
    zIndex: theme.zIndex.drawer - 1,
    paddingLeft: theme.spacing(openDrawerWidth - closedDrawerWidth),
    transition: theme.transitions.create("padding", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  closedAppbar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create("padding", {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  openToolbar: {
    marginLeft: theme.spacing(closedDrawerWidth),
  },
}));

const PageLayout = (props) => {
  
  const { children } = props;
  
  const classes = useStyles();
  
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };
  
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };
  
  return (
    <>
      <AppBar className={clsx(
		drawerIsOpen && classes.openAppbar ,
		!drawerIsOpen && classes.closedAppbar,
	      )}>
	<SToolbar className={clsx(drawerIsOpen && classes.openToolbar)}
		  disableGutters>

	  { drawerIsOpen
	    ? null
	    : <SIconButton onClick={openDrawer}>
		<SMenuIcon/>
	      </SIconButton>
	  }

	  <STitle variant="h4">Princeton-Plainsboro Teaching Hospital</STitle>
	</SToolbar>
      </AppBar>
      
      <SDrawer className={clsx(
		 drawerIsOpen && classes.openDrawer,
		 !drawerIsOpen && classes.closedDrawer,
	       )}
	       variant="permanent">
	
	<SHeaderTallBox display="flex" justifyContent="flex-end">
	  <SIconButton onClick={closeDrawer}>
	    <SChevronLeftIcon/>
	  </SIconButton>
	</SHeaderTallBox>
	
	<Divider/>
	
	<List>
	  
	  <SNavbarListItem button component={Link} to="/clientes"
			   onClick={closeDrawer}>
	    <SFaceIcon/>
	    <ListItemText>Clientes</ListItemText>
	  </SNavbarListItem>
	  
	  <SNavbarListItem button component={Link} to="/agendamentos"
			   onClick={closeDrawer}>
	    <SScheduleIcon/>
	    <ListItemText>Agendamentos</ListItemText>
	  </SNavbarListItem>
	  
	  <SNavbarListItem button component={Link} to="/exames"
			   onClick={closeDrawer}>
	    <SHealingIcon/>
	    <ListItemText>Exames</ListItemText>
	  </SNavbarListItem>
	  
	</List>
      </SDrawer>
      
      <SMain>
	{children}
      </SMain>
    </>
  );
};

export default PageLayout;
