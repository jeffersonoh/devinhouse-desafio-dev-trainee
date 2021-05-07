import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { toast } from "react-toastify";
import Actions from "../../../services/api";
import ScheduleUpdateStyle from "./style";
import { format, parseISO } from "date-fns";

function ScheduleUpdate() {
  const [schedule, setSchedule] = useState({});
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const history = useHistory();
  const useQuery = new URLSearchParams(useLocation().search);
  const query = useQuery;
  const term = query.get("id");
  const maxDateInput = Date.now();

  function toastSuccess() {
    history.push("/agendamentos")
    toast.success(`Agendamento atualizado com sucesso!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });                    
  }

  function formatDate(data, horario){
    return format(parseISO(`${data}T${horario}`), "yyyy-MM-dd HH:mm:ss");
  }

  function updateSchedule() {
    const newData = {
      "dataAgendamento" : formatDate(data, hora) 
    }

    Actions.updateSchedule(schedule.id, newData)
      .then(toastSuccess)
      .catch((e) => console.log(e));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateSchedule();
  }

  useEffect(() => {
    Actions.findScheduleById(term)
      .then((res) => {
        setSchedule(res.data);
      });
  }, [term]);

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
              <input className="form-data-input" type="date" name="data" onChange={(e) => setData(e.target.value)} min={format(maxDateInput, "yyyy-MM-dd")}/>
            </div>

            <div className="form-data">
              <div>
                <label>Digite o novo horário:</label>
              </div>
              <input className="form-data-input" type="time" name="hora" onChange={(e) => setHora(e.target.value)} />
            </div>
            <button type="submit" className="form-data-button" onClick={handleSubmit}>Salvar</button>
          </form>
        </div>
      </div>
    </ScheduleUpdateStyle>
  )
};

export default ScheduleUpdate;