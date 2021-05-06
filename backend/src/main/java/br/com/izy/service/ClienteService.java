package br.com.izy.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.izy.dto.ClienteDTOInput;
import br.com.izy.dto.ClienteDTOUpdate;
import br.com.izy.entity.Cliente;
import br.com.izy.exception.ClienteNotFoundException;
import br.com.izy.exception.CpfJaExistenteException;
import br.com.izy.repository.ClienteRepository;
import br.com.izy.util.AtualizaColunasUtil;

@Service
public class ClienteService {
	
	@Autowired
	ClienteRepository repository;
	
	public List<Cliente> findAll(String busca) {
		if (busca != null) {
			return (List<Cliente>) repository.findByNomeContainingIgnoreCaseOrCpfContainingIgnoreCase(busca, busca);
		}
		
		return (List<Cliente>) repository.findAll();
	}
	
	public Cliente find(Long id, String cpf) {
		Optional<Cliente> result = repository.findByIdOrCpf(id, cpf);
		
		return result.orElseThrow(() -> new ClienteNotFoundException("Nenhum cliente encontrado"));
	}
	
	public Cliente create(ClienteDTOInput cliente) {
		cliente.setCpf(cliente.getCpf().replaceAll("([^\\d])", ""));
		
		Optional<Cliente> clienteResult = repository.findByCpf(cliente.getCpf());
		
		Cliente novoCliente = new Cliente();
		
		Cliente result = novoCliente.converteClienteDTO(cliente);
		
		clienteResult.ifPresent(c -> {
			if (!c.equals(result)) {
        throw new CpfJaExistenteException("CPF informado já cadastrado");
			}
		});
		
		return repository.save(novoCliente);
	}
	
	public void update(Long id, ClienteDTOUpdate clienteDTO) {
		Optional<Cliente> result = repository.findById(id);
		
		Cliente cliente = result.orElseThrow(() -> new ClienteNotFoundException("Nenhum cliente encontrado"));
		
		BeanUtils.copyProperties(clienteDTO, cliente, AtualizaColunasUtil.getNullPropertyNames(clienteDTO));
		
		repository.save(cliente);
	}
	
	public void delete(Long id) {
		Optional<Cliente> result = repository.findById(id);
		
		Cliente cliente = result.orElseThrow(() -> new ClienteNotFoundException("Nenhum cliente encontrado"));
		
		repository.delete(cliente);
	}
	
}
