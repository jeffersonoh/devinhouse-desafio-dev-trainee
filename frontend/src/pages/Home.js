import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import ScheduleIcon from "@material-ui/icons/Schedule";
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";
import apiAgendamento from "../services/apiAgendamento";
import Tabela from "../components/Tabela";
import ExclusaoDialog from "../components/ExclusaoDialog";
import FiltroHome from "../components/FiltroHome";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 110,
  },
  gridContainer: {
    marginBottom: 20,
  }
}));

const Home = () => {
  const [openExclusaoDialog, setOpenExclusaoDialog] = useState(false);
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalExames, setTotalExames] = useState(0);
  const [totalAgendamentos, setTotalAgendamentos] = useState(0);
  const [agendamentosDia, setAgendamentosDia] = useState([]);
  const [agendamentoId, setAgendamentoId] = useState(0);

  const classes = useStyles();

  const handleClickOpenExclusaoDialog = (agendamentoId) => {
    setAgendamentoId(agendamentoId);

    setOpenExclusaoDialog(true);
  };

  const handleCloseExclusaoDialog = () => {
    setOpenExclusaoDialog(false);
  };

  const countClientes = async () => {
    const result = await apiCliente.countClientes();

    setTotalClientes(result);
  };

  const countExames = async () => {
    const result = await apiExame.countExames();

    setTotalExames(result);
  };

  const countAgendamentos = async () => {
    const result = await apiAgendamento.countAgendamentos();

    setTotalAgendamentos(result);
  };

  const getAgendamentos = async (dataInicial, dataFinal) => {
    const dados = {};
    let result;
    if (dataInicial && !dataFinal) {
      dados.dataInicial = dataInicial;
  
      result = await apiAgendamento.filterAgendamentosPorData(dados);
  
    } else if (dataInicial && dataFinal) {
      dados.dataInicial = dataInicial;
      dados.dataFinal = dataFinal;

      result = await apiAgendamento.filterAgendamentosPorData(dados);
    }
    
    return setAgendamentosDia(result);
  };

  const filtrarAgendamentos = (filtro) => {
    const data = new Date();
    const dataHoje = data.toLocaleDateString();
    const dataAmanha = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 1).toLocaleDateString();
    const data15 = new Date(data.getFullYear(), data.getMonth(), data.getDate() + 15).toLocaleDateString();
    const dataMes = new Date(data.getFullYear(), data.getMonth()+1, 0).toLocaleDateString();

    filtro === 'hoje' && getAgendamentos(dataHoje, null);
    filtro === 'amanha' && getAgendamentos(dataAmanha, null);
    filtro === '15' && getAgendamentos(dataHoje, data15);
    filtro === 'mes' && getAgendamentos(dataHoje, dataMes);
  };
  
  useEffect(() => {
    countClientes();
    countExames();
    countAgendamentos();
    getAgendamentos(new Date().toLocaleDateString(), null);
  }, []);

  const handleDelete = async (agendamentoId) => {
    await apiAgendamento.deleteAgendamento(agendamentoId);

    setOpenExclusaoDialog(false);

    getAgendamentos();
  };

  return (
    <>
      <Typography variant="h4" paragraph >
        Bem vindo ao Izy!
      </Typography>
      <Grid 
        container
        spacing={4}
        justify="flex-start"
        className={classes.gridContainer}
      >
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent className={classes.cardContainer}>
              <IconButton
                component={Link}
                to={'/clientes'}
              >
                <PeopleAltIcon fontSize="large"/>
              </IconButton>
              <Box className={classes.cardContent}>
                <Typography variant="h3">
                  {totalClientes}
                </Typography>
                <span>Clientes</span>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent className={classes.cardContainer}>
              <IconButton 
                component={Link}
                to={'/exames'}
              >
                <DescriptionIcon fontSize="large"/>
              </IconButton>
              <Box className={classes.cardContent}>
                <Typography variant="h3">
                  {totalExames}
                </Typography>
                <span>Exames</span>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent className={classes.cardContainer}>
              <IconButton
                component={Link}
                to={'/agendamentos'}
              >
                <ScheduleIcon fontSize="large"/>
              </IconButton>
              <Box className={classes.cardContent}>
                <Typography variant="h3">
                  {totalAgendamentos}
                </Typography>
                <span>Agendamentos</span>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h4" paragraph >
        Agendamentos recentes
      </Typography>
      <FiltroHome onFilter={filtrarAgendamentos} />
      <Tabela
        dados={agendamentosDia}
        titulo="agendamento"
        endpoint="agendamentos"
        onDelete={handleClickOpenExclusaoDialog}
      />
      <ExclusaoDialog
        titulo="Tem certeza que deseja excluir?"
        descricao="Esta operação não poderá ser desfeita."
        open={openExclusaoDialog}
        onClose={handleCloseExclusaoDialog}
        onDelete={handleDelete}
        entidadeId={agendamentoId}
      />
    </>
  );
};

export default Home;
