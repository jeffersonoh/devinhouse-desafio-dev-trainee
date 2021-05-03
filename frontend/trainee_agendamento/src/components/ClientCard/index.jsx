import CardStyle from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";

function ClientCard(props) {
  const { titulo, nome, cpf, data_nascimento } = props;

  return (
    <CardStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <AiOutlineUser className="card-header-icon"/>
            <h3>{titulo}</h3>
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
            <div className="card-content-schedule-client-name">
              <p className="card-content-schedule-cliente-name-title">Nome: </p>
              <p className="card-content-schedule-cliente-name-resume">{nome}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-client-info">
              <p className="card-content-schedule-client-info-title">Data de Nascimento: </p>
              <p className="card-content-schedule-client-info-name">{data_nascimento}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-client-info">
              <p className="card-content-schedule-client-info-title">CPF: </p>
              <p className="card-content-schedule-client-info-name">{cpf}</p>
            </div>
          </div>
        </div>
      </div>
    </CardStyle>
  )
};

export default ClientCard;