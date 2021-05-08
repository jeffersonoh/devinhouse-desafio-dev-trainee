package br.com.devtrainee.desafiodev.Exceptions;

public class ClientNotFoundException extends RuntimeException {

  public ClientNotFoundException(Long id) {
    super(String.format("O usuário, id: %d, não existe", id));
  }

  public ClientNotFoundException(String cpf) {
    super(String.format("Não há usuário registrado com o CPF %d", cpf));
  }

}
