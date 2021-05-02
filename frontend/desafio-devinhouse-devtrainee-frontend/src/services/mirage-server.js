import { exames, agendamentos } from "../util/constantes";
import { createServer, Model } from "miragejs";
//import * as baseendpoints from "./baseendpoints";

export function criarServidor({ environment = "test" } = {}) {
  const server = createServer({
    environment,
    models: {
      exame: Model,
      agendamento: Model,
    },

    seeds(server) {
      exames.forEach((exame) => server.create("exame", exame));
      agendamentos.forEach((agendamento) =>
        server.create("agendamento", agendamento)
      );
    },

    routes() {
      this.namespace = "";

      this.get("/exames", (schema, request) => {
        console.log("schema", schema);
        return schema.exames.all().models;
      });

      this.get("/agendamento/listar", (schema, request) => {
        return schema.agendamentos.all().models;
      });
      /*
      this.get("/processo", (schema, request) => {
        const q = request.queryParams.q;
        console.log("q", q);
        if (q) {
          console.log("requisição de busca com parâmetros");
          return schema.processos.where(
            (processo) =>
              processo.numero.includes(q) ||
              processo.assunto.includes(q) ||
              processo.interessados.includes(q) ||
              processo.descricao.includes(q)
          ).models;
        }
        console.log("schema", schema);
        return schema.processos.all().models;
      });

      this.get("/processo/:id", (schema, request) => {
        const id = request.params.id;
        return schema.processos.find(id).attrs;
      });

      this.post("/processo", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = contador;
        console.log("attrs", attrs);
        return schema.processos.create(attrs);
      });

      this.put("/processo", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.processos.create(attrs);
      });

      this.delete("/processo/:id", (schema, request) => {
        const id = request.params.id;
        return schema.processos.find(id).destroy();
      });

     */
    },
  });

  return server;
}
