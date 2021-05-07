import { useState, useEffect } from "react";

import { Grid, Typography } from "@material-ui/core";

import AgendamentosList from "components/AgendamentosList";

import { getAgendamentos as apiGetAgendamentos } from "utils/api";


const Agendamentos = (props) => {
  
  const [agendamentos, setAgendamentos] = useState([]);

  const getAgendamentos = () => {
    apiGetAgendamentos().then(res => setAgendamentos(res.data));
  };
  
  useEffect(() => {
    getAgendamentos();
  }, []);

  const handleSuccessfulAction = () => {
    getAgendamentos();
  };
  
  return (
    <Grid container spacing={2}>
      
      <Grid item xs={12}>
	<Typography variant="h4">Agendamentos</Typography>
      </Grid>
      
      <Grid item xs={12}>
	<AgendamentosList agendamentos={agendamentos}
			  onSuccessfulAction={handleSuccessfulAction}/>
      </Grid>
      
    </Grid>
  );
};

export default Agendamentos;
