package devtrainee.ejnn.backend.controllers;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import devtrainee.ejnn.backend.services.AgendamentoService;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;

@RestController
@RequestMapping("/agendamentos")
@AllArgsConstructor
public class AgendamentoController {

    private AgendamentoService agendamentoService;

    @GetMapping
    public List<AgendamentoOutputDTO> get() {
	return agendamentoService.findAll();
    }

}
