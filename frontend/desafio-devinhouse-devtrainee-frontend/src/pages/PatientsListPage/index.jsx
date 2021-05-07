import { useEffect } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { testCpf } from "../../util/CPFValidation";

import { Container } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightDividingLine from "../../components/LightDividingLine";
import SearchBar from "../../components/SearchBar";
import ListPatientItemModel from "../../components/ListPatientItemModel";
import Loading from "../../components/Loading";

import PacientesAPI from "../../services/pacientes";
import AgendamentosAPI from "../../services/agendamentos";

function PatientsListPage() {
  const [alterado, setAlterado] = useState(false);
  const [patients, setPatients] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  const carregarAgendamentos = async () => {
    const agendamentos = await AgendamentosAPI.buscarAgendamentos();
    setAgendamentos(agendamentos);
  };

  const carregarPacientes = async (cpf) => {
    const patients = await PacientesAPI.buscarPacientes(cpf);
    setPatients(patients);
  };

  const deletarPaciente = (id, cpf) => {
    PacientesAPI.deletarPaciente(id);
    agendamentos.forEach((agendamento) => {
      if (agendamento.patientCpf === cpf) {
        AgendamentosAPI.deletarAgendamento(agendamento.id);
      }
    });
    setAlterado(!alterado);
    carregarPacientes();
  };

  useEffect(() => {
    carregarPacientes();
    carregarAgendamentos();

    return () => {
      setPatients([]);
      setAgendamentos([]);
    };
  }, [alterado]);

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <h1>Listar pacientes</h1>
      <LightDividingLine />
      <SearchBar
        handleClick={(cpf) => {
          if (testCpf(cpf)) {
            carregarPacientes(cpf);
          } else {
            toast.warning("Por obséquio, informe um CPF válido!");
          }
        }}
      />
      <LightDividingLine />
      {loaded === false && setTimeout(() => setLoaded(true), 3000) && (
        <Loading />
      )}
      {loaded === true &&
        patients.length !== 0 &&
        patients.map((patient, index) => {
          return (
            <ListPatientItemModel
              key={index}
              handleClick={() => {
                navigate("/paciente/atualizar/" + patient.id);
              }}
              handleDelete={() => {
                const userConfirmation = window.confirm(
                  "Deseja realmente remover esse paciente?!\nEssa ação não poderá ser desfeita!"
                );
                if (userConfirmation === true) {
                  deletarPaciente(patient.id, patient.patientCpf);
                  toast.success("O paciente foi removido!");
                } else {
                  toast.warning("O paciente será mantido!");
                }
              }}
              patientName={patient.patientName}
              patientCpf={patient.patientCpf}
              patientBornDate={patient.patientBornDate}
            />
          );
        })}
      {loaded === true && patients.length === 0 && (
        <h2>Não há pacientes para serem exibidos!</h2>
      )}
      <Footer />
    </Container>
  );
}

export default PatientsListPage;
