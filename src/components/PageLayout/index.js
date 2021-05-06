import { useState } from "react";

import {
    AppBar,
    Divider,
    List,
    ListItemText,
    Box,
    Typography,
} from "@material-ui/core";

import {
    openDrawerWidth,
    closedDrawerWidth,
    headerHeight,
    SToolbar,
    SPageTitle,
    SDrawer,
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
    headerTall: {
	minHeight: theme.spacing(headerHeight),
    },
    openDrawer: {
	position: "absolute",
	width: theme.spacing(openDrawerWidth),
    },
    closedDrawer: {
	width: theme.spacing(closedDrawerWidth),
    },
    openAppbar: {
	zIndex: theme.zIndex.drawer - 1,
    },
    closedAppbar: {
	zIndex: theme.zIndex.drawer + 1,
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
	    <AppBar className={drawerIsOpen ? classes.openAppbar : classes.closedAppbar}>

		<SToolbar disableGutters>
		    <SIconButton onClick={openDrawer}>
			<SMenuIcon/>
		    </SIconButton>
		    <Typography variant="h4">Princeton-Plainsboro Teaching Hospital</Typography>
		</SToolbar>
	    </AppBar>
	    
	    <SDrawer className={drawerIsOpen ? classes.openDrawer : classes.closedDrawer}
		     variant="permanent">

		<Box className={classes.headerTall}
		     display="flex"
		     justifyContent="flex-end">
		    <SIconButton button onClick={closeDrawer}>
			<SChevronLeftIcon/>
		    </SIconButton>
		</Box>

		    <Divider/>

		<List>

		    <SNavbarListItem button
				     component={Link}
				     to="/clientes">
			<SFaceIcon/>
			<ListItemText>Clientes</ListItemText>
		    </SNavbarListItem>

		    <SNavbarListItem button
				     component={Link}
				     to="/agendamentos">
			<SScheduleIcon/>
			<ListItemText>Agendamentos</ListItemText>
		    </SNavbarListItem>

		    <SNavbarListItem button
				     component={Link}
				     to="/exames">
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
