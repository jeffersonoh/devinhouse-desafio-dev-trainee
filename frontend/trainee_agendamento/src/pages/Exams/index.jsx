import Main from "../../components/Main";
import ExamCard from "../../components/ExamCard";
import Button from "../../components/Button";


function Exams() {
  return (
    <Main>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Exames Cadastrados</h2>
        </div>

        <div className="clients-card">
          <ExamCard 
            titulo = "Exame"
            id = "1"
            nome = "Raio X" />

            <ExamCard 
            titulo = "Exame"
            id = "2"
            nome = "Raio X" />

            <ExamCard 
            titulo = "Exame"
            id = "3"
            nome = "Raio X" />

            <ExamCard 
            titulo = "Exame"
            id = "4"
            nome = "Raio X" />

            <ExamCard 
            titulo = "Exame"
            id = "5"
            nome = "Raio X" />

            <ExamCard 
            titulo = "Exame"
            id = "6"
            nome = "Raio X" />


        </div>
      </div>


      <div className="right-content">
        <div className="shortcuts-buttons">
          <div className="container-title">
            <h2>Ações</h2>
          </div>
          <div className="container-buttons">
          <Button 
              name = "Cadastrar Exame" />
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Exams;