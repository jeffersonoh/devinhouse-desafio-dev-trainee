package br.com.devinhouse.thiago_mathias_simon.controller;

import br.com.devinhouse.thiago_mathias_simon.dto.PacienteDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.PacienteEntity;
import br.com.devinhouse.thiago_mathias_simon.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/paciente")
public class PacienteController {

    private static final String HEADERS_VERSION_1 = "api-version=v1";

    @Autowired
    private PacienteService service;

    @ResponseStatus(value = CREATED)
    @PostMapping(headers = HEADERS_VERSION_1, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public PacienteDTO cadastrarPaciente(@RequestBody PacienteEntity novoPaciente) {
        return service.cadastrarPaciente(novoPaciente);
    }

    @GetMapping(headers = HEADERS_VERSION_1, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable<PacienteEntity> listarPacientes() {
        return service.listarPacientes();
    }

    @GetMapping(headers = HEADERS_VERSION_1, value = "/cpf", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable<PacienteEntity> buscarPacientePorCpf(@RequestParam String valor) {
        return service.buscarPacientePorCpf(valor);
    }

    @GetMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public PacienteEntity buscarPacientePorId(@PathVariable long id){
        return service.buscarPacientePorId(id);
    }

    @PutMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public PacienteDTO atualizarPaciente(@PathVariable long id, @RequestBody PacienteEntity pacienteAtualizado) {
        return service.atualizarPaciente(id, pacienteAtualizado);
    }

    @DeleteMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public PacienteDTO deletarPaciente(@PathVariable long id) {
        return service.deletarPaciente(id);
    }

}
