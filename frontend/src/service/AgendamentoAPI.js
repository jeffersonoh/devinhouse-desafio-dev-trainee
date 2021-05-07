import axios from "axios";
import {alertaSucesso, alertaErro } from "../utils/toastAlertas";

const BASE_URL = "http://localhost:9000/backend-API/v1";
class AgendamentoAPI {
  cadastrarAgendamento(novoAgendamento) {
    return axios
      .post(`${BASE_URL}/agendamento`, novoAgendamento)
      .then(() => {
        alertaSucesso("Agendamento cadastrado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel realizar o agendamento!");
        throw error;
      });
  }
  buscarAgendamentoPorCliente(idCliente) {
    return axios
      .get(`${BASE_URL}/agendamento-cliente?idCliente=${idCliente}`)
      .then((response) => response.data)
      .catch((error) => {
        alertaErro("Falhou em buscar a lista dos agendamentos do Cliente!");
        throw error;
      });
  }
  buscarHorariosAgendadosNaDataDoExame(idExame, data) {
    return axios
      .get(`${BASE_URL}/agendamento-horarios?idExame=${idExame}&data=${data}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  atualizarAgendamento(id, novoAgendamento) {
    return axios
      .put(`${BASE_URL}/agendamento?id=${id}`, novoAgendamento)
      .then(() => {
        alertaSucesso("Agendamento atualizado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel atualizar o agendamento!");
        throw error;
      });
  }
  deletarAgedamento(id) {
    return axios
      .delete(`${BASE_URL}/agendamento?id=${id}`)
      .then(() => {
        alertaSucesso("Agendamento deletado!");
      })
      .catch((error) => {
        alertaErro("Não foi possivel deletar o agendamento!");
        throw error;
      });
  }
}

export default new AgendamentoAPI();
