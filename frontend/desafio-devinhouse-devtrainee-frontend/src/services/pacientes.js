import axios from "axios";

const BASE_URL = `/v1/paciente`;

class PacientesService {
  buscarPacientes(cpf) {
    const url = cpf === undefined ? BASE_URL : BASE_URL + "/?cpf=" + cpf;
    return axios
      .get(url)
      .then((response) => {
        console.log("buscarPacientes");
        return response.data;
      })
      .catch((error) => {
        console.log("Oi");
        throw error;
      });
  }

  procurarPaciente(id) {
    const url = `${BASE_URL}/${id}`;
    return axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  salvarPaciente(paciente) {
    const url = BASE_URL;
    return axios
      .post(url, paciente)
      .then((response) => {
        console.log("salvarPaciente");
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("ERRO!!!");
        throw error;
      });
  }

  updatePatient(patient, id) {
    const url = BASE_URL + "/" + id;
    return axios
      .put(url, patient)
      .then((response) => {
        console.log("atualizarPaciente");
      })
      .catch((error) => {
        throw error;
      });
  }

  deletarPaciente(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }
}

export default new PacientesService();
