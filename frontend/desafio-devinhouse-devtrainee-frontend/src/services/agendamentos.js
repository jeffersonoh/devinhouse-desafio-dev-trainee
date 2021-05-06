import axios from "axios";

const BASE_URL = `/v1/agendamento`;

class AgendamentosService {
  buscarAgendamentos() {
    const url = BASE_URL;
    return axios
      .get(url)
      .then((response) => {
        console.log("buscarAgendamentos");
        return response.data;
      })
      .catch((error) => {
        console.log("Oi");
        throw error;
      });
  }

  salvarAgendamento(agendamento) {
    const url = BASE_URL;
    return axios
      .post(url, agendamento)
      .then((response) => {
        console.log("salvarAgendamento");
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("ERRO!!!");
        throw error;
      });
  }

  deletarAgendamento(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }

  updateScheduledExam(scheduledExam, id) {
    const url = `${BASE_URL}/${id}`;
    return axios
      .put(url, scheduledExam)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  procurarAgendamento(id) {
    const url = `${BASE_URL}/${id}`;
    return axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  /* 
 
  buscarExames(query) {
    console.log(q);
    const url = q ? `${BASE_URL}?q=${q}` : BASE_URL;
    return axios
      .get(url)
      .then((response) => {
        console.log("buscarProcessos(q)");
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
 buscarProcesso(id) {
    console.log("id", id);
    const url = id ? `${BASE_URL}/${id}` : BASE_URL;
    return axios
      .get(url)
      .then((response) => {
        console.log("buscarProcesso(id)");
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  inserirProcesso(processo) {
    return axios
      .post(BASE_URL, processo)
      .then((response) => console.log("response", response.data))
      .catch((error) => {
        throw error;
      });
  }

  atualizarProcesso(processo) {
    return axios.put(BASE_URL, processo).catch((error) => {
      throw error;
    });
  }

  excluirProcesso(id) {
    return axios.delete(`${BASE_URL}/${id}`).catch((error) => {
      throw error;
    });
  }
}
*/
}
export default new AgendamentosService();
