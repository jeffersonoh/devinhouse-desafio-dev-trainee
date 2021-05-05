import { useState } from "react";
import { useHistory } from "react-router";
import Actions from "../../../services/api";
import RegisterExamStyle from "./style";
import { toast } from "react-toastify";

function ExamsRegister() {
  const [nome, setNome] = useState("");
  const history = useHistory();

  function clearDataState() {
    setNome("");
  }

  function toastSucess() {
    history.push('/exames');
    toast.success(`Exame cadastrado com sucesso!`, {
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
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
  }

  function handleRegisterExam() {
    const data = {
      "nome" : nome
    }

    Actions.createExam(data).then(toastSucess)
                           .catch(response => toastError(response));
  }

  function handleSubmit(event){
    event.preventDefault();
    handleRegisterExam();
  }

  return (
    <RegisterExamStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Cadastrar Exame</h2>
        </div>

        <div className="clients-card">

          <form>
            <div className="form-data">
              <div>
                <label>Nome</label>
              </div>
              <input className="form-data-input" type="text" onChange={(e) => setNome(e.target.value)} name="examName" placeholder="Digite o nome do exame que deseja cadastrar"/>
            </div>

            <button type="submit" className="form-data-button" onClick={handleSubmit} >Cadastrar</button>
          </form>
        </div>
      </div>   
    </RegisterExamStyle>
  )
};

export default ExamsRegister;