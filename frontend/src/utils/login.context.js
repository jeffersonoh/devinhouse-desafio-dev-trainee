import React, {createContext, useContext, useState} from "react";
import {useHistory} from "react-router-dom";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
    let history = useHistory();
    const [login, setLogin] = useState({state: "waiting"});

    function voltarParaHome() {
        history.replace("/");
      }

    const logar = () => {
        setLogin({state: "ready"});
        voltarParaHome()
    }
    const deslogar = () => {
        setLogin({state: "waiting"});
        voltarParaHome()
    }

    return (
        <LoginContext.Provider value={{login, logar, deslogar}}>
            {children}
        </LoginContext.Provider>
    );
};

const useLoginContext = () => {
    const context = useContext(LoginContext);
    return context;
};

export {useLoginContext, LoginProvider};