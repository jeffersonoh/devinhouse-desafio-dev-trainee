import Main from "../../components/Main";
import ClientCard from "../../components/ClientCard";
import Button from "../../components/Button";

function Clients() {
  return (
    <Main>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Clientes Cadastrados</h2>
        </div>

        <div className="clients-card">
            <ClientCard 
            titulo = "Cliente"
            nome = "Jose da Silva"
            cpf = "12345678998"
            data_nascimento = "24/09/2020" />

            <ClientCard 
            titulo = "Cliente"
            nome = "Jose da Silva"
            cpf = "12345678998"
            data_nascimento = "24/09/2020" />

            <ClientCard 
            titulo = "Cliente"
            nome = "Jose da Silva"
            cpf = "12345678998"
            data_nascimento = "24/09/2020" />

            <ClientCard 
            titulo = "Cliente"
            nome = "Jose da Silva"
            cpf = "12345678998"
            data_nascimento = "24/09/2020" />
        </div>
      </div>

      <div className="right-content">
        <div className="shortcuts-buttons">
          <div className="container-title">
            <h2>Ações</h2>
          </div>
          <div className="container-buttons">
              <Button 
              name = "Cadastrar Cliente" />

              <Button 
              name = "Consultar CPF" />
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Clients;