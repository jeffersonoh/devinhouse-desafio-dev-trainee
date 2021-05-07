import { useState } from "react";

import {
    Modal,
    Menu,
    MenuItem,
} from "@material-ui/core";

import AgendamentoCard from "components/AgendamentoCard";
import AgendamentoUpdateForm from "components/AgendamentoUpdateForm";

import {
    SList,
    SListItem,
} from "./styledComponents";

import { deleteAgendamento } from "utils/api";


const AgendamentosList = (props) => {

    const { agendamentos } = props;

    const [selectedAgendamento, setSelectedAgendamento] = useState(null);
    const [agendamentoMenuAnchor, setAgendamentoMenuAnchor] = useState(null);
    const [agendamentoUpdateModalIsOpen, setAgendamentoUpdateModalIsOpen] = useState(false);

    const openAgendamentoMenu = (event) => {
	setAgendamentoMenuAnchor(event.target);
    };

    const closeAgendamentoMenu = () => {
	setAgendamentoMenuAnchor(null);
    };

    const openAgendamentoUpdateModal = () => {
	setAgendamentoUpdateModalIsOpen(true);
    };

    const closeAgendamentoUpdateModal = () => {
	setAgendamentoUpdateModalIsOpen(false);
    };

    
    return (
	<SList>

	    <Modal open={agendamentoUpdateModalIsOpen}
		   onClose={closeAgendamentoUpdateModal}>
		<AgendamentoUpdateForm onClose={closeAgendamentoUpdateModal}
				       data={selectedAgendamento}/>
	    </Modal>
	    
	    { agendamentos.map(agendamento => (
		<SListItem button
			   onClick={(event) => {
			       setSelectedAgendamento(agendamento);
			       openAgendamentoMenu(event);
			   }}
			   key={agendamento.id}>
		    <AgendamentoCard data={agendamento}/>
		</SListItem>
	    ))
	    }

	    <Menu anchorEl={agendamentoMenuAnchor}
		  open={Boolean(agendamentoMenuAnchor)}
		  onClose={closeAgendamentoMenu}>

		<MenuItem selected={true}
			  onClick={() => {
			      openAgendamentoUpdateModal();
			      closeAgendamentoMenu();
			  }}>
		    Editar
		</MenuItem>

		<MenuItem onClick={() => {
			      deleteAgendamento(selectedAgendamento)
				  .then(closeAgendamentoMenu);
			  }}>
		    Deletar
		</MenuItem>

	    </Menu>

	</SList>
    );
};

export default AgendamentosList;
