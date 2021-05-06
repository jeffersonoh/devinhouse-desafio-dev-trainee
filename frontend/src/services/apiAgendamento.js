import axios from 'axios';

//import * as constants from './constants';

//const BASE_URL = `${constants.IZY_API}/processo`;
const BASE_URL = `http://localhost:8080/v1/agendamentos`;

class ApiService {
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
