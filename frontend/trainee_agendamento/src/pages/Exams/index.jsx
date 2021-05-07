import Main from "../../components/Main";
import ExamCard from "../../components/ExamCard";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Exams() {
  const [examesList, setExamesList] = useState([]);

  const instance = axios.create({
    baseURL: 'http://localhost:8080/backend',
    headers: {'api-version' : '1'}
  });

  function findExamList() {
    instance.get(`/exames/v1/consultar`)
      .then((res) => {
        setExamesList(res.data);
      });
  }

  useEffect(() => {
    findExamList();
  }, []);
 
  return (
    <Main>
      <div className="clients-resume">
        <div className="container-title">
          <h2>Exames Cadastrados</h2>
        </div>

        <div className="clients-card">
          { examesList.length > 0 ? examesList.map((data) => {
            return (
              <ExamCard 
                key = {data.id}
                titulo = "Exame"
                data = {data}
                examesList = {examesList}
                setExamesList = {setExamesList} />
              )
            })
           : "Nenhum exame cadastrado"
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
              path = "/exames/cadastrar"
              name = "Cadastrar Exame" />
          </div>
        </div>
      </div>
    </Main>
  )
};

export default Exams;