package br.com.devinhouse.spring.trabalhospringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.spring.trabalhospringboot.dto.ExamesDTO;
import br.com.devinhouse.spring.trabalhospringboot.service.ExamesService;

@RestController
@RequestMapping(path = "/" + ExamesController.VERSION + "/exames",
                headers = "version=" + ExamesController.VERSION)
public class ExamesController {
    
    static final String VERSION = "v1";

    @Autowired
    private ExamesService service;

    @GetMapping
    public List<ExamesDTO> listaDeTodosExamesOfertados(){
        return service.listaDeTodosExamesOfertados();
    }

}
