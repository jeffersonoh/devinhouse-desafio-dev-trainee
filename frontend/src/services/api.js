import axios from "axios";

const api_url = "http://localhost:8080/desafio-api";
// const api_url = "http://192.168.0.110:8080/desafio-api";

const api_config = axios.create({
	baseURL: api_url,
});

api_config.defaults.headers.get["Accept"] = "application/json";
api_config.defaults.headers.post["Content-Type"] = "application/json";
api_config.defaults.headers.put["Content-Type"] = "application/json";

const { get, post, put, delete: remove } = api_config;

export { get, post, put, remove };

export const api = {
	buscarExames: () => get(`/exames/`),

	buscarClientes: () => get(`/clientes/`),
	buscarClientePeloID: (id) => get(`/clientes/${id}`),
	buscarClientePeloCPF: (cpf) => get(`/clientes/buscar?cpf=${cpf}`),
	cadastrarCliente: (params) => post(`/clientes/`, params),
	excluirCliente: (id) => remove(`/clientes/${id}`),
	atualizarCliente: (id, params) => put(`/clientes/${id}`, params),

	adicionarConsulta: (id_cliente, params) => post(`/clientes/${id_cliente}/consulta/`, params),
	removerConsulta: (id_cliente, id_consulta) => remove(`/clientes/${id_cliente}/consulta/${id_consulta}`),
	atualizarConsulta: (id_cliente, id_consulta, params) =>
		put(`/clientes/${id_cliente}/consulta/${id_consulta}`, params),
};
