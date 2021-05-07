import CpfSearchStyle from "./style";
import Main from "../../components/Main";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Actions from "../../services/api";

function SearchByCpf() {
  const [client, setClient] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const useQuery = new URLSearchParams(useLocation().search);
  const query = useQuery;
  const term = query.get("cpf");

  function findClientByCpf() {
    Actions.findClientByCpf(term)
      .then((res) => {
        setClient(res.data);
      }
      );
  };

  useEffect(() => {
    findClientByCpf(term);
  }, [term])

  console.log(client);

  return (
    <CpfSearchStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Consultar Cliente por CPF</h2>
        </div>

        <div className="clients-card">
          <div className="clients-card-input-div">
            {/* <label className="clients-card-input-label">Digite o CPF:</label> */}
            <div>
              <input type="text" className="clients-card-input" placeholder="Digite o CPF" onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>



          {/* { clientesList.length > 0 ? clientesList.map((cliente) => {
            return (
              <ClientCard 
              key = {cliente.cpf}
              titulo = "Cliente"
              data = {cliente} 
              clientesList = {clientesList}
              setClientesList = {setClientesList} />
              )
              })
            : "Nenhum cliente cadastrado"
          } */}
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