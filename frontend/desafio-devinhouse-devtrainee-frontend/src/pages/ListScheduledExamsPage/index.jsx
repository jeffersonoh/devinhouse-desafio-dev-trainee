import { useState, useEffect } from "react";

import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import LightDividingLine from "../../components/LightDividingLine";
import Footer from "../../components/Footer";
import ListScheduledExamsItemModel from "../../components/ListScheduledExamsItemModel";

import AgendamentosAPI from "../../services/agendamentos";

function ListScheduledExamsPage() {
  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    const agendamentos = await AgendamentosAPI.buscarAgendamentos();
    setAgendamentos(agendamentos);
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
      {agendamentos.map((exam, index) => {
        return (
          <ListScheduledExamsItemModel
            key={index}
            handleClick={() => {
              navigate("/agendamento/atualizar");
            }}
            examId={exam.examId}
            examName={exam.examName}
            patientName={exam.patientName}
            examDate={exam.examDate}
            examTime={exam.examTime}
          />
        );
      })}

      <Footer />
    </Container>
  );
}

export default ListScheduledExamsPage;
