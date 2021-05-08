package br.com.devtrainee.desafiodev.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devtrainee.desafiodev.DTO.ClientInDTO;
import br.com.devtrainee.desafiodev.DTO.ClientOutDTO;
import br.com.devtrainee.desafiodev.Exceptions.ClientNotFoundException;
import br.com.devtrainee.desafiodev.model.Client;
import br.com.devtrainee.desafiodev.repository.ClientRepository;

@Service
@Transactional
public class ClientService {

  @Autowired
  ClientRepository clientRepository;

  @Autowired
  private ModelMapper modelMapper;

  public Client toClient(ClientInDTO clientDTO) {
    return modelMapper.map(clientDTO, Client.class);
  }

  public Client toClient(ClientOutDTO clientDTO) {
    return modelMapper.map(clientDTO, Client.class);
  }

  public ClientOutDTO toDto(Client client) {
    return modelMapper.map(client, ClientOutDTO.class);
  }

  public List<ClientOutDTO> toDto(List<Client> clients) {
    return clients.stream().map(this::toDto).collect(Collectors.toList());
  }

  /*
   * 
   * public Pessoa cadastrar(Pessoa pessoa) { Optional<Pessoa> optionalPessoa =
   * pessoaRepository.findByCpf(pessoa.getCpf()); optionalPessoa.ifPresent(p -> {
   * if (!p.equals(pessoa)) { throw new
   * CpfJaExistenteException(String.format("Já existe cadastro com o cpf %s",
   * pessoa.getCpf())); } }); return pessoaRepository.save(pessoa); }
   * 
   * public Pessoa atualizar(Long pessoaId, Pessoa pessoa) { Pessoa pessoaAtual =
   * buscarPorId(pessoaId); BeanUtils.copyProperties(pessoa, pessoaAtual, "id",
   * "dataCriacao", "dataUltimaAtualizacao", "cpf");
   * 
   * return pessoaRepository.save(pessoaAtual); }
   * 
   * public void excluir(Long pessoaId) {
   * pessoaRepository.delete(buscarPorId(pessoaId)); }
   * 
   * public Pessoa buscarPorId(Long id) { return pessoaRepository.findById(id)
   * .orElseThrow(() -> new
   * PessoaNaoEncontradaException(String.format("Pessoa de id %d não encontrada!",
   * id))); }
   */
  /*
   * Cliente precisa estar cadastrado para realizar o agendamento; O cadastro de
   * cliente deverá ter os campos: Nome, CPF e Data de Nascimento; Não poderá ser
   * cadastrado mais de um cliente para o mesmo CPF;
   */
  public ClientOutDTO createAClient(ClientInDTO newClient) {
    Client client = toClient(newClient);
    // TODO: substitute runtimeexception for bussinesslogic exception
    if (clientRepository.findByCpf(client.getCpf()).isPresent())
      throw new RuntimeException("CPF já cadastrado");
    return toDto(clientRepository.save(client));
  }

  public ClientOutDTO updateAClient(Long id, ClientInDTO updatesToClient) {
    Client updatedClient = toClient(updatesToClient);
    Client clientOnDB = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
    BeanUtils.copyProperties(updatedClient, clientOnDB, "id", "cpf");
    return toDto(clientRepository.save(clientOnDB));
  }

  /*
   * 
   * // Deverá haver um endpoint para exclusão de um cliente;
   * 
   * @DeleteMapping("/{id}") public ResponseEntity<?>
   * deleteClient(@PathVariable("id") Long id) { return
   * clientService.deleteAClient(id); }
   * 
   *    */
  public void deleteAClient(Long id) {
    Client client = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
    clientRepository.delete(client);
  }

  /*
   * // Deverá haver um endpoint para busca de um cliente baseado no seu cpf;
   * 
   * @GetMapping("/{cpf}") public ResponseEntity<?>
   * obtainClientByCpf(@PathVariable("cpf") String cpf) { return
   * clientService.obtainAClientByCpf(cpf); }
   * 
   * */
  public ClientOutDTO obtainAClientByCpf(String cpf) {
    Client client = clientRepository.findByCpf(cpf).orElseThrow(() -> new ClientNotFoundException(cpf));
    // BeanUtils.copyProperties(updatedClient, clientOnDB, "id", "cpf");
    return toDto(client);
  }

  /*
   * // Deverá haver um endpoint para listagem de todos os clientes cadastrados;
   * 
   * @GetMapping("") public ResponseEntity<String> obtainAllClients() { return
   * clientService.obtainAllClients();
   */

  public List<ClientOutDTO> obtainAllClients() {
    return toDto(clientRepository.findAll());
  }

  public ClientOutDTO getById(Long id) {
    Client client = clientRepository.findById(id).orElseThrow(() -> new ClientNotFoundException(id));
    return toDto(client);
  }

  public void vai() {
    // new Client();
    clientRepository.save(Client.builder().cpf("011.055.077-88").build());
  }
}
