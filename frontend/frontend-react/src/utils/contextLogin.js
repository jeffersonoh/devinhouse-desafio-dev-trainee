import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import RequestBackendCliente from "../services/ClienteRequest";

const ContextLogin = createContext({});

const LoginProvider = ({ children }) => {
  const routerHistory = useHistory();
  const [usuarioState, setUsuarioState] = useState({
    loginStatus: false,
    cpf: "",
  });

  const voltarHome = () => {
    routerHistory.replace("/");
  };

  const login = (cpf) => {
    setUsuarioState({ loginStatus: true, cpf: cpf });
    routerHistory.replace("/area-cliente");
  };

  const logout = () => {
    setUsuarioState({ loginStatus: false, cpf: "" });
    voltarHome();
  };

  return (
    <ContextLogin.Provider value={{ usuarioState, login, logout, voltarHome }}>
      {children}
    </ContextLogin.Provider>
  );
};

const useContextLogin = () => {
  const context = useContext(ContextLogin);
  return context;
};

export { LoginProvider, useContextLogin };
