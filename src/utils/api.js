import axios from "axios";

const API_BASE = "https://devtrainee-ejnn-backend.herokuapp.com/v1";

export const getExames = () => axios.get(API_BASE + "/exames");

export const getClientes = () => axios.get(API_BASE + "/clientes");

export const searchClientesByCpf = (cpf) => axios.get(API_BASE + "/clientes?cpf=" + cpf);

export const deleteCliente = (id) => axios.delete(API_BASE + "/clientes/" + id);

export const createCliente = (data) => axios.post(API_BASE + "/clientes", data);

export const updateCliente = (data) => axios.put(API_BASE + "/clientes/" + data.id, data);

export const patchAgendamento = (data) => axios.patch(API_BASE + "/agendamentos/" + data.id, data);

export const deleteAgendamento = (data) => axios.delete(API_BASE + "/agendamentos/" + data.id);

export const getAgendamentos = () => axios.get(API_BASE + "/agendamentos");

export const getExamesPage = ({page, size}) => axios.get(API_BASE + "/exames/page?page=" + page + "&size=" + size);

export const getClientesPage = ({page, size}) => axios.get(API_BASE + "/clientes/page?page=" + page + "&size=" + size);

export const getAgendamentosPage = ({page, size}) => axios.get(API_BASE + "/agendamentos/page?page=" + page + "&size=" + size);
