import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import ExameDialog from "../components/ExameDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiExame from '../services/apiExame';

const Exames = () => {
  const [open, setOpen] = useState(false);
  const [exame, setExame] = useState(undefined);
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

  const handleClose = () => {
    setOpen(false);

    setExame(undefined);
  };

  const handleCreate = async (exame) => {
    if (exame.id === 0) {
      await apiExame.createExame(exame);
    } else {
      await apiExame.updateExame(exame.id, exame);
    }

    setOpen(false);

    setExame(undefined);

    getExames();
  };

  const handleUpdate = async (exame) => {
    setExame(exame);

    setOpen(true);
  }

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
      />
      <ExameDialog 
        open={open}
        onClose={handleClose}
        onSave={handleCreate}
        exame={exame}
      />
    </>
  );
};

export default Exames;
