package devtrainee.ejnn.backend.services;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import org.modelmapper.ModelMapper;

import devtrainee.ejnn.backend.domain.Cliente;
import devtrainee.ejnn.backend.dtos.ClienteInputDTO;
import devtrainee.ejnn.backend.dtos.ClienteOutputDTO;

import devtrainee.ejnn.backend.repositories.ClienteRepository;


@Service
@AllArgsConstructor
@Transactional
public class ClienteService {

    private ClienteRepository clienteRepository;
    private ModelMapper mapper;

    public ClienteOutputDTO create(ClienteInputDTO clienteInput) {
	Cliente createdClient = clienteRepository.save(mapper.map(clienteInput, Cliente.class));
	return mapper.map(createdClient, ClienteOutputDTO.class);
    }

}
