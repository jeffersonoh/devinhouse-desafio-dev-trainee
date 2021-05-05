import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import ClienteAPI from "../service/clienteAPI";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
  let history = useHistory();
  const [login, setLogin] = useState({ state: "waiting" });

  function voltarParaHome() {
    history.replace("/");
  }
  const logar = (payload) => {
    setLogin({ payload, state: "ready" });
    voltarParaHome();
  };
  const conectar = async (cpf) => {
    const resultado = await ClienteAPI.buscarClientePorCPF(cpf);
    logar(resultado);
  };
  const deslogar = () => {
    setLogin({ state: "waiting" });
    voltarParaHome();
  };

  return (
    <LoginContext.Provider value={{ login, conectar, deslogar }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLoginContext = () => {
  const context = useContext(LoginContext);
  return context;
};

export { useLoginContext, LoginProvider };
