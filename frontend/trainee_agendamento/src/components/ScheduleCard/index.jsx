import CardStyle from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { BsListTask } from "react-icons/bs";


function ScheduleCard(props) {
  const {titulo, nome, exame, data, hora} = props;
  

  return (
    <CardStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <BsListTask className="card-header-icon"/>
            <h3>{titulo}</h3>
          </div>
          <div className="schedule-date-info">
            <div className="schedule-date">
              <p className="schedule-date-title">Data:</p>
              <p className="schedule-date-info-data">{data}</p>
            </div>
            <div className="schedule-time">
              <p className="schedule-time-title">Horário:</p>
              <p className="schedule-date-info-data">{hora}</p>
            </div>
          </div>

          <div className="schedule-actions">
            <div className="schedule-action">
              <MdEdit className="schedule-action-edit"/>
            </div>
            <div className="schedule-action">
              <MdDelete className="schedule-action-delete"/>
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
              <p className="card-content-schedule-cliente-name-resume">{nome}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-exam-name">
              <p className="card-content-schedule-exam-name-title">Exame: </p>
              <p className="card-content-schedule-exam-name-name">{exame}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyle>  
  )
};

export default ScheduleCard;