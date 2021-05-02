import axios from "axios";
import { CLIENTE_URL } from "./constants";

const ClienteService = {
    buscaCliente() {
        return axios
        .get(CLIENTE_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    
}