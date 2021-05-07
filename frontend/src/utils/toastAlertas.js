import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const alertaSucesso = (mensagem) => {
    toast.success(mensagem, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

const alertaErro = (mensagem) => {
  toast.error(mensagem, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export {alertaSucesso, alertaErro };
