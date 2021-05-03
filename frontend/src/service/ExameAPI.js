import axios from 'axios';

const BASE_URL = "http://localhost:9000/backend-API/v1";
class ExameAPI {

    buscarTodosExame() {
        return axios.get(`${BASE_URL}/exame`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
}

export default new ExameAPI();