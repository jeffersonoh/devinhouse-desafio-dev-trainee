import PageWrapper from "../../components/PageWrapper";
import Header from "../../components/header";
import FormClienteEdicao from "../../components/formClienteEdicao";

function clienteAlteracao() {
  return (
    <>
      <PageWrapper>
        <Header />
        <FormClienteEdicao />
      </PageWrapper>
    </>
  );
}

export default clienteAlteracao;
