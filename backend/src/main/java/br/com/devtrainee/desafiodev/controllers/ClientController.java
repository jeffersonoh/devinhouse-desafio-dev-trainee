package br.com.devtrainee.desafiodev.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.service.ClientService;

@RestController
@RequestMapping("v1" + "/clientes")
public class ClientController {

  @Autowired
  ClientService clientService;
  // Deverá haver um endpoint para criação de um cliente;
  @PostMapping("")
  public ResponseEntity<String> createClient() {
    return clientService.createAClient();
    // return ResponseEntity.status(201).build();
  }

  // Deverá haver um endpoint para atualização de um cliente;
  @PutMapping("/{id}")
  public ResponseEntity<?> updateClient(@PathVariable("id") Long id, @RequestBody Client client) {
    return clientService.updateAClient(client);
  }

  // Deverá haver um endpoint para exclusão de um cliente;
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteClient(@PathVariable("id") Long id) {
    return clientService.deleteAClient();
  }

  // Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
  @GetMapping("/{cpf}")
  public ResponseEntity<?> obtainClientByCpf(@PathVariable("cpf") String cpf) {
    return clientService.obtainAClientByCpf(cpf);
  }

  // Deverá haver um endpoint para listagem de todos os clientes cadastrados;
  @GetMapping("")
  public ResponseEntity<String> obtainAllClients() {
    return clientService.obtainAllClients();
  }

}
