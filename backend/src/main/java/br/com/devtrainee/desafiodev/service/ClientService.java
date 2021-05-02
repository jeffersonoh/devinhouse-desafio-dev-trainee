package br.com.devtrainee.desafiodev.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.repository.ClientRepository;

@Service
@Transactional
public class ClientService {

    /*
   * Cliente precisa estar cadastrado para realizar o agendamento; O cadastro de
   * cliente deverá ter os campos: Nome, CPF e Data de Nascimento; Não poderá ser
   * cadastrado mais de um cliente para o mesmo CPF;
   */

  @Autowired
  ClientRepository clientRepository;

  public void vai() {
    // new Client();
    clientRepository.save(Client.builder().cpf("011.055.077-88").build());
  }
  
}
