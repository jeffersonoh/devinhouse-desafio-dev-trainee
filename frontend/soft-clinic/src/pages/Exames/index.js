import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardExames from "../../components/CardExames";

import Container from "../../components/Container";
import HeaderContainer from "../../components/HeaderContainer";
import ExameService from "../../services/ExameService";

export default function Exames() {
  const [exames, setExames] = useState([]);

  const buscaExames = async () => {
    try {
      const res = await ExameService.buscaExames();
      setExames(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscaExames();
  }, []);

  const buscaExameNome = async (nomeDoExame) => {
    const res = await ExameService.buscaExameNome(nomeDoExame);
    setExames([res]);
  };

  return (
    <>
      <Container>
        <HeaderContainer busca={buscaExameNome} />
        {exames.length > 0 ? (
          exames.map((item, index) => (
            <CardExames
              buscaExames={buscaExames}
              key={index}
              item={item}
              titulo="Nome do Exame"
            />
          ))
        ) : (
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Nenhum Exame cadastrado</Typography>
          </Grid>
        )}
      </Container>
    </>
  );
}
