import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Wrapper } from "./styles";

import { toast } from "react-toastify";

import Header from "../../components/Header";
import LightDividingLine from "../../components/LightDividingLine";
import Footer from "../../components/Footer";
import ListScheduledExamsItemModel from "../../components/ListScheduledExamsItemModel";
import Loading from "../../components/Loading";

import AgendamentosAPI from "../../services/agendamentos";

function ListScheduledExamsPage() {
  const [alterado, setAlterado] = useState(false);

  const [loaded, setLoaded] = useState(false);

  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    const agendamentos = await AgendamentosAPI.buscarAgendamentos();
    setAgendamentos(agendamentos);
  };

  const deletarAgendamento = (id) => {
    AgendamentosAPI.deletarAgendamento(id);
    carregarAgendamentos();
    setAlterado(!alterado);
  };

  useEffect(() => {
    carregarAgendamentos();
    return () => {
      setAgendamentos([]);
    };
  }, [alterado]);

  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <h1>Listar exames agendados</h1>
      <LightDividingLine />
      <Wrapper>
        {loaded === false && setTimeout(() => setLoaded(true), 3000) && (
          <Loading />
        )}
        {loaded === true &&
          agendamentos.length !== 0 &&
          agendamentos.map((exam, index) => {
            return (
              <ListScheduledExamsItemModel
                key={index}
                handleClick={() => {
                  navigate("/agendamento/atualizar/" + exam.id);
                }}
                handleDelete={() => {
                  const userConfirmation = window.confirm(
                    "Deseja realmente remover esse agendamento?!\nEssa ação não poderá ser desfeita!"
                  );
                  if (userConfirmation === true) {
                    deletarAgendamento(exam.id);
                    toast.success("O agendamento foi removido!");
                  } else {
                    toast.warning("O agendamento será mantido!");
                  }
                  setAlterado(!alterado);
                }}
                examId={exam.examId}
                examName={exam.examName}
                patientName={exam.patientName}
                examDate={exam.examDate}
                examTime={exam.examTime}
              />
            );
          })}
        {loaded === true && agendamentos.length === 0 && (
          <h2>Não há exames agendados para serem exibidos!</h2>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ListScheduledExamsPage;
