import Header from "../../components/Header";
import Main from "../../components/Main";
import Card from "../../components/Card";
import "../../styles/home.css";

function Home() {
  return (
    <>
      <Header />
      <Main>
        <div className="schedules-resume">
          <div className="schedules-title">
            <h2>Agendamentos Realizados</h2>
          </div>

          <div className="schedule-cart">
              <Card 
              data = "20/05/2021"
              hora = "08:00"
              nome = "Jose da Silva"
              exame = "Raio X" />

              <Card 
              data = "21/05/2021"
              hora = "09:00"
              nome = "Jose da Silva"
              exame = "Ressonancia Magnetica" />

              <Card 
              data = "22/05/2021"
              hora = "10:00"
              nome = "Jose da Silva"
              exame = "Raio X" />

              <Card 
              data = "22/05/2021"
              hora = "11:00"
              nome = "Jose da Silva"
              exame = "Ressonancia Magnetica" />
          </div>
        </div>
      </Main>
    </>
  )
};

export default Home;