import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8080/backend',
  headers: {'api-version' : '1'}
});

const Actions = {
  createClient : (data) => {
    return instance.post(`/clientes/v1/cadastrar`, data);
  },

  findAllClients : () => {
    return instance.get(`/clientes/v1/consultar`);
  },

  findClientByCpf : (term) => {
    return instance.get(`/clientes/v1/consultar/cpf/${term}`);
  },

  updateClient : (term, data) => {
    return instance.put(`/clientes/v1/atualizar/cpf/${term}`, data);
  },

  removeCliente : (term) => {
    return instance.delete(`/clientes/v1/deletar/cpf/${term}`);
  },

  createExam : (data) => {
    return instance.post(`/exames/v1/cadastrar`, data);
  },

  findAllExams : () => {
    return instance.get(`/exames/v1/consultar`);
  },

  removeExam : (term) => {
    return instance.delete(`/exames/v1/deletar/id/${term}`);
  },

  createSchedule : (data) => {
    return instance.post(`/agendamentos/v1/cadastrar`, data);
  },

  findAllSchedules : () => {
    return instance.get(`/agendamentos/v1/consultar`);
  },

  findScheduleById : (term) => {
    return instance.get(`/agendamentos/v1/consultar/id/${term}`);
  },

  updateSchedule : (term, data) => {
    return instance.put(`/agendamentos/v1/atualizar/id/${term}`, data);
  },

  removeSchedule : (term) => {
    return instance.delete(`/agendamentos/v1/deletar/id/${term}`);
  }
}

export default Actions;