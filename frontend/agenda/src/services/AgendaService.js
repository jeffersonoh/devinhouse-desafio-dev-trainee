import axios from "axios";
import * as constants from "./constants";

const BASE_URL_EXAM = `${constants.AGENDAMENTO_API}/exames`;
const BASE_URL_CLIENT = `${constants.AGENDAMENTO_API}/clientes`;
const BASE_URL_AGENDA = `${constants.AGENDAMENTO_API}/agendamentos`;

class AgendaService {
  buscarExames() {
    const url = BASE_URL_EXAM;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  buscarClientes(busca) {
    const url = busca ? `${BASE_URL_CLIENT}?busca=${busca}` : BASE_URL_CLIENT;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  inserirCliente(cliente) {
    return axios.post(BASE_URL_CLIENT, cliente).catch((error) => {
      console.log(error);
    });
  }

  atualizarCliente(cliente) {
    return axios.put(BASE_URL_CLIENT, cliente).catch((error) => {
      throw error;
    });
  }

  excluirCliente(cpf) {
    return axios.delete(`${BASE_URL_CLIENT}/${cpf}`).catch((error) => {
      throw error;
    });
  }

  buscarAgendamentos(busca) {
    const url = busca ? `${BASE_URL_AGENDA}?busca=${busca}` : BASE_URL_AGENDA;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  excluirAgendamento(id) {
    return axios.delete(`${BASE_URL_AGENDA}/${id}`).catch((error) => {
      throw error;
    });
  }

  atualizarAgendamento(agendamento) {
    return axios.put(BASE_URL_AGENDA, agendamento).catch((error) => {
      throw error;
    });
  }
}
export default new AgendaService();
