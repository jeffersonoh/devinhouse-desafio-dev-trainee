import axios from "axios";
import { AGENDAMENTO_URL } from "./constants";

const AgendamentoService = {
    buscaAgendamentos() {
        return axios
        .get(AGENDAMENTO_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    buscaAgendamentoId(id) {
        return axios
        .get(`${AGENDAMENTO_URL}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        })
    },
    criar(agendamento) {
        return axios
        .post(AGENDAMENTO_URL, agendamento)
        .catch((error) => {
            throw error;
        } )
    },
    salvar(agendamento, id) {
        return axios
        .put(`${AGENDAMENTO_URL}/${id}`, agendamento)
        .catch((error) => {
            throw error
        })
    },
    excluir(id) {
        axios.delete(`${AGENDAMENTO_URL}/${id}`)
        .catch((error) => {
            throw error
        })
    }
    
}

export default AgendamentoService;