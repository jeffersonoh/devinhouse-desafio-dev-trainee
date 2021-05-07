import axios from "axios";

const API_BASE = "http://localhost:8080/v1";

export const getExames = () => axios.get(API_BASE + "/exames");

export const getClientes = () => axios.get(API_BASE + "/clientes");

export const searchClientesByCpf = (cpf) => axios.get(API_BASE + "/clientes?cpf=" + cpf);

export const deleteCliente = (id) => axios.delete(API_BASE + "/clientes/" + id);

export const createCliente = (data) => axios.post(API_BASE + "/clientes", data);

export const updateCliente = (data) => axios.put(API_BASE + "/clientes/" + data.id, data);

export const patchAgendamento = (data) => axios.patch(API_BASE + "/agendamentos/" + data.id, data);

export const deleteAgendamento = (data) => axios.delete(API_BASE + "/agendamentos/" + data.id);
