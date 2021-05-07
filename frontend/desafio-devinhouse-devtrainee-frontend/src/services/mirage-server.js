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
      this.namespace = "http://localhost:8080/devinhouse-backend/v1";

      this.get(this.namespace + "/exame", (schema, request) => {
        console.log("schema", schema);
        return schema.exames.all().models;
      });

      this.get(this.namespace + "/agendamento", (schema, request) => {
        return schema.agendamentos.all().models;
      });

      this.get(this.namespace + "/agendamento/id/:id", (schema, request) => {
        const id = request.params.id;
        return schema.agendamentos.find(id).attrs;
      });

      this.post(this.namespace + "/agendamento", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = schedeludedExamsCounter;
        schedeludedExamsCounter++;
        console.log("attrs", attrs);
        return schema.agendamentos.create(attrs);
      });

      this.put(this.namespace + "/agendamento/id/:id", (schema, request) => {
        const id = request.params.id;
        console.log("id", id);
        const attrs = JSON.parse(request.requestBody);
        attrs.id = id;
        console.log("attrs", attrs);
        return schema.agendamentos.create(attrs);
      });

      this.delete(this.namespace + "/agendamento/id/:id", (schema, request) => {
        const id = request.params.id;
        return schema.agendamentos.find(id).destroy();
      });

      this.get(this.namespace + "/paciente", (schema, request) => {
        return schema.pacientes.all().models;
      });

      this.get(this.namespace + "/paciente/cpf", (schema, request) => {
        const valor = request.queryParams.valor;
        return schema.pacientes.where((paciente) =>
          paciente.patientCpf.includes(valor)
        ).models;
      });

      this.get(this.namespace + "/paciente/id/:id", (schema, request) => {
        const id = request.params.id;
        return schema.pacientes.find(id).attrs;
      });

      this.post(this.namespace + "/paciente", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = patientCounter;
        patientCounter++;
        console.log("attrs", attrs);
        return schema.pacientes.create(attrs);
      });

      this.put(this.namespace + "/paciente/id/:id", (schema, request) => {
        const id = request.params.id;
        const attrs = JSON.parse(request.requestBody);
        attrs.id = id;
        return schema.pacientes.create(attrs);
      });

      this.delete(this.namespace + "/paciente/id/:id", (schema, request) => {
        const id = request.params.id;
        return schema.pacientes.find(id).destroy();
      });
    },
  });

  return server;
}
