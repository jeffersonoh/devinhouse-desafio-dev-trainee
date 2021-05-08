package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import java.util.Optional;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import devtrainee.ejnn.backend.domain.Cliente;
import devtrainee.ejnn.backend.dtos.ClienteInputDTO;
import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;

import devtrainee.ejnn.backend.repositories.ClienteRepository;

import devtrainee.ejnn.backend.exceptions.ClienteInexistenteException;
import devtrainee.ejnn.backend.exceptions.CpfJaCadastradoException;


@Service
@AllArgsConstructor
@Transactional
public class ClienteService {

    private ClienteRepository clienteRepository;
    private ModelMapper mapper;

    private ClienteOutputDTO mapToOutputDTO(Cliente cliente) {
	return mapper.map(cliente, ClienteOutputDTO.class);
    }

    public ClienteOutputDTO create(ClienteInputDTO clienteInput) {
	Optional<Cliente> cliente = clienteRepository.findByCpf(clienteInput.getCpf());
	if (cliente.isPresent()) {
	    throw new CpfJaCadastradoException();
	}

	Cliente createdClient = clienteRepository.save(mapper.map(clienteInput, Cliente.class));
	return mapToOutputDTO(createdClient);
    }

    public ClienteOutputDTO findById(long id) {

	Optional<Cliente> cliente = clienteRepository.findById(id);

	if (cliente.isEmpty()) {
	    throw new ClienteInexistenteException();
	}

	return mapToOutputDTO(cliente.get());
    }

    public List<ClienteOutputDTO> searchByCpf(String cpf) {
	List<Cliente> searchResults = clienteRepository.findByCpfContaining(cpf);
	return searchResults.stream().map(this::mapToOutputDTO).collect(Collectors.toList());
    }

    public List<ClienteOutputDTO> findAll() {
	List<Cliente> clientes = clienteRepository.findAll();
	return clientes.stream().map(this::mapToOutputDTO).collect(Collectors.toList());
    }

    public Page<ClienteOutputDTO> findAll(PageRequest pageRequest) {
	Page<Cliente> page = clienteRepository.findAll(pageRequest);
	return page.map((x) -> mapper.map(x, ClienteOutputDTO.class));
    };

    public boolean existsById(long id) {
	return clienteRepository.existsById(id);
    }

    public ClienteOutputDTO update(long id, ClienteInputDTO update) {

	Optional<Cliente> optUpdateCandidate = clienteRepository.findById(id);

	if (optUpdateCandidate.isPresent()) {
	    Cliente updateCandidate = optUpdateCandidate.get();
	    mapper.map(update, updateCandidate);
	    Cliente ret = clienteRepository.save(updateCandidate);
	    return mapToOutputDTO(ret);
	}

	return create(update);
    }

    public void deleteById(long id) {
	if (existsById(id)) {
	    clienteRepository.deleteById(id);
	}
    }

}
