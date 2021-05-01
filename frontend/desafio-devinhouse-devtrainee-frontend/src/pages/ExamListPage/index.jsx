import { Container, Wrapper } from "./styles";

import Header from "../../components/Header";
import ListItemModel from "../../components/ListItemModel";
import Footer from "../../components/Footer";
import LightDivindingLine from "../../components/LightDividingLine";

function ExamListPage() {
  let exames = [
    {
      id: 1,
      nome: "Endoscopia",
    },
    {
      id: 2,
      nome: "Eletrocardiograma",
    },
    {
      id: 3,
      nome: "Raio X",
    },
    {
      id: 4,
      nome: "Hemograma",
    },
    {
      id: 5,
      nome: "Endoscopia",
    },
    {
      id: 6,
      nome: "Endoscopia",
    },
    {
      id: 7,
      nome: "Endoscopia",
    },
    {
      id: 8,
      nome: "Endoscopia",
    },
    {
      id: 9,
      nome: "Endoscopia",
    },
    {
      id: 10,
      nome: "Endoscopia",
    },
    {
      id: 11,
      nome: "Endoscopia",
    },
    {
      id: 12,
      nome: "Endoscopia",
    },
  ];
  return (
    <>
      <Container>
        <Header />
        <h1> Lista de Exames</h1>
        <LightDivindingLine />
        <Wrapper>
          {exames.map((exam, position) => {
            return (
              <ListItemModel
                key={exam.id + position}
                id={exam.id}
                examName={exam.nome}
              />
            );
          })}
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
}

export default ExamListPage;
