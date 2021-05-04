import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import ClienteDialog from "../components/ClienteDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiCliente from '../services/apiCliente';

const Clientes = () => {
  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState({});
  const [clientes, setClientes] = useState([]);

  const getClientes = async () => {
    const result = await apiCliente.findAllClientes();

    setClientes(result);
  };

  useEffect(() => {
    getClientes();
  }, []);

  const buscaClientes = async (termoBusca) => {
    const result = await apiCliente.searchClientes(termoBusca);

    setClientes(result)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setCliente({});
  };

  const handleCreate = async (cliente) => {
    if (cliente.id) {
      await apiCliente.updateCliente(cliente.id, cliente);
    } else {
      await apiCliente.createCliente(cliente);
    }

    setOpen(false);

    setCliente({});

    getClientes();
  };

  const handleUpdate = async (cliente) => {
    setCliente(cliente);

    setOpen(true);
  }

  return (
    <>
      <PageHeader 
        titulo="Clientes"
        tituloBotao="Novo Cliente"
        abreNovo={handleClickOpen}
      />
      <Busca
        titulo="Filtrar documentos"
        label="Buscar cliente"
        id="cliente"
        onClick={buscaClientes}
      />
      <Tabela
        dados={clientes}
        titulo="cliente"
        endpoint="clientes"
        abreUpdate={handleUpdate}
      />
      <ClienteDialog
        open={open}
        onClose={handleClose}
        onSave={handleCreate}
        cliente={cliente}
        setCliente={setCliente}
      />
    </>
  );
};

export default Clientes;
