import axios from 'axios';

const BASE_URL = "http://localhost:9000/backend-API/v1";
class AgendamentoAPI {

    cadastrarAgendamento(novoAgendamento) {
        return axios.post(`${BASE_URL}/agendamento`, novoAgendamento)
            .catch(error => {
                throw error;
            })
    }
    buscarAgendamentoPorCliente(cliente) {
        return axios.get(`${BASE_URL}/agendamento-cliente`, cliente)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    buscarAgendamentoPorExameEData(exame, data) {
        return axios.get(`${BASE_URL}/agendamento-exame?data=${data}`, exame)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    atualizarAgendamento(id, novoAgendamento){
        return axios.put(`${BASE_URL}/agendamento?id=${id}`, novoAgendamento)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
    deletarAgedamento(id) {
        return axios.delete(`${BASE_URL}/agendamento?id=${id}`)
            .catch(error => {
                throw error;
            })
    }
}

export default new AgendamentoAPI();