# Backend

## Descrição

O nosso desafio de backend será em criar uma api **RESTFULL** para realização de agendamentos de consultas e exames online.

## Regras de Negócio

- Cliente precisa estar cadastrado para realizar o agendamento;
- O cadastro de cliente deverá ter os campos: Nome, CPF e Data de Nascimento;
- Não poderá ser cadastrado mais de um cliente para o mesmo CPF;

## Features

- Deverá haver um endpoint para listagem dos exames disponíveis para agendamento, exibindo apenas nome do exame e id;
- Deverá haver um endpoint para criação de um cliente;
- Deverá haver um endpoint para atualização de um cliente;
- Deverá haver um endpoint para exclusão de um cliente;
- Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
- Deverá haver um endpoint para listagem de todos os clientes cadastrados;
- Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
- Deverá haver um endpoint para exclusão de um agendamento realizado;

## Requisitos

- Spring boot 2.x. e Maven para o backend;

## Considerações

* Considere em utilizar dados mockados ou fictícios para o cumprimento do nosso desafio como por exemplo a listagem de exames disponíveis;

## Diferenciais

* Não é obrigatório o uso de banco de dados em memória H2 ou quaisquer equivalente, mas seu uso será um diferencial;

* Não é obrigatório o uso dos conceitos de Spring Data dentro de nossa aplicação, mas seu uso será um diferencial;

* Não é obrigatório o uso dos conceitos de Testes unitários Junit 4.x., mas seu uso será um diferencial;

  





