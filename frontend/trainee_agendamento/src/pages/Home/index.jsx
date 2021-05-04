import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import Main from "../../components/Main";
import ScheduleCard from "../../components/ScheduleCard";
import Button from "../../components/Button";
// import action from "../../services/api";
// import { toast } from "react-toastify";

function Home() {
  // const [scheduleDetails, setScheduleDetails] = useState({});
  // const history = useHistory();

  // const handleDeleteSchedule = () => {
  //   const id = scheduleDetails.id;

  //   const response = action.removeSchedule(id);
  //   history.push("/");
  //   toast.success(`Agendamento ${scheduleDetails.id} removido com sucesso`, {
  //     position: "top-right";
  //     autoClose: 4000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };

  return (
    <>
      <Main>
        <div className="schedules-resume">
          <div className="container-title">
            <h2>Agendamentos Realizados</h2>
          </div>

          <div className="schedule-card">
              <ScheduleCard 
              titulo = "Agendamento"
              data = "20/05/2021"
              hora = "08:00"
              nome = "Jose da Silva"
              exame = "Raio X" />

              <ScheduleCard 
              titulo = "Agendamento"
              data = "21/05/2021"
              hora = "09:00"
              nome = "Jose da Silva"
              exame = "Ressonancia Magnetica" />

              <ScheduleCard 
              titulo = "Agendamento"
              data = "22/05/2021"
              hora = "10:00"
              nome = "Jose da Silva"
              exame = "Raio X" />

              <ScheduleCard 
              titulo = "Agendamento"
              data = "22/05/2021"
              hora = "11:00"
              nome = "Jose da Silva"
              exame = "Ressonancia Magnetica" />
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