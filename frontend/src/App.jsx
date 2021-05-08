

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import HomePage from './pages/HomePage';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainStructure from "./components/MainStructure";
import routes from "./routes";
import "./App.css";

function App() {
  return (
    <>
      {/*
        O nosso desafio de frontend será em criar um CRUD para realização de agendamentos de consultas
         e exames online.

        ## Regras de Negócio

        - Cliente precisa estar cadastrado para realizar o agendamento;
        - O cadastro de cliente deverá ter os campos: Nome, CPF e Data de Nascimento;
        - Não poderá ser cadastrado mais de um cliente para o mesmo CPF;

        ## Features

        - Deverá uma tela para listagem dos exames disponíveis para agendamento, exibindo apenas nome
         do exame e id;
        - Deverá haver uma tela para criação de um cliente;
        - Deverá haver uma tela para atualização de um cliente;
        - Deverá haver uma tela para exclusão de um cliente;
        - Deverá haver uma tela para busca de um cliente baseado no seu cpf;
        - Deverá haver uma tela para listagem de todos os clientes cadastrados;
        - Deverá haver uma tela para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
        - Deverá haver uma tela para exclusão de um agendamento realizado;

    */}
      <CssBaseline />
      <Router>
        <Switch>
          <MainStructure>
            {/* <Route path="/busca/:query" render={({ match }) =>
            <SearchResultsPage query={match.params.query} />} />
            
            <Route path="/detalhes/:id" render={({ match }) =>
            <ProductDetailsPage productId={match.params.id} />} />
            
            <Route path="/carrinho">
            <ShoppingCartPage />
          </Route> */}

            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </MainStructure>
        </Switch>
      </Router>
    </>
  );
}

export default App;
