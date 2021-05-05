import React, {createContext, useContext, useState} from "react";

const ExameContext = createContext({});

const ExameProvider = ({ children }) => {
    const [exame, setExame] = useState({state: "waiting"});

    const salvar = (payload) => {
        setExame({ ...payload, state: "selected"});
    }
    const resetar = () => {
        setExame({state: "waiting"});
    }

    return (
        <ExameContext.Provider value={{exame, salvar, resetar}}>
            {children}
        </ExameContext.Provider>
    );
};

const useExameContext = () => {
    const context = useContext(ExameContext);
    return context;
};

export {useExameContext, ExameProvider};