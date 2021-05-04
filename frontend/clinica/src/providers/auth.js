import React, { useEffect, useState } from 'react';
import { listaDeClientes } from 'api/apiTeste'

export const AuthContext = React.createContext({});

const CLIENTE_INICIAL = {
  nome: "",
  cpf: "",
  ddn: ""
};

const AuthProvider = (props) => {
  const [index, setIndex] = useState(0);
  const [dialogo, setDialogo] = useState(false);
  const [resposta, setResposta] = useState(0);
  const [clientes, setClientes] = useState(listaDeClientes);
  const [novoCliente, setNovoCliente] = useState(CLIENTE_INICIAL);
  const [chamadoHTTP, setChamadoHTTP] = useState("");
  const [linhaSelecionada, setLinhaSelecionada] = useState({id:0});
  
  useEffect(()=>{
    
    switch (chamadoHTTP) {
      case "POST_NOVOCLIENTE":
        POSTCliente();
        break;
    }
    setChamadoHTTP("");
  },[chamadoHTTP])

  const POSTCliente = () => {
    if (novoCliente.nome.length === 0) { return setResposta(907); }
    if (novoCliente.cpf.length !== 14) { return setResposta(908); }
    if (novoCliente.ddn.length !== 10) { return setResposta(909); }

    //POST
    setResposta(205);
    setIndex(1);
  }

  return (
      <AuthContext.Provider value={{
        index, setIndex,
        resposta, setResposta,
        novoCliente, setNovoCliente,
        chamadoHTTP, setChamadoHTTP,
        clientes, setClientes,
        linhaSelecionada, setLinhaSelecionada,
        dialogo, setDialogo
      }}>
        {props.children}
      </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);