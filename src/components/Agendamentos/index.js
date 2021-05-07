import { useState, useEffect } from "react";

import AgendamentosList from "components/Clientes/AgendamentosList";

import { getAgendamentos } from "utils/api";

const Agendamentos = (props) => {
    
    const [agendamentos, setAgendamentos] = useState([]);
    
    useEffect(() => {
	getAgendamentos()
	    .then(res => setAgendamentos(res.data));
    }, []);
    
    return (
	<AgendamentosList agendamentos={agendamentos}/>
    );
};
	    
export default Agendamentos;
