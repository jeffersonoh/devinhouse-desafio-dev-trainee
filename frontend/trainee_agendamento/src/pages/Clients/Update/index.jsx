import ClientUpdateStyle from "./style";

function ClientUpdate() {

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
              <input className="form-data-input" type="text" autoComplete="false" name="firstName" placeholder="Digite seu primeiro nome"/>
            </div>

            <div className="form-data">
              <div>
                <label>Sobrenome</label>
              </div>
              <input className="form-data-input" type="text" name="lastName" placeholder="Digite seu sobrenome"/>
            </div>

            <div className="form-data">
              <div>
                <label>Data de Nascimento</label>
              </div>
              <input className="form-data-input" type="date" name="birthYear" placeholder="01/01/2000"/>
            </div>

            <button type="submit" className="form-data-button">Salvar</button>

          </form>
        </div>
      </div>
    </ClientUpdateStyle>
  )
};

export default ClientUpdate;