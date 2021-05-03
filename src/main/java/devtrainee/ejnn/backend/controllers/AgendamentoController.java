package devtrainee.ejnn.backend.controllers;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import static org.springframework.http.HttpStatus.FORBIDDEN;

import javax.servlet.http.HttpServletResponse;

import devtrainee.ejnn.backend.services.AgendamentoService;

import devtrainee.ejnn.backend.dtos.AgendamentoOutputDTO;
import devtrainee.ejnn.backend.dtos.AgendamentoUpdateDTO;


@RestController
@RequestMapping("/agendamentos")
@AllArgsConstructor
public class AgendamentoController {

    private AgendamentoService agendamentoService;

    @GetMapping
    public List<AgendamentoOutputDTO> get() {
	return agendamentoService.findAll();
    }

    @PatchMapping("/{id}")
    public AgendamentoOutputDTO put(@RequestBody AgendamentoUpdateDTO agendamento,
				    @PathVariable long id,
				    HttpServletResponse res) {
	return agendamentoService.patch(id, agendamento);
    }
    

}
