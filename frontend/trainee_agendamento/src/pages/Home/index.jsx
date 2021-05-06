import React, { useState, useEffect } from "react";
import Main from "../../components/Main";
import ScheduleCard from "../../components/ScheduleCard";
import Button from "../../components/Button";

function Home() {
  

  return (
    <>
      <Main>
        <div className="schedules-resume">
          <div className="container-title">
            <h2>Agendamentos Realizados</h2>
          </div>

          <div className="schedule-card">
          </div>
        </div>

        <div className="right-content">
          <div className="shortcuts-buttons">
            <div className="container-title">
              <h2>Acesso Rápido</h2>
            </div>
            <div className="container-buttons">
              <Button 
                path = "/clientes/cadastrar"
                name = "Cadastrar Cliente" />
              <Button 
                path = "/exames/cadastrar"
                name = "Cadastrar Exame" />
              <Button 
                path = "/agendamentos/cadastrar"
                name = "Cadastrar Agendamento" />
            </div>
          </div>

          <div className="basic-information">
            <div className="container-title">
              <h2>Informações Básicas</h2>
            </div>
            <div className="container-info">
              <ul>
                <li>
                  <p className="container-info-description">Para realizar um agendamento é necessário cadastrar ao menos um cliente e o exame será realizado.</p>
                </li>
                <li>
                  <p className="container-info-description">Todas as informações solicitadas são obrigatórias para o correto funcionamento da plataforma.</p>
                </li>
                <li>
                  <p className="container-info-description">Somente é possível reagendar o dia e horário do exame, a troca de cliente e exame enseja na criação de um novo agendamento.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
};

export default Home;