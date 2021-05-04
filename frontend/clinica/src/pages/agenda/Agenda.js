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
import AgendaExames from 'components/agenda/agendaexames/AgendaExames';

const lista = [
    {
      id: 1,
      data: "2021-02-24T12:00",
      exame: "Teste de Ergométrico (Teste de Esforço)",
      pacienteNome: "Lucas",
      cpf: "123.456.789-10"
    },
    {
      id: 2,
      data: "2021-02-24T13:00",
      exame: "Ressonância Magnética (RM)",
      pacienteNome: "Lucas",
      cpf: "123.456.789-10"
    },
    {
      id: 3,
      data: "2021-02-25T12:00",
      exame: "Teste de Ergométrico (Teste de Esforço)",
      pacienteNome: "Lucas",
      cpf: "123.456.789-11"
    },
    {
      id: 4,
      data: "2021-02-26T06:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-11"
    },
    {
      id: 5,
      data: "2021-02-22T15:00",
      exame: "Ressonância Magnética (RM)",
      pacienteNome: "Lucas",
      cpf: "123.456.789-11"
    },
    {
      id: 6,
      data: "2021-02-21T19:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    },
    {
      id: 7,
      data: "2021-02-21T19:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    },
    {
      id: 8,
      data: "2021-02-21T19:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    },
    {
      id: 9,
      data: "2021-02-21T19:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    },
    {
      id: 10,
      data: "2021-02-21T19:00",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    },
    {
      id: 11,
      data: "2021-02-21T19:30",
      exame: "Tomografia do coração e vasos",
      pacienteNome: "Lucas",
      cpf: "123.456.789-12"
    }
    
  ]

  const listaCliente = [
    {
      id: 1,
      nome: "Lucas",
      cpf: "123.456.789-10",
      ddn: "1984-02-24"
    },
    {
      id: 2,
      nome: "Lucas",
      cpf: "123.456.789-11",
      ddn: "1988-06-18"
    },
    {
      id: 3,
      nome: "Lucas",
      cpf: "123.456.789-12",
      ddn: "1991-07-11"
    },
    {
      id: 4,
      nome: "Lucas",
      cpf: "123.456.789-13",
      ddn: "1975-12-30"
    }
    ,
    {
      id: 5,
      nome: "Lucas",
      cpf: "123.456.789-13",
      ddn: "1975-12-30"
    }
    ,
    {
      id: 6,
      nome: "Lucas",
      cpf: "123.456.789-13",
      ddn: "1975-12-30"
    }
    ,
    {
      id: 7,
      nome: "Lucas",
      cpf: "123.456.789-13",
      ddn: "1975-12-30"
    }
  ]

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
        if (newValue <= 3) {
            setValue(newValue);
        } 
        else if( newValue === 4){setValue(991);}
        else if( newValue === 5){setValue(992);}
    };

    useEffect(()=> {
        if (retorno === 201){OK200("Marcação foi cadastrada!");}
        if (retorno === 202){OK200("Marcação foi editada!");}
        if (retorno === 203){OK200("Marcação foi excluida!");}
        if (retorno === 204){OK200("Cliente foi cadastrado!");}
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

                        <Tab label="Exames" {...a11yProps(1)} />
                        <Tab label="Marcações" {...a11yProps(2)} />
                        <Tab label="Cadastrar" {...a11yProps(3)} />
                        <Tab label="Editar" {...a11yProps(4)} />
                        <Tab label="Excluir" {...a11yProps(5)} />
                    </Tabs>
                </AppBar>
                <div className={classes.childrenBody}>
                    <TabPanel value={value} index={1}>
                        <AgendaExames examesOfertados={exames}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <AgendaLista 
                            setValue={setValue} 
                            setAgendaSelected={setAgendaSelected} 
                            setRetorno={setRetorno}
                            lista={lista}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <AgendaCadastro 
                            setValue={setValue} 
                            examesOfertados={exames} 
                            setRetorno={setRetorno}
                            listaCliente={listaCliente}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <AgendaEditar setValue={setValue} agendaSelected={agendaSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <AgendaExcluir setValue={setValue} agendaSelected={agendaSelected} setRetorno={setRetorno}/>
                    </TabPanel>
                </div>               
            </div>
            
        </Fragment>
    )
}

export default PagesAgenda;