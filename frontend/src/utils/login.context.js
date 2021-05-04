import React, {createContext, useContext, useState} from "react";

const LoginContext = createContext({});

const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState({state: "waiting"});

    const logar = () => setLogin({state: "ready"});
    const deslogar = () => setLogin({state: "waiting"});

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