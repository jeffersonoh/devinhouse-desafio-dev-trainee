package br.com.devtrainee.desafiodev.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {
  
  @GetMapping("/")
  public String ListagemDeClientes() {
    return "olá";
  }

}
