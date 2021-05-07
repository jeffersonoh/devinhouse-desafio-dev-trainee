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
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  buscarExames() {
    const url = BASE_URL;
    return axios
      .get(url)
      .then((response) => {
        console.log("buscarExames");
        return response.data;
      })
      .catch((error) => {
        console.log("Oi");
        throw error;
      });
  }
}
export default new ExameService();
