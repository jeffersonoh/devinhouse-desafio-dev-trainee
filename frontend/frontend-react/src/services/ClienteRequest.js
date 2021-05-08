import axios from "axios";
import {
  successClientePost,
  successClientePut,
  errorClienteGet,
  successClienteDelete
} from "../utils/alertas";

const URL = "http://localhost:9090/backend/v1";

class RequestBackendCliente {
  getTodosClientes() {
    return axios
      .get(`${URL}/clientes`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  postCliente(cliente) {
    return axios
      .post(`${URL}/cliente`, cliente)
      .then(() => {
        successClientePost();
      })
      .catch((error) => {
        throw error;
      });
  }

  getClientePorCpf(cpf) {
    return axios
      .get(`${URL}/cliente/${cpf}`)
      .then((response) => response.data)
      .catch(() => {
        errorClienteGet();
      });
  }

  putCliente(cpf, clienteAtualizado) {
    return axios
      .put(`${URL}/cliente/${cpf}`, clienteAtualizado)
      .then(() => {
        successClientePut();
      })
      .catch((error) => {
        throw error;
      });
  }

  deleteClientePorCpf(cpf) {
    return axios.delete(`${URL}/cliente/${cpf}`)
    .then(() => {
      successClienteDelete();
    })
    .catch((error) => {
      throw error;
    });
  }

  getClienteAgendamentoPorCpf(cpf) {
    return axios
      .get(`${URL}/cliente-agendamento/${cpf}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default new RequestBackendCliente();
