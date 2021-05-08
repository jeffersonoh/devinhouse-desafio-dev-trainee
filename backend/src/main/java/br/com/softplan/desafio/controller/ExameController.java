package br.com.softplan.desafio.controller;

import br.com.softplan.desafio.entity.Exame;
import br.com.softplan.desafio.service.ExameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/exames")
public class ExameController {

    @Autowired
    private ExameService exameService;

    /**
     * GET /exames/
     */
    @GetMapping(value = "/", produces = APPLICATION_JSON_VALUE)
    public List<Exame> listarTodos() {

        return exameService.buscarTodos();
    }

}
