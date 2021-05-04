import ScheduleRegisterStyle from "./style";

function ScheduleRegister() {
  return (
    <ScheduleRegisterStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Cadastrar Agendamento</h2>
        </div>

        <div className="clients-card">

          <form>
            <div className="form-data">
              <div>
                <label>Cliente:</label>
              </div>
              <select name="clients" id="clients">
                <option value="Cristian">Cristian</option>
                <option value="Cristian">Cristian</option>
                <option value="Cristian">Cristian</option>
                <option value="Cristian">Cristian</option>
                <option value="Cristian">Cristian</option>
              </select>
            </div>

            <div className="form-data">
              <div>
                <label>Exame:</label>
              </div>
              <select name="clients" id="clients">
                <option value="Raio X">Raio X</option>
                <option value="Raio X">Raio X</option>
                <option value="Raio X">Raio X</option>
                <option value="Raio X">Raio X</option>
                <option value="Raio X">Raio X</option>
              </select>
            </div>

            <div className="form-data">
              <div>
                <label>Data</label>
              </div>
              <input className="form-data-input" type="date" min="11" maxlength="11" name="cpf" placeholder="Digite a data do exame"/>
            </div>

            <div className="form-data">
              <div>
                <label>Horario</label>
              </div>
              <input className="form-data-input" type="time" min="11" maxlength="11" name="cpf" placeholder="Digite seu CPF com 11 digitos"/>
            </div>

            <button type="submit" className="form-data-button">Cadastrar</button>

          </form>
        </div>
      </div>
    </ScheduleRegisterStyle>
  )
};

export default ScheduleRegister;