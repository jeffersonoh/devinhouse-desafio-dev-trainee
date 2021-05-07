import axios from "axios";

const BASE_URL = `http://localhost:8080/devinhouse-backend/v1/exame`;

class ExameService {
  listarExames() {
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
}
export default new ExameService();
