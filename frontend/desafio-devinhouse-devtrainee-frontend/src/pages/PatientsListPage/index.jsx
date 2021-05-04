import { useEffect } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

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
    carregarPacientes();
  };

  useEffect(() => {
    carregarPacientes();
    carregarAgendamentos();
  }, []);

  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <h1>Listar pacientes</h1>
      <LightDividingLine />
      <SearchBar
        handleClick={(cpf) => {
          console.log("CPF", cpf);
          carregarPacientes(cpf);
          console.log(patients);
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
                console.log(patient.id);
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
