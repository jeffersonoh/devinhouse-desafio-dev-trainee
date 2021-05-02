import axios from "axios";
import { EXAME_URL } from "./constants";

const ClienteService = {
    buscaCliente() {
        return axios
        .get(EXAME_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    
}