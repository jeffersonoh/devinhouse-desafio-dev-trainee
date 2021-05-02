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
    const exames = await ExamesAPI.buscarExames();
    setExames(exames);
  };

  useEffect(() => {
    carregarExames();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <h1> Lista de Exames</h1>
        <LightDivindingLine />
        <Wrapper>
          {loaded === false && setTimeout(() => setLoaded(true), 4000) && (
            <Loading />
          )}
          {loaded === true &&
            exames.map((exam, index) => {
              return (
                <ListItemModel key={index} id={exam.id} examName={exam.nome} />
              );
            })}
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}

export default ExamListPage;
