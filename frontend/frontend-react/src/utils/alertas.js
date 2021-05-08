import {toast} from "react-toastify";

const successAgendamentoPut = () => {toast.success("Agendamento atualizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successAgendamentoPost = () => {toast.success("Agendamento realizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successAgendamentoDelete = () => {toast.success("Agendamento deletado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClientePost = () => {toast.success("Cadastro realizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClientePut = () => {toast.success("Cadastro alterado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClienteDelete = () => {toast.success("Cadastro deletado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const errorClienteGet = () => {toast.error("CPF não encontrado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const errorCpfInvalido = () => {toast.error("CPF inválido!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

export {
  successAgendamentoPut,
  successAgendamentoPost,
  successAgendamentoDelete,
  successClientePost,
  successClientePut,
  errorClienteGet,
  successClienteDelete,
  errorCpfInvalido,
};
