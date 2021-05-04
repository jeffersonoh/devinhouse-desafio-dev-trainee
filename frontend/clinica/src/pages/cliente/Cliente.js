import { AppBar, Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import MenuTopBar from 'components/menu/TopBar';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';
import ClienteExcluir from 'components/cliente/clienteexcluir/ClienteExcluir';
import ClienteEditar from 'components/cliente/clienteeditar/ClienteEditar';
import ClienteCadastro from 'components/cliente/clientecadastro/ClienteCadastro';
import ClienteLista from 'components/cliente/clientelista/ClienteLista';
import DialogoOPEditar from 'components/dialogo/DialogoOPEditar';
import DialogoOPExcluir from 'components/dialogo/DialogoOPExcluir';
import { useAuth } from 'providers/auth';

const useStyles = makeStyles((theme) => ({
    body: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 30,
        padding: 8,
        backgroundColor: "#e0f2f1",
        height: "100vh",
        
    },
    childrenBody: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        maxWidth: "900px"
    },
    menu: {
        width: "100%",
        maxWidth: "900px"
    }
}));

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const PagesCliente = () => {
    const { index, setIndex, setDialogo } = useAuth()
    const classes = useStyles();

    useEffect(()=> {
        setIndex(1);
    },[])

    const onChangeTab = (e,tab) => {
        if (tab < 3) {setIndex(tab)}
        else {
            setIndex(tab);
            setDialogo(true);
        }
    }
    console.log("index", index);
    return (
        <Fragment>
            <MenuTopBar />
            <div className={classes.body}>
                <AppBar position="static" color="default" className={classes.menu}>
                    <Tabs
                        value={index}
                        onChange={onChangeTab} 
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Link to="/">
                            <Tab label={<ArrowBackIosIcon/>} />
                        </Link>
                        
                        <Tab label="Clientes" {...a11yProps(1)} />
                        <Tab label="Cadastrar" {...a11yProps(2)} />
                        <Tab label="Editar" {...a11yProps(3)} />
                        <Tab label="Excluir" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <div className={classes.childrenBody}>
                    <TabPanel value={index} index={1}>
                        <ClienteLista />
                    </TabPanel>
                    <TabPanel value={index} index={2}>
                        <ClienteCadastro />
                    </TabPanel>
                    <TabPanel value={index} index={3}>
                     {/*    <ClienteEditar /> */}
                    </TabPanel>
                    <TabPanel value={index} index={4}>
                       {/*  <ClienteExcluir /> */}
                    </TabPanel>
                </div>               
            </div>
            
        </Fragment>
    )
}

export default PagesCliente;