import Main from "../../components/Main";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import axios from "axios"; 

function Clients() {
  const [clientesList, setClientesList] = useState([]);

  const instance = axios.create({
    baseURL: 'http://localhost:8080/backend',
    headers: {'api-version' : '1'}
  });
 
  function findClientList() {
    instance.get(`/clientes/v1/consultar`)
      .then((res) => {
        setClientesList(res.data);
      });    
  }

  useEffect(() => {
    findClientList();
  }, []);

  return (
    <Main>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Clientes Cadastrados</h2>
        </div>

        <div className="clients-card">
          { clientesList.length > 0 ? clientesList.map((data) => {
            return (
              <ClientCard 
              titulo = "Cliente"
              key = {data.id}
              nome = {data.nome}
              cpf = {data.cpf}
              data_nascimento = {data.birthYear} />
              )
              })
    
             : "Nenhum cliente cadastrado"
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
              path = "/clientes/cadastrar"
              name = "Cadastrar Cliente" />

              <Button 
              path = "#"
              name = "Consultar CPF" />
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Clients;