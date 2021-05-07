import Header from "../../components/header";
import ListagemAgendamentos from "../../components/listagemAgendamentos";

import PageWrapper from "../../components/PageWrapper";

function AgendamentosListagem() {
  return (
    <>
      <PageWrapper>
        <Header />
        <ListagemAgendamentos />
      </PageWrapper>
    </>
  );
}

export default AgendamentosListagem;
