import { Model } from "miragejs";
import { createServer } from "miragejs";
import { exames } from "../utils/mockExames";
import { agendamentos } from "../utils/mockAgendados";
import { clientes } from "../utils/mockClients";
import * as constants from "./constants";

export function criarServidor({ enviroment = "test" } = {}) {
  let server = createServer({
    enviroment,

    models: {
      exames: Model,
      clientes: Model,
      agendamentos: Model,
    },

    seeds(server) {
      exames.forEach((exames) => server.create("exame", exames));
      clientes.forEach((clientes) => server.create("cliente", clientes));
      agendamentos.forEach((agendamentos) =>
        server.create("agendamento", agendamentos)
      );
    },
    routes() {
      this.namespace = constants.AGENDAMENTO_API;

      this.get("/exames", (schema) => {
        return schema.exames.all().models;
      });

      this.get("/listagem/clientes", (schema, request) => {
        const busca = request.queryParams.busca;

        if (busca) {
          return schema.clientes.where((cliente) => cliente.cpf.includes(busca))
            .models;
        }

        return schema.clientes.all().models;
      });

      this.delete("/listagem/clientes/:cpf", (schema, request) => {
        const cpf = request.params.cpf;
        return schema.clientes
          .where((cliente) => cliente.cpf === cpf)
          .models[0].destroy();
      });

      this.post("/listagem/clientes", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.clientes.create(attrs);
      });

      this.put("/listagem/clientes", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.clientes.create(attrs);
      });

      this.get("/agenda", (schema, request) => {
        const busca = request.queryParams.busca;

        if (busca) {
          return schema.agendamentos.where((agendamento) =>
            agendamento.id.includes(busca)
          ).models;
        }

        return schema.agendamentos.all().models;
      });

      this.delete("/agenda/:id", (schema, request) => {
        const id = request.params.id;
        return schema.agendamentos.find(id).destroy();
      });

      this.put("/agenda", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.agendamentos.create(attrs);
      });
    },
  });
  return server;
}
