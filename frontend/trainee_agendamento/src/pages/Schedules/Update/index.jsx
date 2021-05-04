import ScheduleUpdateStyle from "./style";

function ScheduleUpdate() {
  return (
    <ScheduleUpdateStyle>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Atualizar Agendamento</h2>
        </div>

        <div className="clients-card">

          <form>
            <div className="form-data">
              <div>
                <label>Digite a nova data:</label>
              </div>
              <input className="form-data-input" type="date" min="11" maxlength="11" name="date"/>
            </div>

            <div className="form-data">
              <div>
                <label>Digite o novo horário:</label>
              </div>
              <input className="form-data-input" type="time" min="11" maxlength="11" name="datetime" />
            </div>

            <button type="submit" className="form-data-button">Salvar</button>

          </form>
        </div>
      </div>
    </ScheduleUpdateStyle>
  )
};

export default ScheduleUpdate;