import { useEffect } from "react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightDividingLine from "../../components/LightDividingLine";
import SearchBar from "../../components/SearchBar";
import ListPatientItemModel from "../../components/ListPatientItemModel";
import Loading from "../../components/Loading";

import PacietesAPI from "../../services/pacientes";

function PatientsListPage(props) {
  const [patients, setPatients] = useState([]);

  const carregarPacientes = async (cpf) => {
    console.log("CpF", cpf);
    const patients = await PacietesAPI.buscarPacientes(cpf);
    setPatients(patients);
  };

  const deletarPaciente = (id) => {
    PacietesAPI.deletarPaciente(id);
    carregarPacientes();
  };

  useEffect(() => {
    carregarPacientes();
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
                navigate("/paciente/atualizar");
              }}
              handleDelete={() => {
                deletarPaciente(patient.id);
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
