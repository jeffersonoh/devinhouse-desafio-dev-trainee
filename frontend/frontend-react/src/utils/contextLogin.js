import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import RequestBackendCliente from "../services/ClienteRequest";

const ContextLogin = createContext({});

const LoginProvider = ({ children }) => {
  const routerHistory = useHistory();
  const [usuarioState, setUsuarioState] = useState({
    loginStatus: false,
    cpf: "",
    contextNome: ""
  });

  const voltarHome = () => {
    routerHistory.replace("/");
  };

  const login = async (cpf) => {
    const clienteCpf = await RequestBackendCliente.getClientePorCpf(cpf);
    if(clienteCpf) {
      setUsuarioState({ loginStatus: true, cpf: cpf, contextNome: clienteCpf.nome });
      return routerHistory.replace("/area-cliente");
    }
  };

  const loginAdmin = (cpf) => {
    setUsuarioState({ loginStatus: true, cpf: cpf });
    routerHistory.replace("/area-admin");
  }

  const logout = () => {
    setUsuarioState({ loginStatus: false, cpf: "" });
    voltarHome();
  };

  return (
    <ContextLogin.Provider value={{ usuarioState, login, loginAdmin, logout, voltarHome }}>
      {children}
    </ContextLogin.Provider>
  );
};

const useContextLogin = () => {
  const context = useContext(ContextLogin);
  return context;
};

export { LoginProvider, useContextLogin };