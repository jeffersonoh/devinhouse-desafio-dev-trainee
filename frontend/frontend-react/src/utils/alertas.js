import {toast} from "react-toastify";

const successAgendamentoPut = () => {toast.success("Agendamento Atualizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successAgendamentoPost = () => {toast.success("Agendamento Realizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successAgendamentoDelete = () => {toast.success("Agendamento Deletado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClientePost = () => {toast.success("Cadastro Realizado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClientePut = () => {toast.success("Cadastro Alterado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const successClienteDelete = () => {toast.success("Cadastro Deletado!", {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
})};

const errorClienteGet = () => {toast.error("CPF não Encontrado!", {
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
  successClienteDelete
};
