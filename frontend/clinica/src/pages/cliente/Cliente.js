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
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const OK200 = (msg) => toast.info(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
const BAD400 = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

const PagesCliente = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const [clienteSelected, setClienteSelected] = useState([])
    const [retorno, setRetorno] = useState(0);

    const trocaDeAba = (event, newValue) => {
        if (newValue <= 2) {
            setValue(newValue);
        } 
        else if( newValue === 3){setValue(991);}
        else if( newValue === 4){setValue(992);}
    };

    useEffect(()=> {
        if (retorno === 201){OK200("Cliente foi cadastrado!");}
        if (retorno === 202){OK200("Cliente foi editado!");}
        if (retorno === 203){OK200("Cliente foi excluido!");}
        if (retorno === 401){BAD400("Cliente não foi cadastrado!");}
        if (retorno === 402){BAD400("Cliente não foi editado!");}
        if (retorno === 403){BAD400("Cliente não foi excluido!");}
        setRetorno(0);
    },[retorno])

    return (
        <Fragment>
            <ToastContainer />
            {value === 991 
                &&
                <DialogoOPEditar chamado={true} setValue={setValue}/>
            }
            {value === 992 
                &&
                <DialogoOPExcluir chamado={true} setValue={setValue}/>
            }
            <MenuTopBar />
            <div className={classes.body}>
                <AppBar position="static" color="default" className={classes.menu}>
                    <Tabs
                        value={value}
                        onChange={trocaDeAba} 
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
                    <TabPanel value={value} index={1}>
                        <ClienteLista setValue={setValue} setClienteSelected={setClienteSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ClienteCadastro setValue={setValue} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <ClienteEditar setValue={setValue} clienteSelected={clienteSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <ClienteExcluir setValue={setValue} clienteSelected={clienteSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                </div>               
            </div>
            
        </Fragment>
    )
}

export default PagesCliente;