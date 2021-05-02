package br.com.softplan.desafio.devtrainee.controller;

import br.com.softplan.desafio.devtrainee.dto.AgendamentoDTO;
import br.com.softplan.desafio.devtrainee.entity.Agendamento;

import br.com.softplan.desafio.devtrainee.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/agendamentos")
public class AgendamentoController {

    @Autowired
    AgendamentoService agendamentoService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public List<Agendamento> buscaAgendamento() {
        return agendamentoService.getAgendamentos();
    }

    @GetMapping(path = "{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Agendamento buscaAgendamentoPorId(@PathVariable Long id) {
    	return agendamentoService.getAgendamentoById(id);
    }
    
    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void realizarAgendamento(@RequestBody AgendamentoDTO agendamentoDTO) {
        agendamentoService.criarAgendamento(agendamentoDTO);
    }

    @PutMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarAgendamento(@PathVariable Long id,
    								 @RequestBody AgendamentoDTO dataAgendamento) {
    	agendamentoService.atualizarExame(id, dataAgendamento);
    }
    
    @DeleteMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void excluirAgendamento(@PathVariable Long id) {
    	agendamentoService.excluirAgendamento(id);
    }

}
