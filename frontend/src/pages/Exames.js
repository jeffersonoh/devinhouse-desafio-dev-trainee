import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Busca from "../components/Busca";
import ExameDialog from "../components/ExameDialog";
import ExclusaoDialog from "../components/ExclusaoDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiExame from '../services/apiExame';

const Exames = () => {
  const [open, setOpen] = useState(false);
  const [openExclusaoDialog, setOpenExclusaoDialog] = useState(false);
  const [exame, setExame] = useState(undefined);
  const [exameId, setExameId] = useState(0);
  const [exames, setExames] = useState([]);

  const getExames = async () => {
    const result = await apiExame.findAllExames();

    setExames(result);
  };

  useEffect(() => {
    getExames();
  }, []);

  const buscaExames = async (termoBusca) => {
    const result = await apiExame.searchExames(termoBusca);

    setExames(result)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenExclusaoDialog = (exameId) => {
    setExameId(exameId);

    setOpenExclusaoDialog(true);
  };

  const handleClose = () => {
    setOpen(false);

    setExame(undefined);
  };

  const handleCloseExclusaoDialog = () => {
    setOpenExclusaoDialog(false);
  };

  const handleCreate = async (exame) => {
    try {
      if (exame.id === 0) {
        await apiExame.createExame(exame);
      } else {
        await apiExame.updateExame(exame.id, exame);
      }
  
      setOpen(false);
  
      setExame(undefined);
  
      getExames();

      toast.success('Exame cadastrado com sucesso');
    } catch (error) {
      toast.error(error.response.data.mensagem);
    }
  };

  const handleUpdate = async (exame) => {
    setExame(exame);

    setOpen(true);
  }

  const handleDelete = async (exameId) => {
    await apiExame.deleteExame(exameId);

    setOpenExclusaoDialog(false);

    getExames();
  };

  return (
    <>
      <PageHeader
        titulo="Exames"
        tituloBotao="Novo Exame"
        endpoint="exames"
        abreNovo={handleClickOpen}
      />
      <Busca
        titulo="Filtrar exames"
        label="Buscar exame"
        id="exame"
        onClick={buscaExames}
      />
      <Tabela
        dados={exames}
        titulo="exame"
        endpoint="exames"
        abreUpdate={handleUpdate}
        onDelete={handleClickOpenExclusaoDialog}
      />
      <ExameDialog 
        open={open}
        onClose={handleClose}
        onSave={handleCreate}
        exame={exame}
      />
      <ExclusaoDialog
        titulo="Tem certeza que deseja excluir?"
        descricao="Esta operação não poderá ser desfeita. Todos os agendamentos para este exame serão excluidos."
        open={openExclusaoDialog}
        onClose={handleCloseExclusaoDialog}
        onDelete={handleDelete}
        entidadeId={exameId}
      />
    </>
  );
};

export default Exames;
