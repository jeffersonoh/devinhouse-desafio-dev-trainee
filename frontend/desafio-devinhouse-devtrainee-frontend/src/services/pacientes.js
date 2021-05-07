import axios from "axios";

const BASE_URL = `http://localhost:8080/devinhouse-backend/v1/paciente`;

class PacientesService {
  buscarPacientes(cpf) {
    const options = {
      method: "GET",
      url: "http://localhost:8080/devinhouse-backend/v1/paciente",
      headers: { "api-version": "v1" },
    };

    if (cpf !== undefined) {
      options.url = "http://localhost:8080/devinhouse-backend/v1/paciente/cpf";
      options.params = { valor: cpf };
    }

    return axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });

    // return axios
    //   .get(url)
    //   .then((response) => {
    //     console.log("buscarPacientes");
    //     return response.data;
    //   })
    //   .catch((error) => {
    //     console.log("Oi");
    //     throw error;
    //   });
  }

  procurarPaciente(id) {
    const options = {
      method: "GET",
      url: "http://localhost:8080/devinhouse-backend/v1/paciente/id/1",
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

  salvarPaciente(paciente) {
    const options = {
      method: "POST",
      url: "http://localhost:8080/devinhouse-backend/v1/paciente",
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: paciente,
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
    //   .post(url, paciente)
    //   .then((response) => {
    //     console.log("salvarPaciente");
    //     console.log("response", response.data);
    //   })
    //   .catch((error) => {
    //     console.log("ERRO!!!");
    //     throw error;
    //   });
  }

  updatePatient(patient, id) {
    const options = {
      method: "PUT",
      url: "http://localhost:8080/devinhouse-backend/v1/paciente/id/" + id,
      headers: { "api-version": "v1", "Content-Type": "application/json" },
      data: patient,
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

    // const url = BASE_URL + "/" + id;
    // return axios
    //   .put(url, patient)
    //   .then((response) => {
    //     console.log("atualizarPaciente");
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  }

  deletarPaciente(id) {
    const options = {
      method: "DELETE",
      url: "http://localhost:8080/devinhouse-backend/v1/paciente/id/" + id,
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
}

export default new PacientesService();
