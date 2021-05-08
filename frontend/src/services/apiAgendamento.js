import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_BACKEND}/${process.env.REACT_APP_BACKEND_VERSION}/agendamentos`;

class ApiService {
	countAgendamentos() {
		return axios.get(`${BASE_URL}/total`)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}

	findAllAgendamentos() {
	return axios.get(BASE_URL)
		.then(response => response.data)
					.catch(error => {
			throw error;
		});
	}
	
	filterAgendamentos(clienteId, exameId) {
		return axios.get(`${BASE_URL}?cliente_id=${clienteId}&exame_id=${exameId}`)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}

	filterAgendamentosPorData(datas) {
		return axios.post(`${BASE_URL}/filtro-data`, datas)
			.then(response => response.data)
			.catch(error => {
				throw error;
			});
	}
  
  findAgendamento(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
	
	createAgendamento(agendamento) {
		return axios.post(BASE_URL, agendamento)
			.catch(error => {
				throw error;
			})
	}
    
	updateAgendamento(id, agendamento) {
	return axios.put(`${BASE_URL}/${id}`, agendamento)
					.catch(error => {
			throw error;
		});
	}

	deleteAgendamento(id) {
	return axios.delete(`${BASE_URL}/${id}`)
					.catch(error => {
			throw error;
		});
	}
}

export default new ApiService();
