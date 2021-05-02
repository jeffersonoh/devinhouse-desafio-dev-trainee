import axios from 'axios';

//import * as constants from './constants';

//const BASE_URL = `${constants.IZY_API}/processo`;
const BASE_URL = `http://localhost:8080/v1/clientes`;

class ApiService {
	findAllClientes() {
	return axios.get(BASE_URL)
		.then(response => response.data)
					.catch(error => {
			throw error;
		});
	}
	
	searchClientes(query) {
		return axios.get(`${BASE_URL}?busca=${query}`)
			.then(response => response.data)
						.catch(error => {
				throw error;
			});
		}
  
  findCliente(id) {
		return axios.get(`${BASE_URL}/${id}`)
			.then(response => response.data)
            .catch(error => {
				throw error;
			});
	}
	
	createCliente(cliente) {
		return axios.post(BASE_URL, cliente)
			.catch(error => {
				throw error;
			})
	}
    
	updateCliente(id, cliente) {
	return axios.put(`${BASE_URL}/${id}`, cliente)
					.catch(error => {
			throw error;
		});
	}

	deleteCliente(id) {
	return axios.delete(`${BASE_URL}/${id}`)
					.catch(error => {
			throw error;
		});
	}
}

export default new ApiService();
