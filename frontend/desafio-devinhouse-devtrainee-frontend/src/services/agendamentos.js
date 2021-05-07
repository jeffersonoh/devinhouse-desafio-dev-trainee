import axios from "axios";

const BASE_URL = `/v1/agendamento`;

class AgendamentosService {
  buscarAgendamentos() {
    const options = {
      method: "GET",
      url: "http://localhost:8080/devinhouse-backend/v1/agendamento",
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // const url = BASE_URL;
    // return axios
    //   .get(url)
    //   .then((response) => {
    //     console.log("buscarAgendamentos");
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log("Oi");
    //     throw error;
    //   });
  }

  salvarAgendamento(agendamento) {
    const options = {
      method: "POST",
      url: "http://localhost:8080/devinhouse-backend/v1/agendamento",
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: agendamento,
    };

    console.log(agendamento);
    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // const url = BASE_URL;
    // return axios
    //   .post(url, agendamento)
    //   .then((response) => {
    //     console.log("salvarAgendamento");
    //     console.log("response", response.data);
    //   })
    //   .catch((error) => {
    //     console.log("ERRO!!!");
    //     throw error;
    //   });
  }

  deletarAgendamento(id) {
    const options = {
      method: "DELETE",
      url: "http://localhost:8080/devinhouse-backend/v1/agendamento/id/" + id,
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
    //   throw error;
    // });
  }

  updateScheduledExam(scheduledExam, id) {
    const options = {
      method: "PUT",
      url: "http://localhost:8080/devinhouse-backend/v1/agendamento/id/" + id,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: scheduledExam,
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // const url = `${BASE_URL}/${id}`;
    // return axios
    //   .put(url, scheduledExam)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  }

  procurarAgendamento(id) {
    const options = {
      method: "GET",
      url: "http://localhost:8080/devinhouse-backend/v1/agendamento/id/" + id,
      headers: { "api-version": "v1" },
    };

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // const url = `${BASE_URL}/${id}`;
    // return axios
    //   .get(url)
    //   .then((response) => {
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  }
}
export default new AgendamentosService();
