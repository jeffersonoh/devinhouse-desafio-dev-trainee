import React, { useEffect, useState } from 'react';
import { exames, listaDeAgenda, listaDeClientes } from 'api/apiTeste'
import moment from 'moment';

export const AuthContext = React.createContext({});

const CLIENTE_INICIAL = {
  nome: "",
  cpf: "",
  ddn: ""
};

const MARCACAO_INICIAL = {
  data: "",
  exame: "",
  pacienteNome: "",
  cpf: ""
};

const DATAAGENDA_INICIAL = {
  data: "",
  hora: ""
}

const AuthProvider = (props) => {
  const [index, setIndex] = useState(0);
  const [dialogo, setDialogo] = useState(false);
  const [resposta, setResposta] = useState(0);

  const [linhaSelecionadaCliente, setLinhaSelecionadaCliente] = useState({ id: 0 });
  const [clientes, setClientes] = useState(listaDeClientes);
  const [novoCliente, setNovoCliente] = useState(CLIENTE_INICIAL);
  const [pesquisaCliente, setPesquisaCliente] = useState("");
  const [clienteCriadoComboBox, setClienteCriadoComboBox] = useState(false);

  const [linhaSelecionadaAgenda, setLinhaSelecionadaAgenda] = useState({ id: 0 });
  const [marcacoes, setMarcacoes] = useState(listaDeAgenda);
  const [novaMarcacao, setNovaMarcacao] = useState(MARCACAO_INICIAL);
  const [pesquisaMarcacao, setPesquisaMarcacao] = useState("");
  const [examesOfertados, setExamesOfertados] = useState(exames);
  const [dataAgenda, setDataAgenda] = useState(DATAAGENDA_INICIAL);

  const [chamadoHTTP, setChamadoHTTP] = useState("");


  useEffect(() => {

    switch (chamadoHTTP) {
      case "POST_NOVOCLIENTE":
        POSTCliente();
        break;
      case "PUT_CLIENTE":
        PUTCliente();
        break;
      case "DELETE_CLIENTE":
        DELETECliente();
        break;
      case "FIND_CLIENTE":
        FINDCliente();
        break;
      case "POST_NOVAMARCACAO":
        POSTAgenda();
        break;
      case "POST_NOVOCLIENTECOMBOBOX":
        POSTClienteComboBox();
        break;
      case "PUT_AGENDA":
        PUTAgenda();
        break;
      case "DELETE_AGENDA":
        DELETEAgenda();
        break;
      case "FIND_AGENDA":
        FINDAgenda();
        break;
    }
    setChamadoHTTP("");
  }, [chamadoHTTP])

  function validarCliente(cliente) {
    if (cliente.nome.length === 0) {
      setResposta(907);
      return false;
    }
    if (cliente.cpf.length !== 14) {
      setResposta(908);
      return false;
    }
    if (cliente.ddn.length !== 10) {
      setResposta(909);
      return false;
    }
    return true;
  }

  function validarMarcacao(agenda) {
    const validarHora = dataAgenda.hora.split(":");
    if (agenda.pacienteNome.length === 0) {
      setResposta(901);
      return false;
    }
    if (dataAgenda.data.length !== 10) {
      setResposta(902);
      return false;
    }
    if (dataAgenda.hora.length !== 5) {
      setResposta(903);
      return false;
    }
    if (validarHora[0] >= 24 || validarHora[0] < 0) {
      setResposta(904);
      return false;
    }
    if (validarHora[1] >= 60 || validarHora[1] < 0) {
      setResposta(905);
      return false;
    }
    if (agenda.exame.length === 0) {
      setResposta(906);
      return false;
    }
    return true;
  }

  const POSTAgenda = () => {
    if (validarMarcacao(novaMarcacao)) {
      //POST
      setNovaMarcacao(MARCACAO_INICIAL);
      setDataAgenda(DATAAGENDA_INICIAL)
      setResposta(201);
      setIndex(1);
    }
  }

  const POSTClienteComboBox = () => {
    if (validarCliente(novoCliente)) {
      //POST

      setNovoCliente(CLIENTE_INICIAL);
      setResposta(205);
      setIndex(2);
      setClienteCriadoComboBox(false);
    }
  }

  const PUTAgenda = () => {
    if (validarMarcacao(linhaSelecionadaAgenda)) {
      //PUT
      setResposta(202);
      setDataAgenda(DATAAGENDA_INICIAL)
      setLinhaSelecionadaAgenda({ id: 0 });
      setIndex(1)
    }
  }

  const DELETEAgenda = () => {
    //DELETE
    setResposta(203);
    setDataAgenda(DATAAGENDA_INICIAL)
    setLinhaSelecionadaAgenda({ id: 0 });
    setIndex(1)
  }

  const FINDAgenda = () => {
    //FIND
    setResposta(208);
  }

  const POSTCliente = () => {
    if (validarCliente(novoCliente)) {
      //POST

      setNovoCliente(CLIENTE_INICIAL);
      setResposta(205);
      if (clienteCriadoComboBox) {
        setIndex(2);
        setClienteCriadoComboBox(false);
      } else {
        setIndex(1);
      }
    }
  }

  const PUTCliente = () => {
    if (validarCliente(linhaSelecionadaCliente)) {
      //PUT
      setResposta(206);
      setLinhaSelecionadaCliente({ id: 0 });
      setIndex(1)
    }
  }

  const DELETECliente = () => {
    //DELETE
    setResposta(207);
    setLinhaSelecionadaCliente({ id: 0 });
    setIndex(1)
  }

  const FINDCliente = () => {
    //FIND
    setResposta(208);
  }

  return (
    <AuthContext.Provider value={{
      index, setIndex,
      resposta, setResposta,
      novoCliente, setNovoCliente,
      chamadoHTTP, setChamadoHTTP,
      clientes, setClientes,
      linhaSelecionadaCliente, setLinhaSelecionadaCliente,
      dialogo, setDialogo,
      pesquisaCliente, setPesquisaCliente,
      linhaSelecionadaAgenda, setLinhaSelecionadaAgenda,
      marcacoes, setMarcacoes,
      novaMarcacao, setNovaMarcacao,
      pesquisaMarcacao, setPesquisaMarcacao,
      clienteCriadoComboBox, setClienteCriadoComboBox,
      examesOfertados, setExamesOfertados,
      dataAgenda, setDataAgenda
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);