import { useEffect, useState } from "react";
import ExclusaoDialog from "../components/ExclusaoDialog";
import FiltroAgendamentos from "../components/FiltroAgendamentos";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiAgendamento from '../services/apiAgendamento';
import apiCliente from "../services/apiCliente";
import apiExame from "../services/apiExame";

const Agendamentos = () => {
  const [clientes, setClientes] = useState([]);
  const [openExclusaoDialog, setOpenExclusaoDialog] = useState(false);
  const [exames, setExames] = useState([]);
  const [agendamentoId, setAgendamentoId] = useState(0);
  const [agendamentos, setAgendamentos] = useState([]);

  const handleClickOpenExclusaoDialog = (agendamentoId) => {
    setAgendamentoId(agendamentoId);

    setOpenExclusaoDialog(true);
  };

  const handleCloseExclusaoDialog = () => {
    setOpenExclusaoDialog(false);
  };

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

  const handleDelete = async (agendamentoId) => {
    await apiAgendamento.deleteAgendamento(agendamentoId);

    setOpenExclusaoDialog(false);

    getAgendamentos();
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

export default Agendamentos;