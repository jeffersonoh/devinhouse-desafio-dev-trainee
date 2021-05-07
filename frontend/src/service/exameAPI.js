import axios from 'axios';
import { alertaErro } from "../utils/toastAlertas";


const BASE_URL = "http://localhost:9000/backend-API/v1";
class ExameAPI {

    buscarTodosExame() {
        return axios.get(`${BASE_URL}/exame`)
        .then(response => response.data)
        .catch(error => {
            alertaErro("Falhou em buscar a lista dos exames!");
            throw error;
        })
    }
}

export default new ExameAPI();
