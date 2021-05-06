import { useState } from "react";

import {
    Modal,
} from "@material-ui/core";

import AgendamentoCard from "components/AgendamentoCard";
import AgendamentoUpdateForm from "components/AgendamentoUpdateForm";

import {
    SList,
    SListItem,
} from "./styledComponents";


const AgendamentosList = (props) => {

    const { clienteData } = props;

    const [updateCandidateData, setUpdateCandidateData] = useState({});
    const [agendamentoUpdateModalIsOpen, setAgendamentoUpdateModalIsOpen] = useState(false);
    
    const openAgendamentoUpdateModal = (agendamento) => {
	setUpdateCandidateData({
	    ...agendamento,
	    cliente: {
		...clienteData,
	    },
	});
	setAgendamentoUpdateModalIsOpen(true);
    }

    const closeAgendamentoUpdateModal = () => {
	setAgendamentoUpdateModalIsOpen(false);
    }
    
    return (
	<SList>

	    <Modal open={agendamentoUpdateModalIsOpen}
		   onClose={closeAgendamentoUpdateModal}>
		<AgendamentoUpdateForm onClose={closeAgendamentoUpdateModal}
				       data={updateCandidateData}/>
	    </Modal>
	    
	    { clienteData.agendamentos.map(agendamento => (
		<SListItem button
			   onClick={() => openAgendamentoUpdateModal(agendamento)}
			   key={agendamento.id}>
		    <AgendamentoCard data={agendamento}/>
		</SListItem>
	    ))
	    }
	</SList>
    );
};

export default AgendamentosList;
