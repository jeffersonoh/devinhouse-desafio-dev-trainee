import { Box } from '@material-ui/core';
import MenuTopBar from 'components/menu/TopBar';
import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import ClienteLista from 'components/clientelista/ClienteLista';
import ClienteCadastro from 'components/clientecadastro/ClienteCadastro'
import ClienteEditar from 'components/clienteeditar/ClienteEditar'
import ClienteExcluir from 'components/clienteexcluir/ClienteExcluir';
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    body: {
        display: "flex",
        alignItems: "top",
        justifyContent: "center",
        padding: 8,
        backgroundColor: "#e0f2f1",
        height: "100vh"
    },
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: "800px",
        backgroundColor: theme.palette.primary.main,
        marginTop: 70,
        height: "550px",
        borderRadius: "0 0 5px 5px"
    }
}));

const PagesCliente = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const [clienteSelected, setClienteSelected] = useState([])

    const handleChange = (event, newValue) => {
        if (newValue < 3) {
            setValue(newValue);
        } else if (newValue > 2) {
            alert("Selecione algum cliente da lista para acessar essa função!")
        }
    };
    
    return (
        <Fragment>
            <MenuTopBar />
            <div className={classes.body}>
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Link to="/">
                                <Tab label={<ArrowBackIcon/>} />
                            </Link>
                            
                            <Tab label="Lista" {...a11yProps(1)} />
                            <Tab label="Cadastrar" {...a11yProps(2)} />
                            <Tab label="Editar" {...a11yProps(3)} />
                            <Tab label="Excluir" {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    
                    <TabPanel value={value} index={1}>
                        <ClienteLista setValue={setValue} setClienteSelected={setClienteSelected}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <ClienteCadastro setValue={setValue}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                    <ClienteEditar setValue={setValue} clienteSelected={clienteSelected}/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                    <ClienteExcluir setValue={setValue} clienteSelected={clienteSelected}/>
                    </TabPanel>
                </div>
            </div>
        </Fragment>
    )
}

export default PagesCliente;