import CpfSearchStyle from "./style";
import SearchByCpfCard from "./Card";
import Button from "../../components/Button";
import { useState } from "react";
import Actions from "../../services/api";
import { toast } from "react-toastify";

function SearchByCpf() {
  const [cliente, setCliente] = useState({});
  const [searchTerm, setSearchTerm] = useState("00000000000");

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

  function toastSuccess() {
    toast.success(`CPF: ${searchTerm} localizado!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
  }

  function findClientByCpf() {
    if(searchTerm.length > 0) {
      Actions.findClientByCpf(searchTerm)
        .then((res) => (
          toastSuccess,
          setCliente(res.data)
        ))
        .catch((res) => (
          toastError(res.response.data.message),
          setCliente({})
        ));
    } 
  };

  function handleFindClient(e) {
    e.preventDefault();
    findClientByCpf();
  }

  return (
    <CpfSearchStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Consultar Cliente por CPF</h2>
        </div>

        <div className="clients-card">
          <div className="clients-card-input-div">
            <input type="text" className="clients-card-input" placeholder="Digite o CPF" onChange={(e) => setSearchTerm(e.target.value)} />
            <button onClick={handleFindClient}>Pesquisar</button>
          </div>

          { Object.keys(cliente).length > 0 ? 
            <SearchByCpfCard 
            keys = {cliente.cpf}
            titulo = "Cliente"
            data = {cliente} /> 
            : null
          }
        </div>
      </div>

      <div className="right-content">
        <div className="shortcuts-buttons">
          <div className="container-title">
            <h2>Ações</h2>
          </div>
          <div className="container-buttons">
              <Button 
              path = "/clientes"
              name = "Voltar para listagem" />
          </div>
        </div>
      </div>
    </CpfSearchStyle>
  )
}

export default SearchByCpf; 