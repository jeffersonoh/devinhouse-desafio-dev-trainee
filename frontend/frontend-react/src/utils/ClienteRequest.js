import axios from "axios";
const URL = "http://localhost:9090/backend";

class RequestBackendCliente {
    getTodosClientes() {
        return axios.get(`${URL}/clientes`)
        .then(response => response.data)
        .catch(error => {
            throw error
        })
    }

    postCliente(cliente) {
        return axios.post(`${URL}/cliente`, cliente)
        .catch(error => {
            throw error
        })
    }

    getClientePorCpf(cpf) {
        return axios.get(`${URL}/cliente/${cpf}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }

    putCliente(clienteAtualizado) {
        return axios.put(`${URL}/cliente`, clienteAtualizado)
        .catch(error => {
            throw error
        })
    }

    deleteClientePorCpf(cpf) {
        return axios.delete(`${URL}/cliente/${cpf}`)
        .catch(error => {
            throw error;
        })
    }

    getClienteAgendamentoPorCpf(cpf) {
        return axios.get(`${URL}/cliente-agendamento/${cpf}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
}

export default new RequestBackendCliente();