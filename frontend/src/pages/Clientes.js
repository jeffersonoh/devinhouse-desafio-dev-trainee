import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiCliente from '../services/apiCliente';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const getClientes = async () => {
      const result = await apiCliente.findAllClientes();

      setClientes(result);
    }
    getClientes();
  }, [])

  const buscaClientes = async (termoBusca) => {

    console.log(termoBusca)
    const result = await apiCliente.searchClientes(termoBusca);

    console.log(result)

    setClientes(result)
  };

  return (
    <>
      <PageHeader titulo="Clientes" tituloBotao="Novo Cliente" />
      <Busca
        titulo="Filtrar documentos"
        label="Buscar cliente"
        id="cliente"
        onClick={buscaClientes}
      />
      <Tabela dados={clientes} titulo="cliente" />
    </>
  );
};

export default Clientes;
