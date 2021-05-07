import Header from "../../components/header";

import ListagemCliente from "../../components/listagemCliente";

import PageWrapper from "../../components/PageWrapper";

function ClientesListagem() {
  return (
    <>
      <PageWrapper>
        <Header />
        <ListagemCliente />
      </PageWrapper>
    </>
  );
}

export default ClientesListagem;
