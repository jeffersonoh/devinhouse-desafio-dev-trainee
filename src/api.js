import axios from "axios";

const API_BASE = "http://localhost:8080/v1";

export const getExames = () => {
    return axios.get(API_BASE + "/exames")
}
