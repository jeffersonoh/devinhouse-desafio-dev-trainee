import axios from "axios";
import { CLIENTE_URL } from "./constants";

const ClienteService = {
    buscaClientes() {
        return axios
        .get(CLIENTE_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    buscaClienteCPF(cpf) {
        return axios
        .get(`${CLIENTE_URL}/cliente?cpf=${cpf}`)
        .then((response) => response.data)
        .catch((error)=> {
            throw error
        });
    },
    buscaClienteId(id) {
        return axios
        .get(`${CLIENTE_URL}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        })
    },
    criar(cliente) {
        return axios
        .post(CLIENTE_URL, cliente)
        .catch((error) => {
            throw error;
        } )
    },
    salvar(cliente, id) {
        return axios
        .put(`${CLIENTE_URL}/${id}`, cliente)
        .catch((error) => {
            throw error;
        } )
    },
    excluir(id) {
        return axios
        .delete(`${CLIENTE_URL}/${id}`)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        })
    },
    
    
}

export default ClienteService; 