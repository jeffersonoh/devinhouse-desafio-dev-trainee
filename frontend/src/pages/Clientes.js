import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Busca from "../components/Busca";
import ClienteDialog from "../components/ClienteDialog";
import ExclusaoDialog from "../components/ExclusaoDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiCliente from '../services/apiCliente';

const Clientes = () => {
  const [open, setOpen] = useState(false);
  const [openExclusaoDialog, setOpenExclusaoDialog] = useState(false);
  const [cliente, setCliente] = useState(undefined);
  const [clienteId, setClienteId] = useState(0);
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

  const handleClickOpenExclusaoDialog = (clienteId) => {
    setClienteId(clienteId);

    setOpenExclusaoDialog(true);
  };

  const handleClose = () => {
    setOpen(false);

    setCliente(undefined);
  };

  const handleCloseExclusaoDialog = () => {
    setOpenExclusaoDialog(false);
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
  };

  const handleDelete = async (clienteId) => {
    await apiCliente.deleteCliente(clienteId);

    setOpenExclusaoDialog(false);

    getClientes();
  };

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
        onDelete={handleClickOpenExclusaoDialog}
      />
      <ClienteDialog
        open={open}
        onClose={handleClose}
        onSave={handleCreate}
        cliente={cliente}
      />
      <ExclusaoDialog
        titulo="Tem certeza que deseja excluir?"
        descricao="Esta operação não poderá ser desfeita. Todos os agendamentos para este cliente serão excluidos."
        open={openExclusaoDialog}
        onClose={handleCloseExclusaoDialog}
        onDelete={handleDelete}
        entidadeId={clienteId}
      />
    </>
  );
};

export default Clientes;
