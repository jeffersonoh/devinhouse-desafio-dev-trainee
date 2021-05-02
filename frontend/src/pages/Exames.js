import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiExame from '../services/apiExame';

const Exames = () => {
  const [exames, setExames] = useState([]);

  useEffect(() => {
    const getExames = async () => {
      const result = await apiExame.findAllExames();

      setExames(result);
    }
    getExames();
  }, [])

  const buscaExames = async (termoBusca) => {

    console.log(termoBusca)
    const result = await apiExame.searchExames(termoBusca);

    console.log(result)

    setExames(result)
  };

  return (
    <>
      <PageHeader titulo="Exames" tituloBotao="Novo Exame" />
      <Busca
        titulo="Filtrar exames"
        label="Buscar exame"
        id="exame"
        onClick={buscaExames}
      />
      <Tabela dados={exames} titulo="exame" />
    </>
  );
};

export default Exames;