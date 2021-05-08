package br.com.devtrainee.desafiodev.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import br.com.devtrainee.desafiodev.DTO.ClientInDTO;
import br.com.devtrainee.desafiodev.DTO.ClientOutDTO;
import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.service.ClientService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("v1" + "/clientes")
public class ClientController {

  @Autowired
  ClientService clientService;
  // Deverá haver um endpoint para criação de um cliente;
  @PostMapping("")
  public ClientOutDTO createClient(@RequestBody ClientInDTO newClient) {
    return clientService.createAClient(newClient);
  }

  // Deverá haver um endpoint para atualização de um cliente;
  @PutMapping("/{id}")
  public ClientOutDTO updateClient(@PathVariable("id") Long id, @RequestBody ClientInDTO updatedClient) {
    return clientService.updateAClient(id, updatedClient);
  }

  // Deverá haver um endpoint para exclusão de um cliente;
  @ResponseStatus(HttpStatus.NO_CONTENT)
  @DeleteMapping("/{id}")
  public void deleteClient(@PathVariable("id") Long id) {
    clientService.deleteAClient(id);
  }

  // Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
  @GetMapping("/cpf")
  public ClientOutDTO obtainClientByCpf(@RequestParam String q) {
    return clientService.obtainAClientByCpf(q);
  }
  
  @GetMapping("/{id}")
  public ClientOutDTO obtainAClient(@PathVariable("id") Long id) {
    return clientService.getById(id);
  }
  // Deverá haver um endpoint para listagem de todos os clientes cadastrados;
  @GetMapping("")
  public List<ClientOutDTO> obtainAllClients() {
    return clientService.obtainAllClients();
  }

}
