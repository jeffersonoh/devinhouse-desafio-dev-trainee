import SearchByCpfCardStyle from "./style";
import { AiOutlineUser } from "react-icons/ai";
import { MdEdit, MdDelete, MdDeleteForever } from "react-icons/md";
import { format, parseISO } from "date-fns";


function SearchByCpfCard(props) {
  const { nome, sobrenome, cpf, birthYear } = props.data;

  function buildCompleteName(nome, sobrenome){
    return `${nome} ${sobrenome}`;
  }

  return (
    <SearchByCpfCardStyle>
      <div className="card">
        <div className="card-header">
          <div className="card-header-schedule-icon">
            <AiOutlineUser className="card-header-icon"/>
            <h3>{props.titulo}</h3>
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
    </SearchByCpfCardStyle>
  )
}

export default SearchByCpfCard;