import { AppBar, Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import MenuTopBar from 'components/menu/TopBar';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';
import AgendaLista from 'components/agenda/agendalista/AgendaLista';
import AgendaCadastro from 'components/agenda/agendacadastro/AgendaCadastro';
import AgendaEditar from 'components/agenda/agendaeditar/AgendaEditar';
import AgendaExcluir from 'components/agenda/agendaexcluir/AgendaExcluir';
import DialogoOPEditar from 'components/dialogo/DialogoOPEditar';
import DialogoOPExcluir from 'components/dialogo/DialogoOPExcluir';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const exames = [
    {id: 1, exame: "Hemograma"},
    {id: 2, exame: "Colesterol"},
    {id: 3, exame: "Creatinina e ureia"},
    {id: 4, exame: "Glicemia"},
    {id: 5, exame: "Transaminases ALT e AST"},
    {id: 6, exame: "TSH e T4 livre"},
    {id: 7, exame: "Audiometria"},
    {id: 8, exame: "Acuidade Visual"},
    {id: 9, exame: "Espirometria"},
    {id: 10, exame: "EEG"},
]

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

const PagesAgenda = () => {
    const classes = useStyles();
    const [value, setValue] = useState(1);
    const [agendaSelected, setAgendaSelected] = useState([])
    const [retorno, setRetorno] = useState(0);

    const trocaDeAba = (event, newValue) => {
        if (newValue <= 2) {
            setValue(newValue);
        } 
        else if( newValue === 3){setValue(991);}
        else if( newValue === 4){setValue(992);}
    };

    useEffect(()=> {
        if (retorno === 201){OK200("Marcação foi cadastrada!");}
        if (retorno === 202){OK200("Marcação foi editada!");}
        if (retorno === 203){OK200("Marcação foi excluida!");}
        if (retorno === 401){BAD400("Marcação não foi cadastrada!");}
        if (retorno === 402){BAD400("Marcação não foi editada!");}
        if (retorno === 403){BAD400("Marcação não foi excluida!");}
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
                        
                        <Tab label="Marcações" {...a11yProps(1)} />
                        <Tab label="Cadastrar" {...a11yProps(2)} />
                        <Tab label="Editar" {...a11yProps(3)} />
                        <Tab label="Excluir" {...a11yProps(4)} />
                    </Tabs>
                </AppBar>
                <div className={classes.childrenBody}>
                    <TabPanel value={value} index={1}>
                        <AgendaLista setValue={setValue} setAgendaSelected={setAgendaSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <AgendaCadastro setValue={setValue} examesOfertados={exames} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <AgendaEditar setValue={setValue} agendaSelected={agendaSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <AgendaExcluir setValue={setValue} agendaSelected={agendaSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                </div>               
            </div>
            
        </Fragment>
    )
}

export default PagesAgenda;