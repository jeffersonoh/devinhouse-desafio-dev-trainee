import axios from "axios";

const BASE_URL = "http://localhost:8080/devinhouse-backend/v1/agendamento";

class AgendamentosService {
  buscarAgendamentos() {
    const options = {
      method: "GET",
      url: BASE_URL,
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  salvarAgendamento(agendamento) {
    const options = {
      method: "POST",
      url: BASE_URL,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: agendamento,
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  deletarAgendamento(id) {
    const options = {
      method: "DELETE",
      url: BASE_URL + "/id/" + id,
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  updateScheduledExam(scheduledExam, id) {
    const options = {
      method: "PUT",
      url: BASE_URL + "/id/" + id,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: scheduledExam,
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  procurarAgendamento(id) {
    const options = {
      method: "GET",
      url: BASE_URL + "/id/" + id,
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }
}
export default new AgendamentosService();
