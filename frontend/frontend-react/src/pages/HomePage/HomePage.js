import React, { useState, useEffect } from "react";

import BarraPrincipal from "../../components/Header/BarraPrincipal";
import ExamesDropdownArea from "./BoxHomePage/ExamesDropdownArea";
import RequestBackendExame from "../../utils/ExameRequest";

export default function HomePage() {
  const [lista, setLista] = useState([]);
  
  useEffect(() => {
    const handleLista = async () => {
      const listaExames = await RequestBackendExame.getTodosExames();
      setLista(listaExames);
    };
    handleLista();
  },[]);

  return (
    <div>
      <BarraPrincipal />
      <ExamesDropdownArea listaExames={lista}/>
    </div>
  );
}