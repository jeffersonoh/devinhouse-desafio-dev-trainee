import axios from "axios";
import {
  successAgendamentoPut,
  successAgendamentoPost,
  successAgendamentoDelete,
} from "../utils/alertas";
const URL = "http://localhost:9090/backend";

class RequestBackendAgendamento {
  postAgendamento(agendamento) {
    return axios
      .post(`${URL}/agendamento`, agendamento)
      .then(() => {
        successAgendamentoPost();
      })
      .catch((error) => {
        throw error;
      });
  }

  putAgendamento(id, agendamento) {
    return axios
      .put(`${URL}/agendamento/${id}`, agendamento)
      .then(() => {
        successAgendamentoPut();
      })
      .catch((error) => {
        throw error;
      });
  }

  deleteAgendamentoPorId(idAgendamento) {
    return axios
      .delete(`${URL}/agendamento/${idAgendamento}`)
      .then(() => {
        successAgendamentoDelete();
      })
      .catch((error) => {
        throw error;
      });
  }

  getAgendamentosIndisponiveis(nomeExame, data) {
    return axios
      .get(`${URL}/agendamento/${nomeExame}?data=${data}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default new RequestBackendAgendamento();
