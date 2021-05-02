import CardStyle from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import { BsListTask } from "react-icons/bs";


function Card(props) {
  const {data, hora, nome, exame} = props;
  

  return (
    <CardStyle>
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header-schedule-icon">
            <BsListTask className="cart-header-icon"/>
            <h3>AGENDAMENTO</h3>
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

        <div className="cart-content">
          <div className="cart-content-schedule-client">
            <div className="cart-content-schedule-client-icon">
              <AiOutlineUser />
            </div>
            <div className="cart-content-schedule-client-name">
              <p className="cart-content-schedule-cliente-name-title">Cliente: </p>
              <p className="cart-content-schedule-cliente-name-resume">{nome}</p>
            </div>
          </div>
          <div className="cart-content-schedule-exam">
            <div className="cart-content-schedule-exam-name">
              <p className="cart-content-schedule-exam-name-title">Exame: </p>
              <p className="cart-content-schedule-exam-name-name">{exame}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyle>  
  )
};

export default Card;