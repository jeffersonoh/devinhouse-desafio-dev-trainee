package br.com.softplan.desafio.devtrainee.controller;

import br.com.softplan.desafio.devtrainee.entity.Cliente;
import br.com.softplan.desafio.devtrainee.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/soft-client")
public class ClienteController {

    @Autowired
    ClienteService clienteService;

    @GetMapping
    public List<Cliente> getCliente() {
        return clienteService.getCliente();
    }

    @GetMapping(path = "/cliente")
    public Cliente getClienteByCPF(@RequestParam String cpf) {
        return clienteService.getClienteByCPF(cpf);
    }

    @GetMapping(path = "/{id}")
    public Optional<Cliente> getClienteById(@PathVariable Long id) {
        return clienteService.getClienteById(id);
    }
    @PostMapping
    public void registrarClient(@RequestBody Cliente cliente) {
        clienteService.novoCliente(cliente);
    }

    @PutMapping(path = "{id}")
    public List<Cliente> atualizarCliente(@PathVariable("id") Long id,
                                 @RequestBody Cliente cliente) {
        return clienteService.atualizarCliente(id, cliente);
    }



    @DeleteMapping(path = "{id}")
    public void deletarCliente(@PathVariable("id") Long id) {
        clienteService.deletarCliente(id);
    }

}
