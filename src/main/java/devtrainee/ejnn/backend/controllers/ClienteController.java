package devtrainee.ejnn.backend.controllers;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import devtrainee.ejnn.backend.dtos.ClienteInputDTO;
import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;

import devtrainee.ejnn.backend.services.ClienteService;

@RestController
@RequestMapping("/clientes")
@AllArgsConstructor
public class ClienteController {

    private ClienteService clienteService;

    @PostMapping(consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(CREATED)
    public ClienteOutputDTO post(@RequestBody ClienteInputDTO cliente) {
	return clienteService.create(cliente);
    }

    @GetMapping("/{id}")
    public ClienteOutputDTO getById(@PathVariable long id) {
	return clienteService.findById(id);
    }

    @GetMapping
    public List<ClienteOutputDTO> searchByCpf(@RequestParam String cpf) {
	return clienteService.searchByCpf(cpf);
    }
}