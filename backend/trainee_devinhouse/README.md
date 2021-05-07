# Backend Desafio DEVinHouse Trainee

### Como utilizar
* Rode o git clone deste repositório 
* Realize a importação do projeto através da sua IDE
* Utilize o SpringBoot Dashboard para rodar o projeto 

### Métodos e Rotas
* Método - Rotas disponíveis
  * POST - /backend/clientes/v1/cadastrar 
  * POST - /backend/exames/v1/cadastrar 
  * POST - /backend/agendamentos/v1/cadastrar 
  * GET - /backend/clientes/v1/consultar
  * GET - /backend/clientes/v1/consultar/cpf/{cpf}
  * GET - /backend/exames/v1/consultar 
  * GET - /backend/agendamentos/v1/consultar 
  * GET - /backend/agendamentos/v1/consultar/id/{id} 
  * PUT - /backend/clientes/v1/atualizar/cpf/{cpf}
  * PUT - /backend/agendamentos/v1/atualizar/id/{id}
  * DELETE - /backend/clientes/v1/deletar/cpf/{cpf} 
  * DELETE - /backend/exames/v1/deletar/id/{id} 
  * DELETE - /backend/agendamentos/v1/deletar/id/{id} 

* Controle de versionamento atraves do header
  * api-version=1 