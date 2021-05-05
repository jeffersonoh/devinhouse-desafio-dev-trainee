import { useEffect, useState } from "react";
import Busca from "../components/Busca";
import ExameDialog from "../components/ExameDialog";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';
import apiExame from '../services/apiExame';

const Exames = () => {
  const [open, setOpen] = useState(false);
  const [exame, setExame] = useState({});
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

    setExame({});
  };

  const handleCreate = async (cliente) => {
    if (cliente.id) {
      await apiExame.updateExame(cliente.id, cliente);
    } else {
      await apiExame.createExame(cliente);
    }

    setOpen(false);

    setExame({});

    getExames();
  };

  const handleUpdate = async (exame) => {
    setExame(exame);

    console.log(exame)

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
        setExame={setExame}
      />
    </>
  );
};

export default Exames;
