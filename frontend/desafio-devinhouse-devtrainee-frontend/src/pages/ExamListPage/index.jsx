import { useState, useEffect } from "react";

import { Container, Wrapper } from "./styles";

import Header from "../../components/Header";
import ListItemModel from "../../components/ListItemModel";
import Footer from "../../components/Footer";
import LightDivindingLine from "../../components/LightDividingLine";
import ExamesAPI from "../../services/exames";
import Loading from "../../components/Loading";

function ExamListPage() {
  const [loaded, setLoaded] = useState(false);

  const [exames, setExames] = useState([]);

  const carregarExames = async () => {
    const exam = await ExamesAPI.listarExames();
    setExames(exam);
  };

  useEffect(() => {
    carregarExames();

    console.log(exames);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <h1> Lista de Exames</h1>
        <LightDivindingLine />
        <Wrapper>
          {console.log(exames)}
          {loaded === false && setTimeout(() => setLoaded(true), 3000) && (
            <Loading />
          )}
          {loaded === true &&
            exames.length !== 0 &&
            exames.map((exam, index) => {
              return (
                <ListItemModel
                  key={index}
                  id={exam.id}
                  examName={exam.examName}
                />
              );
            })}
          {loaded === true && exames.length === 0 && (
            <h2>Não há exames para serem exibidos!</h2>
          )}
        </Wrapper>
        <br />
        <Footer />
      </Container>
    </>
  );
}

export default ExamListPage;
