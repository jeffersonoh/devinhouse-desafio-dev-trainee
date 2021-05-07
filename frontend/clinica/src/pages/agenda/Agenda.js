import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import MenuTopBar from 'components/menu/TopBar';
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PropTypes from 'prop-types';
import AgendaLista from 'components/agenda/agendalista/AgendaLista';
import AgendaCadastro from 'components/agenda/agendacadastro/AgendaCadastro';
import AgendaEditar from 'components/agenda/agendaeditar/AgendaEditar';
import AgendaExcluir from 'components/agenda/agendaexcluir/AgendaExcluir';
import AgendaExames from 'components/agenda/agendaexames/AgendaExames';
import { useAuth } from 'providers/auth';
import { useStyles } from 'style/Style';

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

const PagesAgenda = () => {
  const { index, setIndex, setDialogo, setLinhaSelecionadaAgenda } = useAuth()
  const classes = useStyles();

  useEffect(() => {
    setIndex(1);
    setLinhaSelecionadaAgenda({ id: 0 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeTab = (e, tab) => {
    if (tab < 3) { setIndex(tab) }
    else {
      setIndex(tab);
      setDialogo(true);
    }
  }

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
              <Tab label={<ArrowBackIosIcon />} />
            </Link>

            <Tab label="Marcações" {...a11yProps(1)} />
            <Tab label="Cadastrar" {...a11yProps(2)} />
            <Tab label="Editar" {...a11yProps(3)} />
            <Tab label="Excluir" {...a11yProps(4)} />  
            <Tab label="Exames" {...a11yProps(5)} />          
          </Tabs>
        </AppBar>
        <div className={classes.childrenBody}>
          <TabPanel value={index} index={1}>
            <AgendaLista />
          </TabPanel>
          <TabPanel value={index} index={2}>
            <AgendaCadastro />
          </TabPanel>
          <TabPanel value={index} index={3}>
            <AgendaEditar />
          </TabPanel>
          <TabPanel value={index} index={4}>
            <AgendaExcluir />
          </TabPanel>
          <TabPanel value={index} index={5}>
            <AgendaExames />
          </TabPanel>
        </div>
      </div>

    </Fragment>
  )
}

export default PagesAgenda;