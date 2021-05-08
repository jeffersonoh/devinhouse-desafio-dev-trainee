import axios from "axios";
import { alertaSucesso, alertaErro } from "../utils/toastAlertas";

const BASE_URL = "http://localhost:9000/backend-API/v1";
class ClienteAPI {
  cadastrarCliente(novoCliente) {
    return axios
      .post(`${BASE_URL}/cliente`, novoCliente)
      .then(() => {
        alertaSucesso("Cliente cadastrado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel cadastrar!");
        throw error;
      });
  }
  buscarTodosClientes() {
    return axios
      .get(`${BASE_URL}/clientes`)
      .then((response) => response.data)
      .catch((error) => {
        alertaErro("Falhou em buscar a lista dos clientes!");
        throw error;
      });
  }
  buscarClientePorCPF(cpf) {
    return axios
      .get(`${BASE_URL}/cliente?cpf=${cpf}`)
      .then((response) => response.data)
      .catch((err) => {
        alertaErro("Não foi encontrado cliente com esse CPF!");
        throw err;
      });
  }
  atualizarCliente(id, novoCliente) {
    return axios
      .put(`${BASE_URL}/cliente?id=${id}`, novoCliente)
      .then(() => {
        alertaSucesso("Cliente atualizado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel atualizar o cliente!");
        throw error;
      });
  }
  deletarCliente(id) {
    return axios
      .delete(`${BASE_URL}/cliente?id=${id}`)
      .then(() => {
        alertaSucesso("Cliente deletado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel deletar o cliente!");
        throw error;
      });
  }
}

export default new ClienteAPI();
