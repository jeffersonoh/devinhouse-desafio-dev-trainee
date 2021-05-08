package br.com.devinhouse.thiago_mathias_simon.controller;

import br.com.devinhouse.thiago_mathias_simon.entity.ExameEntity;
import br.com.devinhouse.thiago_mathias_simon.service.ExameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1" + "/exame")
public class ExameController {

    private static final String HEADERS_VERSION_1 = "api-version=v1";

    @Autowired
    private ExameService service;

    @GetMapping(headers = HEADERS_VERSION_1, produces = APPLICATION_JSON_VALUE)
    @ResponseBody
    public Iterable<ExameEntity> listarExames() {
        return service.listarExames();
    }

}
