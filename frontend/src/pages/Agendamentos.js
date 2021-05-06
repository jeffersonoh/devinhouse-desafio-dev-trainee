import { useEffect, useState } from "react";
import FiltroAgendamentos from "../components/FiltroAgendamentos";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiAgendamento from '../services/apiAgendamento';
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";

const Agendamentos = () => {
  const [clientes, setClientes] = useState([]);
  const [exames, setExames] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  const getClientes = async () => {
    const result = await apiCliente.findAllClientes();
  
    setClientes(result);
  };

  const getExames = async () => {
    const result = await apiExame.findAllExames();

    setExames(result);
  };

  const getAgendamentos = async () => {
    const result = await apiAgendamento.findAllAgendamentos();

    setAgendamentos(result);
  }

  useEffect(() => {
    getAgendamentos();
    getClientes();
    getExames();
  }, [])

  const filtraAgendamentos = async (clienteId = '', exameId = '') => {
    console.log(clienteId)
    const result = await apiAgendamento.filterAgendamentos(clienteId, exameId);

    setAgendamentos(result)
  };

  return (
    <>
      <PageHeader
        titulo="Agendamentos"
        tituloBotao="Novo Agendamento"
        endpoint="agendamentos"
      />
      <FiltroAgendamentos 
        clientes={clientes}
        exames={exames}
        onFilter={filtraAgendamentos}
      />
      <Tabela
        dados={agendamentos}
        titulo="agendamento"
        endpoint="agendamentos"
      />
    </>
  );
};

export default Agendamentos;