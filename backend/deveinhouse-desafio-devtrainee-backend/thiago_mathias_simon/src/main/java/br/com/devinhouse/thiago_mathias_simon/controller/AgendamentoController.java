package br.com.devinhouse.thiago_mathias_simon.controller;

import br.com.devinhouse.thiago_mathias_simon.dto.AgendamentoDTO;
import br.com.devinhouse.thiago_mathias_simon.entity.AgendamentoEntity;
import br.com.devinhouse.thiago_mathias_simon.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/v1" + "/agendamento")
public class AgendamentoController {

    private static final String HEADERS_VERSION_1 = "api-version=v1";

    @Autowired
    private AgendamentoService service;

    @ResponseStatus(value = CREATED)
    @PostMapping(headers = HEADERS_VERSION_1, consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public AgendamentoDTO cadastrarAgendamento(@RequestBody AgendamentoEntity novoAgendamento) {
        return service.cadastrarAgendamento(novoAgendamento);
    }

    @GetMapping(headers = HEADERS_VERSION_1, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable<AgendamentoEntity> listarAgendamentos() {
        return service.listarAgendamentos();
    }

    @PutMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public AgendamentoDTO atualizarAgendamento(@PathVariable long id, @RequestBody AgendamentoEntity agendamentoAtualizado) {
        return service.atualizarAgendamento(id, agendamentoAtualizado);
    }

    @DeleteMapping(headers = HEADERS_VERSION_1, value = "/id/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public AgendamentoDTO deletarAgendamento(@PathVariable long id) {
        return service.deletarAgendamento(id);
    }

}
