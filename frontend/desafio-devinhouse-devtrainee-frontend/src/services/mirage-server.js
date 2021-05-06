import { exames, agendamentos, pacientes } from "../util/constantes";
import { createServer, Model } from "miragejs";

let patientCounter = pacientes.length;
let schedeludedExamsCounter = agendamentos.length;

export function criarServidor({ environment = "test" } = {}) {
  const server = createServer({
    environment,
    models: {
      exame: Model,
      agendamento: Model,
      paciente: Model,
    },

    seeds(server) {
      exames.forEach((exame) => server.create("exame", exame));
      agendamentos.forEach((agendamento) =>
        server.create("agendamento", agendamento)
      );
      pacientes.forEach((paciente) => server.create("paciente", paciente));
    },

    routes() {
      this.namespace = "/v1";

      this.get("/exames", (schema, request) => {
        console.log("schema", schema);
        return schema.exames.all().models;
      });

      this.get("/agendamento", (schema, request) => {
        return schema.agendamentos.all().models;
      });

      this.get("/agendamento/:id", (schema, request) => {
        const id = request.params.id;
        return schema.agendamentos.find(id).attrs;
      });

      this.post("/agendamento", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = schedeludedExamsCounter;
        schedeludedExamsCounter++;
        console.log("attrs", attrs);
        return schema.agendamentos.create(attrs);
      });

      this.put("/agendamento/:id", (schema, request) => {
        const id = request.params.id;
        console.log("id", id);
        const attrs = JSON.parse(request.requestBody);
        attrs.id = id;
        console.log("attrs", attrs);
        return schema.agendamentos.create(attrs);
      });

      this.delete("/agendamento/:id", (schema, request) => {
        const id = request.params.id;
        return schema.agendamentos.find(id).destroy();
      });

      this.get("/paciente", (schema, request) => {
        const cpf = request.queryParams.cpf;
        console.log("cpf", cpf);
        if (cpf !== undefined) {
          console.log("requisição de busca com parâmetros");
          return schema.pacientes.where((paciente) =>
            paciente.patientCpf.includes(cpf)
          ).models;
        }
        return schema.pacientes.all().models;
      });

      this.get("/paciente/:id", (schema, request) => {
        const id = request.params.id;
        return schema.pacientes.find(id).attrs;
      });

      this.post("/paciente", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = patientCounter;
        patientCounter++;
        console.log("attrs", attrs);
        return schema.pacientes.create(attrs);
      });

      this.put("/paciente/:id", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        attrs.id = id;
        return schema.pacientes.create(attrs);
      });

      this.delete("/paciente/:id", (schema, request) => {
        const id = request.params.id;
        return schema.pacientes.find(id).destroy();
      });
    },
  });

  return server;
}
