package br.com.devinhouse.spring.trabalhospringboot.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.spring.trabalhospringboot.dto.ClienteDTO;
import br.com.devinhouse.spring.trabalhospringboot.service.ClienteService;

@RestController
@RequestMapping(path = "/v1/clientes")
@CrossOrigin(origins = "http://localhost:3000")
public class ClienteController {
    
    @Autowired
    private ClienteService service;

    @PostMapping(path = "/cadastrar")
    public void cadastrarCliente(@RequestBody ClienteDTO cliente){
        service.cadastroCliente(cliente);
    }

    @PutMapping(path = "/atualizar/{id}")
    public void atualizarCliente(@PathVariable("id") Integer id,
                                @RequestBody ClienteDTO clienteAtualizado){
        service.atualizarCliente(clienteAtualizado, id);
    }

    @DeleteMapping(path = "/deletar/{id}")
    public void deletarCliente(@PathVariable("id") Integer id){
        service.deletarCadastro(id);
    }

    @GetMapping(path = "/procurar/filtrar",
                produces = APPLICATION_JSON_VALUE)
    public List<ClienteDTO> procurarClientePorCpf(@RequestParam("cpf") String cpf){
    return service.procurarClientePorCpf(cpf);
    }

    @GetMapping(path = "/procurar/todos", 
                produces = APPLICATION_JSON_VALUE)
    public List<ClienteDTO> listaDeTodosClientesCadastrados(){
    return service.listaDeTodosClientesCadastrados();
    }
}