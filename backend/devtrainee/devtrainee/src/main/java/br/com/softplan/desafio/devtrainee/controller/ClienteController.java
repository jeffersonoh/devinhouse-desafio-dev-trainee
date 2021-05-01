package br.com.softplan.desafio.devtrainee.controller;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api/v1/soft-client")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping(produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public List<Cliente> getCliente() {
        return clienteService.getCliente();
    }

    @GetMapping(path = "/cliente" ,produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Cliente getClienteByCPF(@RequestParam String cpf) {
        return clienteService.getClienteByCPF(cpf);
    }

    @GetMapping(path = "/{id}", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Cliente getClienteById(@PathVariable Long id) {
        return clienteService.getClienteById(id);
    }
    
    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void registrarClient(@RequestBody Cliente cliente) {
        clienteService.novoCliente(cliente);
    }

    @PutMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizarCliente(@PathVariable("id") Long id,
                                 @RequestBody Cliente cliente) {
        clienteService.atualizarCliente(id, cliente);
    }

    @DeleteMapping(path = "{id}", consumes = APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarCliente(@PathVariable("id") Long id) {
        clienteService.deletarCliente(id);
    }

}
