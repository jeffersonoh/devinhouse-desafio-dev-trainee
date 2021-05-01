import { Container, ExitButton } from "./styles";

import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Container>
      <h1>Clínica DEVinHouse</h1>
      <button
        className={location.pathname === "/exames" ? "selected" : "option"}
        onClick={() => {
          navigate("/exames");
        }}
      >
        Listar Exames
      </button>
      <button
        className={
          location.pathname === "/agendamento/listar" ? "selected" : "option"
        }
        onClick={() => {
          navigate("/agendamento/listar");
        }}
      >
        Listar Agendamentos
      </button>
      <button
        className="option"
        onClick={() => {
          navigate("/paciente/listar");
        }}
      >
        Listar Pacientes
      </button>
      <button
        className="option"
        onClick={() => {
          navigate("/paciente/cadastrar");
        }}
      >
        Cadastrar Paciente
      </button>
      <button
        className="option"
        id="exit"
        onClick={() => {
          navigate("/");
        }}
      >
        <ExitButton />
      </button>
    </Container>
  );
}

export default Header;
