import axios from "axios";
const URL = "http://localhost:9090/backend";

class RequestBackend {
    getTodosExames() {
        return axios.get(`${URL}/exames`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
    }

    postProcesso(processo) {
        return axios.post(URL, processo)
        .catch(error => {
            throw error
        })
    }

    getID(id) {
        return axios.get(`${URL}/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }

    getAssunto(assunto) {
        return axios.get(`${URL}?q=${assunto}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        }) 
    }

    deletePorID(id) {
        return axios.delete(`${URL}/${id}`)
        .catch(error => {
            throw error;
        })
    }

}

export default new RequestBackend();