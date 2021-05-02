import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiAgendamento from '../services/apiAgendamento';

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const getAgendamentos = async () => {
      const result = await apiAgendamento.findAllAgendamentos();

      setAgendamentos(result);
    }
    getAgendamentos();
  }, [])

  const buscaAgendamentos = async (termoBusca) => {
    const result = await apiAgendamento.searchAgendamentos(termoBusca);

    setAgendamentos(result)
  };

  return (
    <>
      <PageHeader titulo="Agendamentos" tituloBotao="Novo Agendamento" />
      <Busca
        titulo="Filtrar agendamentos"
        label="Buscar agendamento"
        id="agendamento"
        onClick={buscaAgendamentos}
      />
      <Tabela dados={agendamentos} titulo="agendamento" />
    </>
  );
};

export default Agendamentos;