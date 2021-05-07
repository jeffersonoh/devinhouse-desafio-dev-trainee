import { useState, useEffect } from "react";
import axios from "axios";
import Main from "../../components/Main";
import ScheduleCard from "../../components/ScheduleCard";
import Button from "../../components/Button";

function Schedules() {
  const [schedulesList, setSchedulesList] = useState([]);
  
  const instance = axios.create({
    baseURL: 'http://localhost:8080/backend',
    headers: {'api-version' : '1'}
  }); 
 
  function findSchedulesList() {
    instance.get(`/agendamentos/v1/consultar`)
      .then((res) => {
        setSchedulesList(res.data);
      });    
  }

  useEffect(() => {
    findSchedulesList();
  }, []);

  return (
    <Main>
      <div className="schedules-resume">
        <div className="container-title">
          <h2>Agendamentos Cadastrados</h2>
        </div>

        <div className="schedule-card">
          { schedulesList.length > 0 ? schedulesList.map((agendamento) => {
            return (
              <ScheduleCard 
              key = {agendamento.id}
              titulo = "Agendamento"
              data = {agendamento}
              schedulesList = {schedulesList}
              setSchedulesList = {setSchedulesList} />
              )
          })
          : 
          <p>Nenhum agendamento encontrado</p>
        }
        </div>
      </div>

      <div className="right-content">
        <div className="shortcuts-buttons">
          <div className="container-title">
            <h2>Ações</h2>
          </div>
          <div className="container-buttons">
            <Button 
              path = "/agendamentos/cadastrar"
              name = "Cadastrar Agendamento" />
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Schedules;