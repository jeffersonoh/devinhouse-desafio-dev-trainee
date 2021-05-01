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

}
