import { useState, useEffect } from "react";

import {
  Grid,
  Modal,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";

import { SButton } from "./styledComponents";

import AgendamentoCard from "components/AgendamentoCard";
import AgendamentoUpdateForm from "components/AgendamentoUpdateForm";

import {
	Skeleton,
	Pagination,
	PaginationItem,
} from "@material-ui/lab";

import { useRouteMatch, Link } from "react-router-dom";

import {
  getAgendamentosPage as apiGetAgendamentosPage,
  deleteAgendamento as apiDeleteAgendamento,
} from "utils/api";


const Agendamentos = (props) => {
   
  const match = useRouteMatch("/agendamentos/:page");
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [agendamentos, setAgendamentos] = useState(null);
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);
  const [agendamentoFormIsOpen, setAgendamentoFormIsOpen] = useState(false);
  const [agendamentoMenuAnchor, setAgendamentoMenuAnchor] = useState(null);
  
  useEffect(() => {
          setPage(match ? match.params.page : 1);
  }, []);

  const getAgendamentosPage = () => {
          if (page !== null) {
                  setAgendamentos(null)
              apiGetAgendamentosPage({ page: parseInt(page) - 1, size: 17 })
                .then(res => {
                  setAgendamentos(res.data.content);
                  setTotalPages(res.data.totalPages);
                })
          }
  };

  useEffect(getAgendamentosPage, [page]);
  

  const handleSuccessfulAction = () => {
    getAgendamentosPage();
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

      <Grid item xs={12}>
          <Box display="flex"
          justifyContent="center">
          <Pagination page={page} count={totalPages}
          onChange={(_, value) => setPage(value)}
          variant="outlined"
          renderItem={(props) => (
                  <PaginationItem
                  component={Link}
                  to={{
                        pathname: `/agendamentos/${props.page}`,
                        key: props.page,
                  }}
                  {...props}
                  />
          )}/>
          </Box>
      </Grid>

      
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
