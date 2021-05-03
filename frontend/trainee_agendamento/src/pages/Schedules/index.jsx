import Main from "../../components/Main";
import ScheduleCard from "../../components/ScheduleCard";
import Button from "../../components/Button";

function Schedules() {
  return (
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
            <h2>Ações</h2>
          </div>
          <div className="container-buttons">
            <Button 
              name = "Agendar Exame" />
          </div>
        </div>
      </div>

    </Main>
  )
};

export default Schedules;