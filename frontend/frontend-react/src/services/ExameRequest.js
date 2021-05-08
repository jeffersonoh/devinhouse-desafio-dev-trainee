import axios from "axios";
const URL = "http://localhost:9090/backend/v1";

class RequestBackendExame {
    getTodosExames() {
        return axios.get(`${URL}/exames`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
    }

    postExame(exame) {
        return axios.post(`${URL}/exame`, exame)
        .catch(error => {
            throw error
        })
    }

    getExamePorNome(nomeExame) {
        return axios.get(`${URL}/exame/${nomeExame}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }

    putExame(exameAtualizado) {
        return axios.put(`${URL}/exame`, exameAtualizado)
        .catch(error => {
            throw error
        })
    }

    deleteExamePorNome(nomeExame) {
        return axios.delete(`${URL}/exame/${nomeExame}`)
        .catch(error => {
            throw error;
        })
    }
}

export default new RequestBackendExame();