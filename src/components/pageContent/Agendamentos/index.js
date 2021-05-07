import { useState, useEffect } from "react";

import {
  Grid,
  Modal,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { SButton } from "./styledComponents";

import AgendamentoCard from "components/AgendamentoCard";
import AgendamentoUpdateForm from "components/AgendamentoUpdateForm";

import { Skeleton } from "@material-ui/lab";

import {
  getAgendamentos as apiGetAgendamentos,
  deleteAgendamento as apiDeleteAgendamento,
} from "utils/api";


const Agendamentos = (props) => {
  
  const [agendamentos, setAgendamentos] = useState(null);
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);
  const [agendamentoFormIsOpen, setAgendamentoFormIsOpen] = useState(false);
  const [agendamentoMenuAnchor, setAgendamentoMenuAnchor] = useState(null);
  
  const getAgendamentos = () => {
    apiGetAgendamentos().then(res => setAgendamentos(res.data));
  };
  
  useEffect(() => {
    getAgendamentos();
  }, []);
  
  const handleSuccessfulAction = () => {
    getAgendamentos();
  };
  
  const openAgendamentoForm = () => {
    setAgendamentoFormIsOpen(true);
  };
  
  const closeAgendamentoForm = () => {
    setAgendamentoFormIsOpen(false);
  };
  
  const closeAgendamentoMenu = () => {
    setAgendamentoMenuAnchor(null);
  };
  
  const deleteAgendamento = () => {
    apiDeleteAgendamento(selectedAgendamento)
      .then(closeAgendamentoMenu)
      .then(handleSuccessfulAction);
  };
  
  
  return (
    <Grid container spacing={2}>
      
      <Modal open={agendamentoFormIsOpen} onClose={closeAgendamentoForm}>
	<AgendamentoUpdateForm onClose={closeAgendamentoForm}
			       data={selectedAgendamento}
			       onSuccessfulAction={handleSuccessfulAction}/>
      </Modal>
      
      <Grid item xs={12}>
	<Typography variant="h4">Agendamentos</Typography>
      </Grid>
      
      { agendamentos
	? agendamentos.map(agendamento => (
	  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={agendamento.id}>
	    <SButton onClick={(event) => {
		       setAgendamentoMenuAnchor(event.target);
		       setSelectedAgendamento(agendamento);
		     }}>
	      <AgendamentoCard data={agendamento}/>
	    </SButton>
	  </Grid>
	))
	: new Array(17).fill(null).map((_, index) => (
	  <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
	      <Skeleton variant="rect" height={66}/>
	  </Grid>
	))
      }
      
      <Menu anchorEl={agendamentoMenuAnchor}
	    open={Boolean(agendamentoMenuAnchor)}
	    onClose={closeAgendamentoMenu}>
	
	<MenuItem onClick={() => {
		    openAgendamentoForm();
		    closeAgendamentoMenu();
		  }}>
	  Editar
	</MenuItem>
	
	<MenuItem onClick={deleteAgendamento}>
	  Deletar
	</MenuItem>
      </Menu>
      
    </Grid>
  );
};

export default Agendamentos;
