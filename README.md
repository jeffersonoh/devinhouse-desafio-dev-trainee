# DEVinHouse desafio Devtrainee

## Sobre
O desafio foi construir um aplicativo fullstack para consulta e controle de cadastros, exames e agendamentos para funcionários de um hospital fictício.

## Frontend
Meu frontend foi feito principalmente com [React](https://reactjs.org/) e [Material-UI](https://material-ui.com). Veja a demo clicando [aqui!](https://ejnn.github.io/devinhouse-desafio-devtrainee/)

## Backend
Já o backend foi feito à base de [Spring](https://spring.io) e está exposto em ```https://devtrainee-ejnn-backend.herokuapp.com```!

### Entidades e endpoints

#### Exame
```json
{
  "id": 1,
  "nome": "Hemograma"
}
```

#### Cliente
```json
{
  "id": 1,
  "nome": "Eduardo",
  "sobrenome": "Nicolau",
  "cpf": "00000000000",
  "dataDeNascimento": "2000-01-01T12:00:00.000-03:00",
  "agendamentos": [...]
}
```

#### Agendamento
```json
{
  "id": 1,
  "timestamp": "2000-01-01T12:00:00.000-03:00",
  "cliente": {...},
  "exame": {...}
}
```

#### Endpoints
+ GET/POST /v1/exames
+ GET /v1/exames/page?page=x&size=y
+ GET/DELETE/PUT /v1/exames/{id}

E o mesmo para as outras entidades! 