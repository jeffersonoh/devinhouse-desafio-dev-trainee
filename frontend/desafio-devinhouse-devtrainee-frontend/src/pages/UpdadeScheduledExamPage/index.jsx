import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { Container, Buttons, Button, BackButton } from "./styles";

import { formatterDate } from "../../util/dateFormat";
import { desformatterDate } from "../../util/dateDesformate";
import { validateTime } from "../../util/timeValidation";
import { validateExamDate } from "../../util/examDateValidation";

import LightDividingLine from "../../components/LightDividingLine";
import ScheduleExam from "../../components/ScheduleExam";
import Loading from "../../components/Loading";

import AgendamentoAPI from "../../services/agendamentos";

function UpdadeScheduledExamPage() {
  const initialScheduledExam = {
    examName: "",
    examId: "",
    patientValue: "",
    cpfValue: "",
    dateValue: "",
    examTimeValue: "",
  };

  const [scheduledExam, setScheduledExam] = useState(initialScheduledExam);

  const { id } = useParams();

  const procurarAgendamento = async () => {
    const scheduledExam = await AgendamentoAPI.procurarAgendamento(id);
    setScheduledExam(scheduledExam);
  };

  const atualizarAgendamento = (scheduledExam) => {
    AgendamentoAPI.updateScheduledExam(scheduledExam, id);
  };

  useEffect(() => {
    procurarAgendamento();
  }, []);

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();
  return (
    <Container>
      <h1>Atualizar agendamento</h1>
      <LightDividingLine />
      {loaded === false && setTimeout(() => setLoaded(true), 3000) && (
        <Loading />
      )}
      {loaded === true && (
        <ScheduleExam
          examName={scheduledExam.examName}
          examId={scheduledExam.examId}
          patientValue={scheduledExam.patientName}
          cpfValue={scheduledExam.patientCpf}
          dateValue={desformatterDate(scheduledExam.examDate)}
          examTimeValue={scheduledExam.examTime}
          children={
            <>
              <Buttons>
                <Button>
                  <button
                    className="back"
                    onClick={(e) => {
                      navigate("/agendamento/listar");
                      e.preventDefault();
                    }}
                  >
                    <BackButton />
                  </button>
                </Button>
                <Button>
                  <button
                    type="button"
                    className="register"
                    onClick={(e) => {
                      const date = document.getElementById("date").value;
                      const time = document.getElementById("time").value;
                      if (
                        (validateExamDate(date) === false ? "" : date) === ""
                      ) {
                        toast.error("Informe uma data válida!");
                      } else if (
                        (validateTime(date, time) === false ? "" : time) === ""
                      ) {
                        toast.error("Informe um horário válido!");
                      } else {
                        const scheduled = {
                          examDate: formatterDate(date),
                          examTime: time,
                        };

                        atualizarAgendamento(scheduled);

                        navigate("/agendamento/listar");
                        e.preventDefault();
                      }
                    }}
                  >
                    Atualizar
                  </button>
                </Button>
              </Buttons>
            </>
          }
        />
      )}
    </Container>
  );
}

export default UpdadeScheduledExamPage;
