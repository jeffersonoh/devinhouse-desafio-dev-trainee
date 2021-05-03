import React, { useState, useEffect } from "react";

import BarraPrincipal from "../../components/Header/BarraPrincipal";
import ExamesDropdownArea from "./BoxHomePage/ExamesDropdownArea";
import RequestBackend from "../../utils/api";

export default function HomePage() {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const handleLista = async () => {
      const listaExames = await RequestBackend.getTodosExames();
      setLista(listaExames);
    };
    handleLista();
  }, [lista]);
  return (
    <div>
      <BarraPrincipal />
      <ExamesDropdownArea listaExames={lista}/>
    </div>
  );
}
