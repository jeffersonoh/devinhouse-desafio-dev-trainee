package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.domain.Cliente;
import devtrainee.ejnn.backend.dtos.ClienteInputDTO;
import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;

import devtrainee.ejnn.backend.repositories.ClienteRepository;

import devtrainee.ejnn.backend.exceptions.ClienteInexistenteException;


@Service
@AllArgsConstructor
@Transactional
public class ClienteService {

    private ClienteRepository clienteRepository;
    private ModelMapper mapper;

    private ClienteOutputDTO sanitize(Cliente cliente) {
	return mapper.map(cliente, ClienteOutputDTO.class);
    }
    public ClienteOutputDTO create(ClienteInputDTO clienteInput) {
	Cliente createdClient = clienteRepository.save(mapper.map(clienteInput, Cliente.class));
	return sanitize(createdClient);
    }

    public ClienteOutputDTO findById(long id) {

	Optional<Cliente> cliente = clienteRepository.findById(id);

	if (cliente.isEmpty()) {
	    throw new ClienteInexistenteException();
	}

	return sanitize(cliente.get());
    }

    public List<ClienteOutputDTO> searchByCpf(String cpf) {
	List<Cliente> searchResults = clienteRepository.findClienteByCpfLike(cpf);
	return searchResults.stream().map(this::sanitize).collect(Collectors.toList());
    }

    public List<ClienteOutputDTO> findAll() {
	List<Cliente> clientes = clienteRepository.findAll();
	return clientes.stream().map(this::sanitize).collect(Collectors.toList());
    }

    public boolean existsById(long id) {
	return clienteRepository.existsById(id);
    }

    public ClienteOutputDTO update(long id, ClienteInputDTO update) {

	Optional<Cliente> optUpdateCandidate = clienteRepository.findById(id);

	if (optUpdateCandidate.isPresent()) {
	    Cliente updateCandidate = optUpdateCandidate.get();
	    mapper.map(update, updateCandidate);
	    Cliente ret = clienteRepository.save(updateCandidate);
	    return sanitize(ret);
	}

	return create(update);
    }

    public void deleteById(long id) {
	if (existsById(id)) {
	    clienteRepository.deleteById(id);
	}
    }

}
