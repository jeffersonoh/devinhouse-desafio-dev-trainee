import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete, MdDeleteForever } from "react-icons/md";
import { format, parseISO } from "date-fns";
import CardStyle from "./style";
import Actions from "../../services/api";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router";

function ClientCard(props) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const { nome, sobrenome, cpf, birthYear } = props.data;
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
    history.push(`/clientes/atualizar?cpf=${cpf}`);
  }

  function handleRemoveClient() {
    try {
      Actions.removeCliente(cpf);
      props.setClientesList(props.clientesList.filter(cliente => cliente.cpf !== cpf))
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CardStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <AiOutlineUser className="card-header-icon"/>
            <h3>{props.titulo}</h3>
          </div>

          <div className="schedule-actions">
            <div className="schedule-action">
              <MdEdit className="schedule-action-edit" onClick={handleEditClient} />
            </div>
            <div className="schedule-action">
            { confirmDelete ? 
                <Tooltip title="Confirme para apagar">
                  <div>
                    <MdDeleteForever className="schedule-action-delete confirm-delete" onClick={handleRemoveClient} />
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
              <p className="card-content-schedule-cliente-name-title">Nome: </p>
              <p className="card-content-schedule-cliente-name-resume">{buildCompleteName(nome, sobrenome)} </p>
            </div>
          </div>
          <div className="card-content-schedule-exam">
            <div className="card-content-schedule-client-info">
              <p className="card-content-schedule-client-info-title">Data de Nascimento: </p>
              <p className="card-content-schedule-client-info-name">{format(parseISO(birthYear), "dd/MM/yyyy")}</p>
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