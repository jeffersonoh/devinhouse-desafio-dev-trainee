import axios from "axios";
import { AGENDAMENTO_URL } from "./constants";

const ClienteService = {
    buscaCliente() {
        return axios
        .get(AGENDAMENTO_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    
}