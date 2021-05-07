import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import Actions from "../../../services/api";
import ClientUpdateStyle from "./style";

function ClientUpdate() {
  const [cliente, setCliente] = useState({});
  const history = useHistory();
  const useQuery = new URLSearchParams(useLocation().search);
  const query = useQuery;
  const term = query.get("cpf");

  function handleChange(e) {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value
    })
  }

  function toastSucess() {
    history.push("/clientes")
    toast.success(`Cliente atualizado com sucesso!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });                    
  }

  function updateClient() {
    const newData = {
      "nome" : cliente.nome,
      "sobrenome" : cliente.sobrenome,
      "birthYear" : cliente.birthYear
    }
    
  Actions.updateClient(cliente.cpf, newData)
    .then(toastSucess)
    .catch((e) => console.log(e));    
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateClient();
  }

  useEffect(() => {
    Actions.findClientByCpf(term)
      .then((res) => {
        setCliente(res.data);
      });
  }, [term]);
  
  return (
    <ClientUpdateStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Editar Cliente</h2>
        </div>

        <div className="clients-card">
          <form>
            <div className="form-data">
              <div>
                <label>Nome</label>
              </div>
              <input className="form-data-input" type="text" autoComplete="false" name="nome" value={cliente.nome} onChange={handleChange} />
            </div>

            <div className="form-data">
              <div>
                <label>Sobrenome</label>
              </div>
              <input className="form-data-input" type="text" name="sobrenome" value={cliente.sobrenome} onChange={handleChange} />
            </div>

            <div className="form-data">
              <div>
                <label>Data de Nascimento</label>
              </div>
              <input className="form-data-input" type="date" name="birthYear" value={cliente.birthYear} onChange={handleChange} />
            </div>
            <button type="submit" className="form-data-button" onClick={handleSubmit}>Salvar</button>
          </form>
        </div>
      </div>
    </ClientUpdateStyle>
  )
};

export default ClientUpdate;