import axios from 'axios';

//import * as constants from './constants';

//const BASE_URL = `${constants.IZY_API}/processo`;
const BASE_URL = `http://localhost:8080/v1/exames`;

class ApiService {
	findAllExames() {
	return axios.get(BASE_URL)
		.then(response => response.data)
					.catch(error => {
			throw error;
		});
	}
	
	searchExames(query) {
		return axios.get(`${BASE_URL}?busca=${query}`)
			.then(response => response.data)
						.catch(error => {
				throw error;
			});
		}
  
  findExame(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
	
	createExame(exame) {
		return axios.post(BASE_URL, exame)
			.catch(error => {
				throw error;
			})
	}
    
	updateExame(id, exame) {
	return axios.put(`${BASE_URL}/${id}`, exame)
					.catch(error => {
			throw error;
		});
	}

	deleteExame(id) {
	return axios.delete(`${BASE_URL}/${id}`)
					.catch(error => {
			throw error;
		});
	}
}

export default new ApiService();
