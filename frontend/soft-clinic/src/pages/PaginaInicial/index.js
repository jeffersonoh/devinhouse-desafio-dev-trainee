import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import CardPaginaInicial from "../../components/CardPaginaInicial";
import Container from "../../components/Container";

export default function PaginaInicial() {
  return (
    <>
      <Container style={{ margin: "0 auto" }}>
        <Grid item>
          <CardPaginaInicial
            title="Cliente"
            subtitle="Saiba mais sobre a página de Cliente clicando na seta abaixo"
            textParagraph="Na area de Clientes você deverá encontrar todos os clientes disponíveis, podendo buscar um cliente, cadastar, editar e excluir um cliente. Antente-se ao tentar excluir um cliente, cuide para que ele não possua nenhum agendamento pendente"
            buttonLink={
              <Link to={"/clientes"}>
                <div>Pagina de Clientes</div>
              </Link>
            }
          />
        </Grid>
        <Grid item>
          <CardPaginaInicial
            title="Agendamento"
            subtitle="Saiba mais sobre a página de Agendamento clicando na seta abaixo"
            textParagraph="Na area de Agendamentos você deverá encontrar todos os agendamentos disponíveis, cadastar, editar a data/hora e excluir um agendamento"
            buttonLink={
              <Link to={"/agendamentos"}>
                <div>Pagina de Agendamentos</div>
              </Link>
            }
          />
        </Grid>
        <Grid item>
          <CardPaginaInicial
            title="Exame"
            subtitle="Saiba mais sobre a página de Exame clicando na seta abaixo"
            textParagraph="Na area de Exames você deverá encontrar todos os exames disponíveis, podendo buscar um exame específico, cadastar e excluir um exame"
            buttonLink={
              <Link to={"/exames"}>
                <div>Pagina de Exames</div>
              </Link>
            }
          />
        </Grid>
      </Container>
    </>
  );
}
