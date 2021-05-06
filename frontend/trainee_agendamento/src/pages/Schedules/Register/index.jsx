import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import ScheduleRegisterStyle from "./style";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import Actions from "../../../services/api";
import { toast } from "react-toastify";

function ScheduleRegister() {
  const [clienteList, setClientList] = useState([]);
  const [exameList, setExameList] = useState([]);
  const [cliente, setCliente] = useState("");
  const [exame, setExame] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const maxDateInput = Date.now();
  const history = useHistory();

  const instance = axios.create({
    baseURL: 'http://localhost:8080/backend',
    headers: {'api-version' : '1'}
  });

  function findClients() {
    instance.get(`/clientes/v1/consultar`)
      .then((res) => {
        setClientList(res.data);
      });    
  }

  function findExams() {
    instance.get(`/exames/v1/consultar`)
    .then((res) => {
      setExameList(res.data);
    });    
  }

  function formatDate(data, horario){
    return format(parseISO(`${data}T${horario}`), "yyyy-MM-dd HH:mm:ss");
  }

  function toastSucess() {
    history.push('/agendamentos');
    toast.success(`Agendamento cadastrado com sucesso!`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
  }

  function toastError(message) {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });                    
  }

  function handleCreateSchedule() {
    const info = {
      "cliente" : {
        "cpf" : cliente
      },
      "exame" : {
        "nome" : exame
      },
      "dataAgendamento" : formatDate(data, horario)
    }

    Actions.createSchedule(info)
      .then(toastSucess)
      .catch(res => toastError(res.response.data.message));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateSchedule();
  }

  useEffect(() => {
    findClients();
    findExams();
  }, []);

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
              <select name="clients" id="clients" onChange={(e) => setCliente(e.target.value)}>
                <option value="">Selecione o cliente</option>
                { clienteList.length > 0 ? clienteList.map((data) => {
                  return (
                  <option value={data.cpf}>{data.nome}</option>
                )
                    })
                  : " "
                }
              </select>
            </div>

            <div className="form-data">
              <div>
                <label>Exame:</label>
              </div>
              <select name="clients" id="clients" onChange={(e) => setExame(e.target.value)}>
                <option value="">Selecione o exame</option>
                { exameList.length > 0 ? exameList.map((data) => {
                    return (
                    <option value={data.nome}>{data.nome}</option>
                  )
                  })
                  : " "
                }
              </select>
            </div>

            <div className="form-data">
              <div>
                <label>Data</label>
              </div>
              <input className="form-data-input" type="date" name="data" onChange={(e) => setData(e.target.value)} min={format(maxDateInput, "yyyy-MM-dd")} />
            </div>

            <div className="form-data">
              <div>
                <label>Horario</label>
              </div>
              <input className="form-data-input" type="time" name="time" onChange={(e) => setHorario(e.target.value)} />
            </div>

            <button type="submit" className="form-data-button" onClick={handleSubmit}>Cadastrar</button>

          </form>
        </div>
      </div>
    </ScheduleRegisterStyle>
  )
};

export default ScheduleRegister;