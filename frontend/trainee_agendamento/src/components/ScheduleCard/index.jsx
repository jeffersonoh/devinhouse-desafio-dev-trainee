import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete, MdDeleteForever } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import CardStyle from "./style";
import Actions from "../../services/api";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router";

function ScheduleCard(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const {id, cliente, exame, dataAgendamento} = props.data;
  const history = useHistory();

  function buildCompleteName(nome, sobrenome){
    return `${nome} ${sobrenome}`;
  }

  function handleConfirmDelete() {
    setConfirmDelete(true);
    setTimeout(() => {
      setConfirmDelete(false);
    }, 2000);
  }

  function handleEditClient(){
    history.push(`/agendamentos/atualizar?id=${id}`);
  }

  function handleRemoveSchedule(){
    try {
      Actions.removeSchedule(id);
      props.setSchedulesList(props.schedulesList.filter(agendamento => agendamento.id !== id))
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <CardStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <BsListTask className="card-header-icon"/>
            <h3>{props.titulo}</h3>
          </div>
          <div className="schedule-date-info">
            <div className="schedule-date">
              <p className="schedule-date-title">Data:</p>
              <p className="schedule-date-info-data">{format(parseISO(dataAgendamento), "dd/MM/yyyy")}</p>
            </div>
            <div className="schedule-time">
              <p className="schedule-time-title">Horário:</p>
              <p className="schedule-date-info-data">{format(parseISO(dataAgendamento), "HH:mm")}</p>
            </div>
          </div>

          <div className="schedule-actions">
            <div className="schedule-action">
              <MdEdit className="schedule-action-edit" onClick={handleEditClient} />
            </div>
            <div className="schedule-action">
              { confirmDelete ? 
                <Tooltip title="Confirme para apagar">
                  <div>
                    <MdDeleteForever className="schedule-action-delete confirm-delete" onClick={handleRemoveSchedule} />
                  </div>
                </Tooltip>          
             : 
                <Tooltip title="Apagar">    
                  <div>
                    <MdDelete className="schedule-action-delete" onClick={handleConfirmDelete} />
                  </div>
                </Tooltip>    
              }  
            </div>
          </div>
        </div>

        <div className="card-content">
          <div className="card-content-schedule-client">
            <div className="card-content-schedule-client-icon">
              <AiOutlineUser />
            </div>
            <div className="card-content-schedule-client-name">
              <p className="card-content-schedule-cliente-name-title">Cliente: </p>
              <p className="card-content-schedule-cliente-name-resume">{buildCompleteName(cliente.nome, cliente.sobrenome)}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-exam-name">
              <p className="card-content-schedule-exam-name-title">Exame: </p>
              <p className="card-content-schedule-exam-name-name">{exame.nome}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyle>  
  )
};

export default ScheduleCard;