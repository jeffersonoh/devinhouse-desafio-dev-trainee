package br.com.devinhouse.spring.trabalhospringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.spring.trabalhospringboot.dto.AgendaDTO;
import br.com.devinhouse.spring.trabalhospringboot.service.AgendaService;

@RestController
@RequestMapping(path = "/" + AgendaController.VERSION + "/agenda",
                headers = "version=" + AgendaController.VERSION)
public class AgendaController {
    
    static final String VERSION = "v1";

    @Autowired
    private AgendaService service;

    @GetMapping(path = "/todos")
    public List<AgendaDTO> listaDeTodaAgenda(){
        return service.listaDeTodaAgenda();
    }

    @PostMapping(path = "/cadastrar",
                headers = "version=" + AgendaController.VERSION)
    public void cadastrarExameNaAgenda(@RequestBody AgendaDTO cadastroDeExame){
        service.cadastrarExameNaAgenda(cadastroDeExame);
    }
    
    @PutMapping(path = "/atualizar/{id}")
    public void atualizarCliente(@PathVariable("id") Integer id,
                                 @RequestBody AgendaDTO agendaAtualizar){
    service.atualizarAgenda(agendaAtualizar, id);
    }

    @DeleteMapping(path = "/deletar/{id}")
    public void deletarAgenda(@PathVariable("id") Integer id){
        service.deletarAgenda(id);
    }

}
