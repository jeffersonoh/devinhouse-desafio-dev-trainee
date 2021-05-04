import RegisterExamStyle from "./style";

function ExamsRegister() {
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
              <input className="form-data-input" type="text" autoComplete="false" name="examName" placeholder="Digite o nome do exame que deseja cadastrar"/>
            </div>

            <button type="submit" className="form-data-button">Cadastrar</button>
          </form>
        </div>
      </div>   
    </RegisterExamStyle>
  )
};

export default ExamsRegister;