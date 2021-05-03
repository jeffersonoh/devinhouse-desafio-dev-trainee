import { useState, useEffect } from "react";

import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import LightDividingLine from "../../components/LightDividingLine";
import Footer from "../../components/Footer";
import ListScheduledExamsItemModel from "../../components/ListScheduledExamsItemModel";
import Loading from "../../components/Loading";

import AgendamentosAPI from "../../services/agendamentos";

function ListScheduledExamsPage() {
  const [loaded, setLoaded] = useState(false);

  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    const agendamentos = await AgendamentosAPI.buscarAgendamentos();
    setAgendamentos(agendamentos);
  };

  const deletarAgendamento = (id) => {
    AgendamentosAPI.deletarAgendamento(id);
    carregarAgendamentos();
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <h1>Listar exames agendados</h1>
      <LightDividingLine />
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
                navigate("/agendamento/atualizar");
              }}
              handleDelete={() => {
                deletarAgendamento(exam.id);
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
      <Footer />
    </Container>
  );
}

export default ListScheduledExamsPage;
