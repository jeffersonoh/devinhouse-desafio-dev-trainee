import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Busca from "../components/Busca";
import ClienteDialog from "../components/ClienteDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiCliente from '../services/apiCliente';

const Clientes = () => {
  const [open, setOpen] = useState(false);
  const [cliente, setCliente] = useState(undefined);
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

    setCliente(undefined);
  };

  const handleCreate = async (cliente) => {
    try {
      const data = {
        ...cliente,
        dataNascimento: cliente.dataNascimento.split('-').reverse().join('/')
      };
  
      if (cliente.id === 0) {
        await apiCliente.createCliente(data);
      } else {
        data.id = cliente.id;
        await apiCliente.updateCliente(data.id, data);
      }
  
      setOpen(false);
  
      setCliente(undefined);
  
      getClientes();

      toast.success('Cliente cadastrado com sucesso');
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
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
        endpoint="clientes"
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
      />
    </>
  );
};

export default Clientes;
