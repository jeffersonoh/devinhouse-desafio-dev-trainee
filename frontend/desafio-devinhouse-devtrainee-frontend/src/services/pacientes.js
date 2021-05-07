import axios from "axios";

const BASE_URL = "http://localhost:8080/devinhouse-backend/v1/paciente";

class PacientesService {
  buscarPacientes(cpf) {
    const options = {
      method: "GET",
      url: BASE_URL,
      headers: { "api-version": "v1" },
    };

    if (cpf !== undefined) {
      options.url = BASE_URL + "/cpf";
      options.params = { valor: cpf };
    }

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  procurarPaciente(id) {
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

  salvarPaciente(paciente) {
    const options = {
      method: "POST",
      url: BASE_URL,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: paciente,
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  updatePatient(patient, id) {
    const options = {
      method: "PUT",
      url: BASE_URL + "/id/" + id,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: patient,
    };

    return axios
      .request(options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {});
  }

  deletarPaciente(id) {
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
}

export default new PacientesService();
