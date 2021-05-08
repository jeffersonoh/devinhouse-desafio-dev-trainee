import axios from "axios";
import { EXAME_URL } from "./constants";

const ExameService = {
    buscaExames() {
        return axios
        .get(EXAME_URL)
        .then((response) => response.data)
        .catch((error) => {
            throw error
        });
    },
    buscaExameNome(nomeDoExame) {
        return axios
        .get(`${EXAME_URL}/exame?nomeDoExame=${nomeDoExame}`)
        .then((response) => response.data)
        .catch((error)=> {
            throw error
        });
    },
    excluir(id) {
        axios.delete(`${EXAME_URL}/${id}`)
        .catch((error) => {
            throw error
        })
    }
    
}

export default ExameService;