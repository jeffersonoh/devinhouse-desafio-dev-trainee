import Busca from "../components/Busca";
import PageHeader from "../components/PageHeader";
import Tabela from '../components/Tabela';

function createData(nome, cpf, dataNascimento) {
  return { nome, cpf, dataNascimento };
}

const rows = [
  createData('Frozen yoghurt', "03373504503", "03/08/1988"),
  createData('Ice cream sandwich', "03373504503", "03/08/1988"),
  createData('Eclair', "03373504503", "03/08/1988"),
  createData('Cupcake', "03373504503", "03/08/1988"),
  createData('Gingerbread', "03373504503", "03/08/1988"),
];

const Clientes = () => {
  return (
    <>
      <PageHeader titulo="Clientes" tituloBotao="Novo Cliente" />
      <Busca titulo="Filtrar documentos" label="Buscar cliente" id="cliente" />
      <Tabela dados={rows} />
    </>
  );
};

export default Clientes;
