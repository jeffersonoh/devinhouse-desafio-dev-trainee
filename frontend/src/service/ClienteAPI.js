import axios from 'axios';

const BASE_URL = "http://localhost:9000/backend-API/v1";
class ClienteAPI {

    cadastrarCliente(novoCliente) {
        return axios.post(`${BASE_URL}/cliente`, novoCliente)
            .catch(error => {
                throw error;
            })
    }
    buscarTodosClientes() {
        return axios.get(`${BASE_URL}/clientes`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    buscarClientePorCPF(cpf) {
        return axios.get(`${BASE_URL}/cliente?cpf=${cpf}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    atualizarCliente(id, novoCliente){
        return axios.put(`${BASE_URL}/cliente?id=${id}`, novoCliente)
        .catch(error => {
            throw error;
        })
    }
    deletarCliente(id) {
        return axios.delete(`${BASE_URL}/cliente?id=${id}`)
            .catch(error => {
                throw error;
            })
    }
}

export default new ClienteAPI();