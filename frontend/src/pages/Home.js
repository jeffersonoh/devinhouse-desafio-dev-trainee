import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardContent, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DescriptionIcon from "@material-ui/icons/Description";
import ScheduleIcon from "@material-ui/icons/Schedule";
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";
import apiAgendamento from "../services/apiAgendamento";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
}));

const Home = () => {
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalExames, setTotalExames] = useState(0);
  const [totalAgendamentos, setTotalAgendamentos] = useState(0);

  const classes = useStyles();

  const countClientes = async () => {
    const result = await apiCliente.countClientes();

    setTotalClientes(result);
  }

  const countExames = async () => {
    const result = await apiExame.countExames();

    setTotalExames(result);
  }

  const countAgendamentos = async () => {
    const result = await apiAgendamento.countAgendamentos();

    setTotalAgendamentos(result);
  }
  
  useEffect(() => {
    countClientes();
    countExames();
    countAgendamentos();
  }, [])

  return (
    <Grid 
      container
      spacing={4}
      justify="flex-start"
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
  );
};

export default Home;
