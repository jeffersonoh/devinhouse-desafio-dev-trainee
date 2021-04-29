package br.com.softplan.desafio.devtrainee.controller;

import br.com.softplan.desafio.devtrainee.dto.AgendamentoDTO;
import br.com.softplan.desafio.devtrainee.entity.Agendamento;

import br.com.softplan.desafio.devtrainee.service.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/v1/agendamento")
public class AgendamentoController {

    @Autowired
    AgendamentoService agendamentoService;

    @GetMapping
    public List<Agendamento> buscaAgendamento() {
        return agendamentoService.getAgendamentos();
    }

    @PostMapping()
    public void realizarAgendamento(@RequestBody AgendamentoDTO agendamentoDTO) {
        agendamentoService.criarAgendamento(agendamentoDTO);
    }



}
