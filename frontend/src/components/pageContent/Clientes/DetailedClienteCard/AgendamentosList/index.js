import { useState } from "react";

import {
  Modal,
  Menu,
  MenuItem,
} from "@material-ui/core";

import AgendamentoCard from "components/AgendamentoCard";
import AgendamentoUpdateForm from "components/AgendamentoUpdateForm";

import { SList, SListItem } from "./styledComponents";

import { deleteAgendamento } from "utils/api";


const AgendamentosList = (props) => {
  
  const { agendamentos, shortened, onSuccessfulAction } = props;
  
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);

  const [agendamentoMenuAnchor, setAgendamentoMenuAnchor] = useState(null);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  
  const openAgendamentoMenu = (event) => {
    setAgendamentoMenuAnchor(event.target);
  };
  
  const closeAgendamentoMenu = () => {
    setAgendamentoMenuAnchor(null);
  };
  
  const openUpdateModal = () => {
    setUpdateModalIsOpen(true);
  };
  
  const closeUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };
  
  
  return (
    <SList>
      
      <Modal open={updateModalIsOpen} onClose={closeUpdateModal}>
	<AgendamentoUpdateForm onClose={closeUpdateModal}
			       data={selectedAgendamento}
			       onSuccessfulAction={onSuccessfulAction}/>
      </Modal>
      
      { agendamentos.map(agendamento => (
	<SListItem button key={agendamento.id}
		   onClick={(event) => {
		     setSelectedAgendamento(agendamento);
		     openAgendamentoMenu(event);
		   }}>
	  <AgendamentoCard shortened={shortened} data={agendamento}/>
	</SListItem>
      ))
      }
      
      <Menu anchorEl={agendamentoMenuAnchor}
	    open={Boolean(agendamentoMenuAnchor)}
	    onClose={closeAgendamentoMenu}>
	
	<MenuItem selected={true} onClick={() => {
		    openUpdateModal();
		    closeAgendamentoMenu();
		  }}>
	  Editar
	</MenuItem>
	
	<MenuItem onClick={() => {
		    deleteAgendamento(selectedAgendamento)
		      .then(onSuccessfulAction)
		      .then(closeAgendamentoMenu);
		  }}>
	  Deletar
	</MenuItem>
	
      </Menu>
      
    </SList>
  );
};

export default AgendamentosList;
