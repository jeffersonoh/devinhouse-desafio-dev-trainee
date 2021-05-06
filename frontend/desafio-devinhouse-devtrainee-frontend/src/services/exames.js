import axios from "axios";

const BASE_URL = `/v1/exames`;

class ExameService {
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
