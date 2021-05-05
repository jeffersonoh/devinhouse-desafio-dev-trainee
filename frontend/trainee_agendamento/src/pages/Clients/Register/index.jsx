import ClienteRegisterStyle from "./style";
import { useState } from "react";
import { useHistory } from "react-router";
import Actions from "../../../services/api";
import { toast } from "react-toastify";

function ClientRegister() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const data = Date();
  const history = useHistory();


  function clearDataState(){
    setNome("");
    setSobrenome("");
    setCpf("");
    setDataNascimento("");
  }

  function toastSuccess() {
    history.push('/clientes');
    toast.success(`Cliente cadastrado com sucesso!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
      clearDataState();
  }

  function toastError(message) {
    toast.error(`${message.error}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
}

  function handleRegisterClient(){
    const data = {
      "nome" : nome,
      "sobrenome" : sobrenome,
      "cpf" : cpf,
      "birthYear" : dataNascimento  
    }

    Actions.createClient(data).then(toastSuccess)
                             .catch((res) => toastError(res));
  }

  function handleSubmit(event){
    event.preventDefault();
    handleRegisterClient();
  }

  return (
    <ClienteRegisterStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Cadastrar Cliente</h2>
        </div>

        <div className="clients-card">

          <form>
            <div className="form-data">
              <div>
                <label>Nome</label>
              </div>
              <input className="form-data-input" type="text" onChange={(e) => setNome(e.target.value)} name="firstName" placeholder="Digite seu primeiro nome"/>
            </div>

            <div className="form-data">
              <div>
                <label>Sobrenome</label>
              </div>
              <input className="form-data-input" type="text" onChange={(e) => setSobrenome(e.target.value)} name="lastName" placeholder="Digite seu sobrenome"/>
            </div>

            <div className="form-data">
              <div>
                <label>CPF</label>
              </div>
              <input className="form-data-input" mask="999.999.999-99" type="text" onChange={(e) => setCpf(e.target.value)} name="cpf" placeholder="Digite seu CPF com 11 digitos"/>
            </div>

            <div className="form-data">
              <div>
                <label>Data de Nascimento</label>
              </div>
              <input className="form-data-input" type="date" max={data} onChange={(e) => setDataNascimento(e.target.value)}  max={data} name="birthYear" placeholder="01/01/2000"/>
            </div>

            <button type="submit" className="form-data-button" onClick={handleSubmit}>Cadastrar</button>

          </form>
        </div>
      </div>
    </ClienteRegisterStyle>
  )
};

export default ClientRegister;