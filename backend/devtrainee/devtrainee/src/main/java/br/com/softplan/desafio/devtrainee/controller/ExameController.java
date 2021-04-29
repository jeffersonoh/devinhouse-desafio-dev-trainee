package br.com.softplan.desafio.devtrainee.controller;

import br.com.softplan.desafio.devtrainee.entity.Exame;
import br.com.softplan.desafio.devtrainee.service.ExameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/soft-exams")
public class ExameController {

    @Autowired
    ExameService exameService;

    @GetMapping
    public List<Exame> getExames() {
        return exameService.getExames();
    }

}
