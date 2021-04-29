package br.com.devtrainee.desafiodev.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClientController {

  /*
   * Cliente precisa estar cadastrado para realizar o agendamento; O cadastro de
   * cliente deverá ter os campos: Nome, CPF e Data de Nascimento; Não poderá ser
   * cadastrado mais de um cliente para o mesmo CPF;
   * ___
   * Considere em utilizar dados mockados ou fictícios para o cumprimento do nosso 
   * desafio como por exemplo a listagem de exames disponíveis;
   */

  // Deverá haver um endpoint para listagem dos exames disponíveis para agendamento, exibindo apenas nome do exame e id;
  @GetMapping("v1" + "/agendamentos")
  public ResponseEntity<?> getAllApointments() {
    return ResponseEntity.status(200).build();
  }

  // Deverá haver um endpoint para criação de um cliente;
  @PostMapping("v1" + "/clientes")
  public ResponseEntity<?> createClient() {
    return ResponseEntity.status(201).build();
  }
  // Deverá haver um endpoint para atualização de um cliente;
  @PutMapping("v1" + "/clientes/{id}")
  public ResponseEntity<?> updateClient(@PathVariable("id") Long id) {
    return ResponseEntity.status(201).build();
  }
  // Deverá haver um endpoint para exclusão de um cliente;
  @DeleteMapping("v1" + "/clientes/{id}")
  public ResponseEntity<?> deleteClient(@PathVariable("id") Long id) {
    return ResponseEntity.status(201).build();
  }
  // Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
  @GetMapping("v1" + "/clientes/{cpf}")
  public ResponseEntity<?> getClient(@PathVariable("cpf") String cpf) {
    return ResponseEntity.status(201).build();
  }
  // Deverá haver um endpoint para listagem de todos os clientes cadastrados;
    @GetMapping("v1" + "/clients")
    public String getAllClients() {
      return "olá";
    }
  // Deverá haver um endpoint para edição de um agendamento realizado, apenas dia e hora poderão ser editados;
  @PutMapping("v1" + "/agendamento/{id}")
  public ResponseEntity<?> updateAppointment(@PathVariable("id") Long id) {
    return ResponseEntity.status(201).build();
  }
  // Deverá haver um endpoint para exclusão de um agendamento realizado;
  @DeleteMapping("v1" + "/agendamento/{id}")
  public ResponseEntity<?> deleteAppointment(@PathVariable("id") Long id) {
    return ResponseEntity.status(201).build();
  }
  //faltante: endpoint pra criar agendamento
  @PostMapping("v1" + "/agendamentos")
  public ResponseEntity<?> createApointment() {
    return ResponseEntity.status(200).build();
  }

}
