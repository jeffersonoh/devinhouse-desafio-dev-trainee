import { Container } from "./styles";

import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LightDividingLine from "../../components/LightDividingLine";
import SearchBar from "../../components/SearchBar";
import ListPatientItemModel from "../../components/ListPatientItemModel";

function PatientsListPage(props) {
  const navigate = useNavigate();
  const patients = [
    {
      patientName: "Thiago Mathias Simon",
      patientCpf: "12478959984",
      patientBornDate: "26/08/2002",
    },
    {
      patientName: "Thiago Mathias Simon",
      patientCpf: "12478959984",
      patientBornDate: "26/08/2002",
    },
    {
      patientName: "Thiago Mathias Simon",
      patientCpf: "12478959984",
      patientBornDate: "26/08/2002",
    },
    {
      patientName: "Thiago Mathias Simon",
      patientCpf: "12478959984",
      patientBornDate: "26/08/2002",
    },
  ];
  return (
    <Container>
      <Header />
      <h1>Listar pacientes</h1>
      <LightDividingLine />
      <SearchBar />
      <LightDividingLine />
      {patients.map((patient, index) => {
        return (
          <ListPatientItemModel
            key={index}
            handleClick={() => {
              navigate("/paciente/atualizar");
            }}
            patientName={patient.patientName}
            patientCpf={patient.patientCpf}
            patientBornDate={patient.patientBornDate}
          />
        );
      })}
      <Footer />
    </Container>
  );
}

export default PatientsListPage;
