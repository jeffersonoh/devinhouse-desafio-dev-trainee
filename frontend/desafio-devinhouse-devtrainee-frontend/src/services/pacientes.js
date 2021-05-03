import axios from "axios";

const BASE_URL = `/paciente`;

class PacientesService {
  buscarPacientes(cpf) {
    const url =
      cpf === undefined
        ? BASE_URL + "/listar"
        : BASE_URL + "/listar?cpf=" + cpf;
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

  salvarPaciente(paciente) {
    const url = BASE_URL + "/cadastrar";
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

  deletarPaciente(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }
}

export default new PacientesService();
