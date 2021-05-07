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

#EndPoints 

## Clientes

### `GET` Retorna todos os clientes 

```
http://localhost:3000/desafiotreinee/clientes/v1/consulta
```

### `GET` Retorna os dados pelo CPF 

```
http://localhost:3000/desafiotreinee/clientes/v1/consulta/cpf/71469653338
```

### `POST` Cria um novo cadastro 
```
http://localhost:3000/desafiotreinee/clientes/v1/cadastro/cliente
```

response 
```json
{
 	"cpf": "01776808061",
	"nome": "nome4 ",
    "sobrenome": "sobreno4 ",
    "dataNascimento": "13/10/1990"
}
```


### `PUT` Atualiza cadastro pelo CPF

```
http://localhost:3000/desafiotreinee/clientes/v1/atualizar/cliente/82533786373
```

response 
```json
{  
    "nome": "novo nome da Joana 2",
    "sobrenome": "sobre  44",
    "dataNascimento": "01/07/2003"
}
```

### `DELETE` Deleta cadastro pelo CPF

```
http://localhost:3000/desafiotreinee/clientes/v1/deletar/cpf/71469653338
```


## Angendamentos 

### `GET` todos os agendamentos

```
http://localhost:3000/desafiotreinee/agenda/v1/consulta
```

### `PUT` Atualiza agendamento pelo id

```
http://localhost:3000/desafiotreinee/agenda/v1/editar/agendamento/3
```

response 
```json
 {
    
    "dataAgendada": "10/06/2021",
    "horaAgendada": "17:15"
  }
```

### `DELETE` Deleta agendamento pelo id

```
http://localhost:3000/desafiotreinee/agenda/v1/deletar/id/1
```

## Exames 

### Retorna todos os exames

```
http://localhost:3000/desafiotreinee/exames/v1/consulta
```




