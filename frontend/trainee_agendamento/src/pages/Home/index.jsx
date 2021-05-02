import React from "react";
import Main from "../../components/Main";
import Card from "../../components/Card";
import "../../styles/home.css";
import Button from "../../components/Button";
import Modal from "../../components/Modal";

function Home() {
  const modalRef = React.useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      <Main>
        <div className="schedules-resume">
          <div className="container-title">
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

        <div className="right-content">
          <div className="shortcuts-buttons">
            <div className="container-title">
              <h2>Acesso Rápido</h2>
            </div>
            <div className="container-buttons">
              <Button 
                name = "Cadastrar Cliente" />
              <Button 
                name = "Cadastrar Exame" />
              <Button 
                name = "Agendar Exame" />
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

      <Modal ref={modalRef} title="Cadastrar Cliente">
        {/* Formulario desejado */}
        {/* comando de chamada: onClick={() => modalRef.current.openModal()} */}
      </Modal>

    </>
  )
};

export default Home;