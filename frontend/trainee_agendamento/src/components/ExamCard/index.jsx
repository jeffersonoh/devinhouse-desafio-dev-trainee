import { useState } from "react";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdEdit, MdDelete, MdDeleteForever } from "react-icons/md";
import Tooltip from "@material-ui/core/Tooltip";
import ExamStyle from "./style";
import Actions from "../../services/api";

function ExamCard(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { nome, id } = props.data;

  function handleConfirmDelete() {
    setConfirmDelete(true);
    setTimeout(() => {
      setConfirmDelete(false);
    }, 2000);
  }

  function handleRemoveExam(){
    try {
      Actions.removeExam(id);
      props.setExamesList(props.examesList.filter(exame => exame.id !== id));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ExamStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <AiFillMedicineBox className="card-header-icon"/>
            <h3>{props.titulo}</h3>
          </div>

          <div className="schedule-actions">
            {/* <div className="schedule-action">
              <MdEdit className="schedule-action-edit"/>
            </div> */}
            <div className="schedule-action">
            { confirmDelete ? 
                <Tooltip title="Confirme para apagar">
                  <div>
                    <MdDeleteForever className="schedule-action-delete confirm-delete" onClick={handleRemoveExam} />
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
            <div className="card-content-schedule-client-name">
              <p className="card-content-schedule-cliente-name-title">Código: </p>
              <p className="card-content-schedule-cliente-name-resume">{id}</p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-client-info">
              <p className="card-content-schedule-client-info-title">Nome: </p>
              <p className="card-content-schedule-client-info-name">{nome}</p>
            </div>
          </div>
        </div>
      </div>
    </ExamStyle>
  )
};

export default ExamCard;